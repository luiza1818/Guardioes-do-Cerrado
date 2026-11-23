import { supabase, pagina } from './supabase-client.js';

const entrar = document.querySelector('#login');
const cadastrar = document.querySelector('#cadastro');
const recuperar = document.querySelector('#recuperar-senha');
const status = document.querySelector('#status-auth');
const btnEntrar = document.querySelector('#btnEntrar');
const btnCadastrar = document.querySelector('#btnCadastrar');
const btnGoogle = document.querySelector('#entrar-google');
const btnEsqueci = document.querySelector('#esqueci-senha');

function avisar(mensagem, erro = false) {
  status.textContent = mensagem;
  status.style.color = erro ? '#a32626' : '#175b35';
}
function modo(tipo) {
  entrar.hidden = tipo !== 'entrar';
  cadastrar.hidden = tipo !== 'cadastrar';
  recuperar.hidden = tipo !== 'recuperar';
  btnEntrar.classList.toggle('ativo', tipo === 'entrar');
  btnCadastrar.classList.toggle('ativo', tipo === 'cadastrar');
  btnGoogle.hidden = tipo === 'recuperar';
  btnEsqueci.hidden = tipo === 'recuperar';
  avisar('');
}
function carregando(formulario, ativo) {
  const btn = formulario.querySelector('[type=submit]');
  if (!btn.dataset.rotulo) btn.dataset.rotulo = btn.textContent.trim();
  btn.disabled = ativo;
  btn.textContent = ativo ? 'Aguarde...' : btn.dataset.rotulo;
}
function erroAmigavel(erro) {
  const texto = erro?.message || String(erro || 'Erro de conexão');
  if (/invalid login credentials/i.test(texto)) return 'E-mail ou senha incorretos.';
  if (/email not confirmed/i.test(texto)) return 'Confirme seu e-mail antes de entrar.';
  if (/already registered/i.test(texto)) return 'Esse e-mail já está cadastrado.';
  if (/provider is not enabled|unsupported provider/i.test(texto)) return 'O login Google ainda precisa ser ativado no painel do Supabase.';
  return texto;
}

btnEntrar.addEventListener('click', () => modo('entrar'));
btnCadastrar.addEventListener('click', () => modo('cadastrar'));
btnEsqueci.addEventListener('click', async () => {
  const email = entrar.elements.email.value.trim();
  if (!email) {
    avisar('Digite seu e-mail e clique novamente em “Esqueci minha senha”.', true);
    return;
  }
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: pagina('login.html?recuperar=1')
    });
    if (error) throw error;
    avisar('Se o e-mail estiver cadastrado, enviaremos um link para redefinir sua senha.');
  } catch (e) { avisar(erroAmigavel(e), true); }
});

entrar.addEventListener('submit', async (evento) => {
  evento.preventDefault();
  carregando(entrar, true);
  avisar('');
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: entrar.elements.email.value.trim(),
      password: entrar.elements.senha.value
    });
    if (error) throw error;
    window.location.replace(pagina('principal.html'));
  } catch (e) { avisar(erroAmigavel(e), true); }
  finally { carregando(entrar, false); }
});

cadastrar.addEventListener('submit', async (evento) => {
  evento.preventDefault();
  const nome = cadastrar.elements.nome.value.trim();
  const email = cadastrar.elements.email.value.trim();
  const senha = cadastrar.elements.senha.value;
  if (nome.length < 2) return avisar('Digite um nome com pelo menos 2 caracteres.', true);
  if (senha.length < 8) return avisar('Use uma senha com pelo menos 8 caracteres.', true);
  if (senha !== cadastrar.elements.confirmar.value) return avisar('As senhas não conferem.', true);
  carregando(cadastrar, true);
  avisar('');
  try {
    const { data, error } = await supabase.auth.signUp({
      email, password: senha,
      options: { data: { nome }, emailRedirectTo: pagina('login.html') }
    });
    if (error) throw error;
    if (data.session) window.location.replace(pagina('principal.html'));
    else avisar('Cadastro solicitado! Confira seu e-mail para confirmar a conta.');
  } catch (e) { avisar(erroAmigavel(e), true); }
  finally { carregando(cadastrar, false); }
});

btnGoogle.addEventListener('click', async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: pagina('login.html') }
    });
    if (error) throw error;
  } catch (e) { avisar(erroAmigavel(e), true); }
});

recuperar.addEventListener('submit', async (evento) => {
  evento.preventDefault();
  const senha = recuperar.elements.novaSenha.value;
  if (senha.length < 8) return avisar('Use uma senha com pelo menos 8 caracteres.', true);
  if (senha !== recuperar.elements.confirmaNovaSenha.value) return avisar('As senhas não conferem.', true);
  carregando(recuperar, true);
  try {
    const { error } = await supabase.auth.updateUser({ password: senha });
    if (error) throw error;
    avisar('Senha atualizada! Você já pode entrar na sua conta.');
    await supabase.auth.signOut();
    history.replaceState({}, '', pagina('login.html'));
    modo('entrar');
    avisar('Senha atualizada! Entre com sua nova senha.');
  } catch (e) { avisar(erroAmigavel(e), true); }
  finally { carregando(recuperar, false); }
});

// Na volta de um link de recuperação, a sessão do link permite alterar a senha.
supabase.auth.onAuthStateChange((evento) => {
  if (evento === 'PASSWORD_RECOVERY') modo('recuperar');
});

modo('entrar');
try {
  const { data: { session } } = await supabase.auth.getSession();
  if (new URLSearchParams(location.search).has('recuperar') && session) {
    modo('recuperar');
  } else if (session) {
    window.location.replace(pagina('principal.html'));
  }
} catch (e) { avisar(erroAmigavel(e), true); }
