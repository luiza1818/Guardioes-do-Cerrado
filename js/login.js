const btnEntrar = document.getElementById('btnEntrar');
const btnCadastrar = document.getElementById('btnCadastrar');
const login = document.getElementById('login');
const cadastro = document.getElementById('cadastro');
const recuperar = document.getElementById('recuperar');
const mensagem = document.getElementById('mensagemConta');
function mostrarFormulario(form) {
    for (const item of [login, cadastro, recuperar]) item.style.display = item === form ? 'flex' : 'none';
    btnEntrar.classList.toggle('ativo', form === login);
    btnCadastrar.classList.toggle('ativo', form === cadastro);
    mensagem.textContent = '';
}
btnEntrar.addEventListener('click', () => mostrarFormulario(login));
btnCadastrar.addEventListener('click', () => mostrarFormulario(cadastro));
async function enviar(form, callback) {
    const button = form.querySelector('button[type="submit"], button.principal');
    button.disabled = true;
    mensagem.textContent = 'Aguarde…';
    try { await callback(); }
    catch (error) {
        const messages = {
            invalid_credentials: 'Email ou senha incorretos.',
            email_not_confirmed: 'Confirme seu email antes de entrar.',
            user_already_exists: 'Já existe uma conta com esse email.',
            weak_password: 'Escolha uma senha mais forte, com pelo menos 8 caracteres.',
            over_email_send_rate_limit: 'Aguarde alguns minutos antes de solicitar outro email.',
            over_request_rate_limit: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.'
        };
        mensagem.textContent = messages[error.code] || error.message || 'Não foi possível concluir. Verifique a conexão e tente novamente.';
    } finally { button.disabled = false; }
}
login.addEventListener('submit', event => {
    event.preventDefault();
    enviar(login, async () => {
        const { error } = await Guardioes.client.auth.signInWithPassword({
            email: login.querySelector('[type="email"]').value.trim(),
            password: login.querySelector('[type="password"]').value
        });
        if (error) throw error;
        location.replace('principal.html');
    });
});
cadastro.addEventListener('submit', event => {
    event.preventDefault();
    enviar(cadastro, async () => {
        const passwords = cadastro.querySelectorAll('[type="password"]');
        if (passwords[0].value !== passwords[1].value) throw new Error('As senhas precisam ser iguais.');
        const { data, error } = await Guardioes.client.auth.signUp({
            email: cadastro.querySelector('[type="email"]').value.trim(),
            password: passwords[0].value,
            options: {
                data: { nome: cadastro.querySelector('[type="text"]').value.trim() },
                emailRedirectTo: new URL('login.html', location.href).href
            }
        });
        if (error) throw error;
        if (data.session) location.replace('principal.html');
        else mensagem.textContent = 'Confira seu email para confirmar o cadastro. Depois, entre com sua senha.';
    });
});
document.getElementById('btnEsqueciSenha').addEventListener('click', async () => {
    const email = login.querySelector('[type="email"]');
    if (!email.checkValidity() || !email.value) { email.reportValidity(); return; }
    const button = document.getElementById('btnEsqueciSenha');
    button.disabled = true;
    try {
        const { error } = await Guardioes.client.auth.resetPasswordForEmail(email.value.trim(), {
            redirectTo: new URL('login.html', location.href).href
        });
        if (error) throw error;
        mensagem.textContent = 'Se houver uma conta com esse email, você receberá um link para redefinir a senha.';
    } catch { mensagem.textContent = 'Não foi possível enviar o email. Aguarde e tente novamente.'; }
    finally { button.disabled = false; }
});
recuperar.addEventListener('submit', event => {
    event.preventDefault();
    enviar(recuperar, async () => {
        const passwords = recuperar.querySelectorAll('[type="password"]');
        if (passwords[0].value !== passwords[1].value) throw new Error('As senhas precisam ser iguais.');
        const { error } = await Guardioes.client.auth.updateUser({ password: passwords[0].value });
        if (error) throw error;
        location.replace('principal.html');
    });
});
mostrarFormulario(Guardioes.recovery ? recuperar : login);
