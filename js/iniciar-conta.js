(async () => {
    try {
        if (!await Guardioes.initialize() && !location.pathname.endsWith('/login.html')) return;
        for (const placeholder of document.querySelectorAll('script[data-app-src]')) {
            await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = placeholder.dataset.appSrc;
                script.onload = resolve;
                script.onerror = () => reject(new Error('Não foi possível carregar a página. Recarregue para tentar novamente.'));
                document.body.append(script);
            });
        }
        document.dispatchEvent(new Event('guardioes:ready'));
        document.getElementById('btnSair')?.addEventListener('click', async () => {
            try { await Guardioes.signOut(); }
            catch { Guardioes.status('Não foi possível salvar e sair. Verifique a conexão e tente novamente.'); }
        });
    } catch (error) {
        Guardioes.status(error.message);
        const retry = document.createElement('button');
        retry.type = 'button';
        retry.className = 'botao';
        retry.textContent = 'Tentar novamente';
        retry.addEventListener('click', () => location.reload());
        document.getElementById('contaStatus').after(retry);
    }
})();
