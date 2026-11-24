
import { supabase, pagina } from './supabase-client.js';

let usuarioAtual = null;
let sequenciaSincronizada = null;

const liberarTela = () => {
    document.documentElement.classList.remove('guardioes-verificando');
};

const elemento = (id) => document.getElementById(id);

const definirTexto = (id, valor) => {
    const el = elemento(id);

    if (el) {
        el.textContent = String(valor);
    }
};

function obterDataHojeBrasilia() {
    const partes = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).formatToParts(new Date());

    const ano = partes.find(p => p.type === 'year').value;
    const mes = partes.find(p => p.type === 'month').value;
    const dia = partes.find(p => p.type === 'day').value;

    return `${ano}-${mes}-${dia}`;
}

function lerArmazenamento(chave) {
    try {
        if (window.Guardioes?.storage?.getItem) {
            return window.Guardioes.storage.getItem(chave);
        }

        return localStorage.getItem(chave);
    } catch {
        return null;
    }
}

function gravarArmazenamento(chave, valor) {
    try {
        if (window.Guardioes?.storage?.setItem) {
            window.Guardioes.storage.setItem(chave, valor);
        } else {
            localStorage.setItem(chave, valor);
        }
    } catch (erro) {
        console.warn('Não foi possível atualizar o armazenamento local:', erro);
    }
}

function sincronizarProgressoLocal(xp, sequencia) {
    let progresso = {};

    try {
        progresso = JSON.parse(
            lerArmazenamento('progresso') || '{}'
        );
    } catch {
        progresso = {};
    }

    progresso.xp = xp;
    progresso.sequencia = sequencia;

    gravarArmazenamento(
        'progresso',
        JSON.stringify(progresso)
    );

    gravarArmazenamento(
        'ultimaVisitaGuardioes',
        obterDataHojeBrasilia()
    );

    window.dispatchEvent(
        new CustomEvent('progressoAtualizado', {
            detail: progresso
        })
    );
}

async function carregarIdentidade() {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
        window.location.replace(pagina('login.html'));
        return null;
    }

    return data.user;
}

async function sincronizarSequenciaDiaria() {
    let progressoLocal = {};

    try {
        progressoLocal = JSON.parse(
            lerArmazenamento('progresso') || '{}'
        );
    } catch {
        progressoLocal = {};
    }

    const sequenciaLocal = Number(progressoLocal.sequencia) || 0;
    const ultimaAtividadeLocal = lerArmazenamento(
        'ultimaVisitaGuardioes'
    );

    if (ultimaAtividadeLocal) {
        const { error } = await supabase.rpc(
            'migrar_sequencia_local',
            {
                p_sequencia: sequenciaLocal,
                p_ultima_atividade: ultimaAtividadeLocal
            }
        );

        if (error) {
            console.warn(
                'Não foi possível migrar a sequência antiga:',
                error
            );
        }
    }

    const { data, error } = await supabase.rpc(
        'registrar_atividade_diaria'
    );

    if (error) {
        console.warn(
            'Não foi possível atualizar a sequência no Supabase:',
            error
        );

        return null;
    }

    return Number(data) || 0;
}

async function carregarPerfilOficial() {
    const [
        { data: perfil, error: erroPerfil },
        { data: progresso, error: erroProgresso }
    ] = await Promise.all([
        supabase
            .from('perfis')
            .select('nome')
            .eq('id', usuarioAtual.id)
            .maybeSingle(),

        supabase
            .from('progresso')
            .select('xp,nivel,sequencia_dias,ultima_atividade')
            .eq('usuario_id', usuarioAtual.id)
            .maybeSingle()
    ]);

    if (erroPerfil || erroProgresso) {
        console.warn(
            'Não foi possível consultar perfil/progresso.',
            erroPerfil || erroProgresso
        );

        return;
    }

    const nome = perfil?.nome ||
        usuarioAtual.user_metadata?.nome ||
        'Guardião';

    const nomeCurto = nome.split(/\s+/)[0];

    const xp = Number(progresso?.xp ?? 0);
    const nivel = Number(progresso?.nivel ?? 1);

    const sequencia = Number(
        progresso?.sequencia_dias ??
        sequenciaSincronizada ??
        0
    );

    localStorage.setItem(
        'usuarioLogado',
        JSON.stringify({
            nome,
            email: usuarioAtual.email
        })
    );

    window.GuardioesBackend = Object.freeze({
        usuario: {
            id: usuarioAtual.id,
            email: usuarioAtual.email,
            nome
        },
        progressoOficial: {
            xp,
            nivel,
            sequencia_dias: sequencia
        },
        registrarLeitura: (artigoId) =>
            supabase.rpc('registrar_leitura', {
                p_artigo_id: artigoId
            }),
        iniciarQuiz: (quizId) =>
            supabase.rpc('iniciar_tentativa_quiz', {
                p_quiz_id: quizId
            }),
        responderQuiz: (tentativaId, perguntaId, alternativaId) =>
            supabase.rpc('registrar_resposta_quiz', {
                p_tentativa_id: tentativaId,
                p_pergunta_id: perguntaId,
                p_alternativa_id: alternativaId
            }),
        finalizarQuiz: (tentativaId) =>
            supabase.rpc('finalizar_tentativa_quiz', {
                p_tentativa_id: tentativaId
            }),
        atualizarPerfil: carregarPerfilOficial
    });

    sincronizarProgressoLocal(xp, sequencia);

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

    if (elemento('xpUsuario')) {
        elemento('xpUsuario').textContent = `${xp} XP`;
    }

    if (elemento('nivelUsuario')) {
        elemento('nivelUsuario').textContent = `Nível ${nivel}`;
    }
}

async function iniciarSincronizacaoConfiguracoes() {
    const naPaginaConfiguracoes =
        location.pathname.endsWith('/configuracoes.html');

    const { data, error } = await supabase
        .from('configuracoes_usuario')
        .select('animacoes_ativadas,folhas_animadas_ativadas,acessibilidade,extras')
        .eq('usuario_id', usuarioAtual.id)
        .maybeSingle();

    if (error) {
        console.warn(
            'Falha ao carregar preferências da nuvem:',
            error
        );

        return;
    }

    if (data) {
        let antigos = {};

        try {
            antigos = JSON.parse(
                localStorage.getItem('configuracoes') || '{}'
            );
        } catch {
            antigos = {};
        }

        const mesclado = {
            ...antigos,
            ...(data.extras || {}),
            animacoes: data.animacoes_ativadas,
            folhas: data.folhas_animadas_ativadas
        };

        localStorage.setItem(
            'configuracoes',
            JSON.stringify(mesclado)
        );

        window.dispatchEvent(
            new StorageEvent('storage', {
                key: 'configuracoes'
            })
        );

        if (
            naPaginaConfiguracoes &&
            typeof window.carregarConfiguracoes === 'function'
        ) {
            window.carregarConfiguracoes();
        }
    }

    if (!naPaginaConfiguracoes) {
        return;
    }

    const ids = [
        'musica',
        'natureza',
        'botoes',
        'animacoes',
        'folhas',
        'dicas',
        'vibracao',
        'volume'
    ];

    const enviar = async () => {
        const valores = Object.fromEntries(
            ids.map((id) => {
                const el = elemento(id);

                return [
                    id,
                    id === 'volume'
                        ? Number(el?.value || 0)
                        : Boolean(el?.checked)
                ];
            })
        );

        const { error: erroSalvar } = await supabase
            .from('configuracoes_usuario')
            .upsert({
                usuario_id: usuarioAtual.id,
                animacoes_ativadas: valores.animacoes,
                folhas_animadas_ativadas: valores.folhas,
                acessibilidade: {},
                extras: {
                    musica: valores.musica,
                    natureza: valores.natureza,
                    botoes: valores.botoes,
                    dicas: valores.dicas,
                    vibracao: valores.vibracao,
                    volume: valores.volume
                }
            }, {
                onConflict: 'usuario_id'
            });

        if (erroSalvar) {
            console.error(
                'Não foi possível sincronizar preferências:',
                erroSalvar
            );
        }
    };

    let tempo;

    const agendar = () => {
        clearTimeout(tempo);
        tempo = setTimeout(enviar, 450);
    };

    ids.forEach(id => {
        const el = elemento(id);

        if (!el) {
            return;
        }

        el.addEventListener('change', agendar);

        if (id === 'volume') {
            el.addEventListener('input', agendar);
        }
    });

    for (const id of ['btnSalvar', 'btnRestaurar']) {
        elemento(id)?.addEventListener('click', agendar);
    }
}

function instalarSair() {
    if (document.querySelector('.guardioes-sair')) {
        return;
    }

    const botao = document.createElement('button');

    botao.className = 'guardioes-sair';
    botao.type = 'button';
    botao.textContent = 'Sair da conta';

    botao.addEventListener('click', async () => {
        botao.disabled = true;

        const { error } = await supabase.auth.signOut();

        if (error) {
            alert(
                `Não foi possível encerrar a sessão: ${error.message}`
            );

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

        sequenciaSincronizada =
            await sincronizarSequenciaDiaria();

        await carregarPerfilOficial();
        await iniciarSincronizacaoConfiguracoes();

        supabase.auth.onAuthStateChange((evento) => {
            if (evento === 'SIGNED_OUT') {
                location.replace(pagina('login.html'));
            }
        });
    }
} catch (erro) {
    console.error('Erro ao conectar com Supabase:', erro);

    const alerta = document.createElement('div');

    alerta.className = 'guardioes-nota';
    alerta.textContent =
        'Não foi possível conectar ao Supabase. Atualize a página ou confira sua conexão.';

    document.body.prepend(alerta);
} finally {
    liberarTela();
}
