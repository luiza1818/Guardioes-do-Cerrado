/* Supabase JS 2.119.0; somente a chave pública deve estar no navegador. */
(() => {
    const recovery = new URLSearchParams(location.hash.slice(1)).get('type') === 'recovery';
    const client = supabase.createClient(
        'https://bghdfbfbiledhvkfwgyw.supabase.co',
        'sb_publishable_jIyg3CyUCySq_aqUrieEVA_k7XUuCjd'
    );
    const nativeStorage = window.localStorage;
    let user = null;
    let values = {};
    let inflight = null;
    let retryTimer;
    let redirecting = false;
    function goToLogin() {
        if (redirecting) return;
        redirecting = true;
        location.replace('login.html');
    }
    const prefix = () => `guardioes:${user.id}:`;
    function readPending() {
        const changes = Object.create(null);
        const namespace = prefix() + 'pending:';
        for (const durableKey of Object.keys(nativeStorage)) {
            if (!durableKey.startsWith(namespace)) continue;
            const serialized = nativeStorage.getItem(durableKey);
            if (!serialized) continue;
            const entry = JSON.parse(serialized);
            const previous = changes[entry.key];
            const records = [...(previous?.records || []), durableKey];
            changes[entry.key] = { ...(previous && previous.order > entry.order ? previous : entry), records };
        }
        return changes;
    }
    function queue(key, value) {
        // Immutable entries let other tabs write while a request is in flight.
        nativeStorage.setItem(prefix() + 'pending:' + crypto.randomUUID(), JSON.stringify({
            key, value, order: performance.timeOrigin + performance.now()
        }));
    }
    function status(message) {
        let element = document.getElementById('contaStatus');
        if (!element) {
            element = document.createElement('p');
            element.id = 'contaStatus';
            element.setAttribute('role', 'status');
            element.setAttribute('aria-live', 'polite');
            (document.querySelector('main') || document.body).append(element);
        }
        element.textContent = message;
        element.hidden = !message;
    }
    async function flush() {
        if (inflight) return inflight;
        if (!user || !Object.keys(readPending()).length) return;
        const owner = user.id;
        const synchronize = async () => {
            while (true) {
                const batch = readPending();
                if (!Object.keys(batch).length) break;
                const rows = Object.entries(batch).map(([chave, entry]) => ({
                    usuario_id: owner, chave, valor: entry.value
                }));
                const { error } = await client.from('guardioes_dados').upsert(rows);
                if (error) throw error;
                for (const entry of Object.values(batch)) {
                    // Delete only the exact changes acknowledged by this request.
                    for (const key of entry.records) nativeStorage.removeItem(key);
                }
            }
            status('');
        };
        // Read the queue inside the lock so tabs never send stale snapshots.
        inflight = navigator.locks
            ? navigator.locks.request(prefix() + 'synchronize', synchronize)
            : synchronize();
        try { await inflight; }
        catch (error) {
            status('Não foi possível salvar na nuvem. Seus dados estão guardados neste dispositivo e serão reenviados ao reconectar.');
            clearTimeout(retryTimer);
            retryTimer = setTimeout(() => { flush().catch(() => {}); }, 15000);
            throw error;
        } finally { inflight = null; }
    }
    const storage = {
        getItem(key) { return Object.hasOwn(values, key) ? values[key] : null; },
        setItem(key, value) {
            if (!user) throw new Error('Entre na sua conta para salvar.');
            value = String(value);
            if (values[key] === value) return;
            queue(key, value);
            values[key] = value;
            flush().catch(() => {});
        },
        removeItem(key) {
            if (!user) throw new Error('Entre na sua conta para salvar.');
            // Tombstones prevent a deleted value from returning after a reload.
            queue(key, null);
            delete values[key];
            flush().catch(() => {});
        }
    };
    async function initialize() {
        const { data, error } = await client.auth.getSession();
        if (error) throw error;
        user = data.session?.user || null;
        const loginPage = location.pathname.endsWith('/login.html');
        if (!user) {
            if (!loginPage) goToLogin();
            return false;
        }
        if (loginPage) return true;
        const { data: verified, error: verificationError } = await client.auth.getUser();
        if (verificationError || !verified.user) {
            if (!verified.user && (!verificationError || [401, 403].includes(verificationError.status))) {
                await client.auth.signOut({ scope: 'local' });
                goToLogin();
                return false;
            }
            throw new Error('Não foi possível verificar sua conta. Verifique a conexão e tente novamente.');
        }
        user = verified.user;
        // Never adopt the old, anonymous localStorage data into a signed-in account.
        const { data: rows, error: readError } = await client.from('guardioes_dados')
            .select('chave,valor').eq('usuario_id', user.id);
        if (readError) throw new Error('Não foi possível carregar seus dados. Verifique a conexão e tente novamente.');
        values = Object.fromEntries(rows.filter(row => row.valor !== null).map(row => [row.chave, row.valor]));
        for (const [key, entry] of Object.entries(readPending())) {
            if (entry.value === null) delete values[key]; else values[key] = entry.value;
        }
        const nome = user.user_metadata?.nome || 'Guardião';
        values.nomeUsuario = nome;
        values.usuario = JSON.stringify({ nome, email: user.email });
        flush().catch(() => {});
        client.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_OUT' || (session && session.user.id !== user.id)) {
                goToLogin();
            }
        });
        return true;
    }
    async function signOut() {
        await flush();
        const { error } = await client.auth.signOut();
        if (error) throw error;
        goToLogin();
    }
    window.Guardioes = { recovery, client, storage, flush, signOut, initialize, status };
    window.addEventListener('storage', event => {
        if (!user || !event.key?.startsWith(prefix() + 'pending:') || !event.newValue) return;
        const { key, value } = JSON.parse(event.newValue);
        if (value === null) delete values[key]; else values[key] = value;
        window.dispatchEvent(new StorageEvent('storage', { key, newValue: value }));
    });
    window.addEventListener('online', () => flush().catch(() => {}));
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') flush().catch(() => {});
    });
    // Preserve pending saves before navigation; a failed save remains queued per user.
    document.addEventListener('click', async event => {
        const link = event.target.closest('a[href]');
        if (!link || event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0 || link.target || link.hasAttribute('download')) return;
        const url = new URL(link.href);
        if (url.origin !== location.origin || (url.pathname === location.pathname && url.hash)) return;
        if (!user || !Object.keys(readPending()).length) return;
        event.preventDefault();
        try { await flush(); location.href = url.href; }
        catch { status('A navegação foi pausada porque o salvamento falhou. Reconecte para salvar seus dados antes de sair desta página.'); }
    });
})();
