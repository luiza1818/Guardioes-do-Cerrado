import { supabase, pagina } from './supabase-client.js';

// O Supabase, nunca o localStorage, é a fonte oficial de XP e nível.
let usuarioAtual = null;
const liberarTela = () => document.documentElement.classList.remove('guardioes-verificando');
const elemento = (id) => document.getElementById(id);
const definirTexto = (id, valor) => { const el = elemento(id); if (el) el.textContent = String(valor); };

async function carregarIdentidade() {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    window.location.replace(pagina('login.html'));
    return null;
  }
  return data.user;
}

async function carregarPerfilOficial() {
  const [{ data: perfil, error: erroPerfil }, { data: progresso, error: erroProgresso }] = await Promise.all([
    supabase.from('perfis').select('nome').eq('id', usuarioAtual.id).maybeSingle(),
    supabase.from('progresso').select('xp,nivel,sequencia_dias,ultima_atividade').eq('usuario_id', usuarioAtual.id).maybeSingle()
  ]);
  if (erroPerfil || erroProgresso) {
    console.warn('Não foi possível consultar perfil/progresso.', erroPerfil || erroProgresso);
    return;
  }
  const nome = perfil?.nome || usuarioAtual.user_metadata?.nome || 'Guardião';
  const nomeCurto = nome.split(/\s+/)[0];
  const xp = progresso?.xp ?? 0;
  const nivel = progresso?.nivel ?? 1;
  const sequencia = progresso?.sequencia_dias ?? 0;

  // Compatibilidade com as telas antigas, sem gravar recompensas no servidor.
  localStorage.setItem('usuarioLogado', JSON.stringify({ nome, email: usuarioAtual.email }));
  definirTexto('nomeHero', nomeCurto);
  definirTexto('nomeMenu', nomeCurto);
  definirTexto('nomeUsuario', nome);
  definirTexto('emailUsuario', usuarioAtual.email || '');
  definirTexto('nivelMenu', `Nível ${nivel}`);
  definirTexto('numeroNivel', `Nível ${nivel}`);
  definirTexto('nivelAtual', nivel);
  definirTexto('xpTotal', xp);
  definirTexto('resumoXP', xp);
  definirTexto('resumoSequencia', sequencia);
  definirTexto('sequenciaDias', sequencia);
  definirTexto('sequenciaAtual', sequencia);
  definirTexto('resumoNivel', nivel);
  if (elemento('xpUsuario')) elemento('xpUsuario').textContent = `${xp} XP`;
  if (elemento('nivelUsuario')) elemento('nivelUsuario').textContent = `Nível ${nivel}`;

  window.GuardioesBackend = Object.freeze({
    usuario: { id: usuarioAtual.id, email: usuarioAtual.email, nome },
    progressoOficial: { xp, nivel, sequencia_dias: sequencia },
    // IDs aqui são IDs NUMÉRICOS do banco, não os slugs antigos do site.
    registrarLeitura: (artigoId) => supabase.rpc('registrar_leitura', { p_artigo_id: artigoId }),
    iniciarQuiz: (quizId) => supabase.rpc('iniciar_tentativa_quiz', { p_quiz_id: quizId }),
    responderQuiz: (tentativaId, perguntaId, alternativaId) => supabase.rpc('registrar_resposta_quiz', {
      p_tentativa_id: tentativaId, p_pergunta_id: perguntaId, p_alternativa_id: alternativaId
    }),
    finalizarQuiz: (tentativaId) => supabase.rpc('finalizar_tentativa_quiz', { p_tentativa_id: tentativaId }),
    atualizarPerfil: carregarPerfilOficial
  });
}

async function iniciarSincronizacaoConfiguracoes() {
  const naPaginaConfiguracoes = location.pathname.endsWith('/configuracoes.html');
  const { data, error } = await supabase.from('configuracoes_usuario')
    .select('animacoes_ativadas,folhas_animadas_ativadas,acessibilidade,extras')
    .eq('usuario_id', usuarioAtual.id).maybeSingle();
  if (error) {
    console.warn('Falha ao carregar preferências da nuvem:', error);
    return;
  }
  if (data) {
    let antigos = {};
    try { antigos = JSON.parse(localStorage.getItem('configuracoes') || '{}'); } catch { /* local inválido */ }
    const mesclado = {
      ...antigos, ...(data.extras || {}),
      animacoes: data.animacoes_ativadas,
      folhas: data.folhas_animadas_ativadas
    };
    localStorage.setItem('configuracoes', JSON.stringify(mesclado));
    window.dispatchEvent(new StorageEvent('storage', { key: 'configuracoes' }));
    if (naPaginaConfiguracoes && typeof window.carregarConfiguracoes === 'function') window.carregarConfiguracoes();
  }
  if (!naPaginaConfiguracoes) return;
  const ids = ['musica','natureza','botoes','animacoes','folhas','dicas','vibracao','volume'];
  const enviar = async () => {
    const valores = Object.fromEntries(ids.map((id) => {
      const el = elemento(id);
      return [id, id === 'volume' ? Number(el?.value || 0) : Boolean(el?.checked)];
    }));
    const { error: erroSalvar } = await supabase.from('configuracoes_usuario').upsert({
      usuario_id: usuarioAtual.id,
      animacoes_ativadas: valores.animacoes,
      folhas_animadas_ativadas: valores.folhas,
      acessibilidade: {},
      extras: {
        musica: valores.musica, natureza: valores.natureza, botoes: valores.botoes,
        dicas: valores.dicas, vibracao: valores.vibracao, volume: valores.volume
      }
    }, { onConflict: 'usuario_id' });
    if (erroSalvar) console.error('Não foi possível sincronizar preferências:', erroSalvar);
  };
  let tempo;
  const agendar = () => { clearTimeout(tempo); tempo = setTimeout(enviar, 450); };
  ids.forEach(id => {
    const el = elemento(id);
    if (!el) return;
    el.addEventListener('change', agendar);
    if (id === 'volume') el.addEventListener('input', agendar);
  });
  for (const id of ['btnSalvar','btnRestaurar']) elemento(id)?.addEventListener('click', agendar);
}

function instalarSair() {
  if (document.querySelector('.guardioes-sair')) return;
  const botao = document.createElement('button');
  botao.className = 'guardioes-sair';
  botao.type = 'button';
  botao.textContent = 'Sair da conta';
  botao.addEventListener('click', async () => {
    botao.disabled = true;
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(`Não foi possível encerrar a sessão: ${error.message}`);
      botao.disabled = false;
      return;
    }
    location.replace(pagina('login.html'));
  });
  document.body.appendChild(botao);
}

try {
  usuarioAtual = await carregarIdentidade();
  if (usuarioAtual) {
    instalarSair();
    await carregarPerfilOficial();
    await iniciarSincronizacaoConfiguracoes();
    supabase.auth.onAuthStateChange((evento) => {
      if (evento === 'SIGNED_OUT') location.replace(pagina('login.html'));
    });
  }
} catch (erro) {
  console.error('Erro ao conectar com Supabase:', erro);
  const alerta = document.createElement('div');
  alerta.className = 'guardioes-nota';
  alerta.textContent = 'Não foi possível conectar ao Supabase. Atualize a página ou confira sua conexão.';
  document.body.prepend(alerta);
} finally { liberarTela(); }
