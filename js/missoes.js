const CHAVE_MISSOES = "guardioesMissoes";

let verificandoMissoes = false;

function obterDataLocal() {
    const agora = new Date();
    const ano = agora.getFullYear();
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const dia = String(agora.getDate()).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

function obterSemanaAtual() {
    const data = new Date();
    const diaSemana = data.getDay();
    const distanciaSegunda = diaSemana === 0 ? -6 : 1 - diaSemana;

    data.setDate(data.getDate() + distanciaSegunda);

    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

function obterQuantidadeConquistas() {
    if (
        !window.sistemaConquistas ||
        typeof window.sistemaConquistas.contar !== "function"
    ) {
        return 0;
    }

    return window.sistemaConquistas.contar();
}

function criarBaseProgresso() {
    const progresso = obterProgresso();

    return {
        xp: progresso.xp,
        artigos: progresso.artigos.length,
        cartas: progresso.cartas.length,
        quizzesConcluidos: progresso.quizzesConcluidos,
        respostasCorretas: progresso.respostasCorretas,
        conquistas: obterQuantidadeConquistas()
    };
}

function criarDadosMissoes() {
    return {
        diarias: {
            periodo: obterDataLocal(),
            base: criarBaseProgresso(),
            concluidas: []
        },

        semanais: {
            periodo: obterSemanaAtual(),
            base: criarBaseProgresso(),
            concluidas: []
        },

        permanentes: {
            concluidas: []
        }
    };
}

function normalizarDadosMissoes(dados) {
    const dadosPadrao = criarDadosMissoes();

    if (!dados || typeof dados !== "object") {
        return dadosPadrao;
    }

    return {
        diarias: {
            periodo:
                dados.diarias?.periodo ||
                dadosPadrao.diarias.periodo,

            base: {
                ...dadosPadrao.diarias.base,
                ...(dados.diarias?.base || {})
            },

            concluidas: Array.isArray(
                dados.diarias?.concluidas
            )
                ? dados.diarias.concluidas
                : []
        },

        semanais: {
            periodo:
                dados.semanais?.periodo ||
                dadosPadrao.semanais.periodo,

            base: {
                ...dadosPadrao.semanais.base,
                ...(dados.semanais?.base || {})
            },

            concluidas: Array.isArray(
                dados.semanais?.concluidas
            )
                ? dados.semanais.concluidas
                : []
        },

        permanentes: {
            concluidas: Array.isArray(
                dados.permanentes?.concluidas
            )
                ? dados.permanentes.concluidas
                : []
        }
    };
}

function obterDadosMissoes() {
    try {
        const dadosSalvos = JSON.parse(
            localStorage.getItem(CHAVE_MISSOES)
        );

        return normalizarDadosMissoes(dadosSalvos);
    } catch {
        return criarDadosMissoes();
    }
}

function salvarDadosMissoes(dados) {
    localStorage.setItem(
        CHAVE_MISSOES,
        JSON.stringify(dados)
    );
}

function atualizarPeriodos(dados) {
    const diaAtual = obterDataLocal();
    const semanaAtual = obterSemanaAtual();

    let alterou = false;

    if (dados.diarias.periodo !== diaAtual) {
        dados.diarias = {
            periodo: diaAtual,
            base: criarBaseProgresso(),
            concluidas: []
        };

        alterou = true;
    }

    if (dados.semanais.periodo !== semanaAtual) {
        dados.semanais = {
            periodo: semanaAtual,
            base: criarBaseProgresso(),
            concluidas: []
        };

        alterou = true;
    }

    if (alterou) {
        salvarDadosMissoes(dados);
    }

    return dados;
}

function obterNivel(xp) {
    return Math.floor(xp / 100) + 1;
}

function obterTotalEspecies() {
    return Array.isArray(window.especies)
        ? window.especies.length
        : 0;
}

function obterTotalConquistas() {
    if (
        !window.sistemaConquistas ||
        typeof window.sistemaConquistas.listar !== "function"
    ) {
        return 0;
    }

    return window.sistemaConquistas.listar().length;
}

function obterValorAtual(tipo) {
    const progresso = obterProgresso();

    switch (tipo) {
        case "xp":
            return progresso.xp;

        case "artigos":
            return progresso.artigos.length;

        case "cartas":
            return progresso.cartas.length;

        case "quizzesConcluidos":
            return progresso.quizzesConcluidos;

        case "respostasCorretas":
            return progresso.respostasCorretas;

        case "nivel":
            return obterNivel(progresso.xp);

        case "cerradex":
            return progresso.cartas.length;

        case "conquistas":
            return obterQuantidadeConquistas();

        default:
            return 0;
    }
}

function obterObjetivoMissao(missao) {
    if (missao.tipo === "cerradex") {
        return obterTotalEspecies();
    }

    if (missao.tipo === "conquistas") {
        return obterTotalConquistas();
    }

    return Number(missao.objetivo) || 0;
}

function obterProgressoMissao(missao, categoria, dados) {
    const valorAtual = obterValorAtual(missao.tipo);

    if (categoria === "permanentes") {
        return valorAtual;
    }

    const base = dados[categoria].base;
    const valorInicial = Number(base[missao.tipo]) || 0;

    return Math.max(0, valorAtual - valorInicial);
}

function missaoEstaConcluida(id, categoria, dados) {
    return dados[categoria].concluidas.includes(id);
}

function registrarMissaoConcluida(
    missao,
    categoria,
    dados
) {
    if (missaoEstaConcluida(missao.id, categoria, dados)) {
        return false;
    }

    dados[categoria].concluidas.push(missao.id);
    salvarDadosMissoes(dados);

    const recompensa = Number(missao.recompensa) || 0;

    if (recompensa > 0) {
        adicionarXP(recompensa);
    }

    window.dispatchEvent(
        new CustomEvent("missaoConcluida", {
            detail: {
                ...missao,
                categoria
            }
        })
    );

    return true;
}

function verificarListaMissoes(
    lista,
    categoria,
    dados
) {
    if (!Array.isArray(lista)) {
        return false;
    }

    let algumaConcluida = false;

    lista.forEach(missao => {
        if (
            missaoEstaConcluida(
                missao.id,
                categoria,
                dados
            )
        ) {
            return;
        }

        const objetivo = obterObjetivoMissao(missao);

        if (objetivo <= 0) {
            return;
        }

        const atual = obterProgressoMissao(
            missao,
            categoria,
            dados
        );

        if (atual >= objetivo) {
            const concluiu = registrarMissaoConcluida(
                missao,
                categoria,
                dados
            );

            if (concluiu) {
                algumaConcluida = true;
            }
        }
    });

    return algumaConcluida;
}

function verificarMissoes() {
    if (
        verificandoMissoes ||
        !window.missoes ||
        typeof obterProgresso !== "function"
    ) {
        return;
    }

    verificandoMissoes = true;

    try {
        const dados = atualizarPeriodos(
            obterDadosMissoes()
        );

        let houveConclusao = true;
        let tentativas = 0;

        while (houveConclusao && tentativas < 10) {
            houveConclusao = false;
            tentativas += 1;

            if (
                verificarListaMissoes(
                    window.missoes.diarias,
                    "diarias",
                    dados
                )
            ) {
                houveConclusao = true;
            }

            if (
                verificarListaMissoes(
                    window.missoes.semanais,
                    "semanais",
                    dados
                )
            ) {
                houveConclusao = true;
            }

            if (
                verificarListaMissoes(
                    window.missoes.permanentes,
                    "permanentes",
                    dados
                )
            ) {
                houveConclusao = true;
            }
        }

        salvarDadosMissoes(dados);

        window.dispatchEvent(
            new CustomEvent("missoesAtualizadas")
        );
    } finally {
        verificandoMissoes = false;
    }
}

function listarMissoesComProgresso() {
    if (!window.missoes) {
        return {
            diarias: [],
            semanais: [],
            permanentes: []
        };
    }

    const dados = atualizarPeriodos(
        obterDadosMissoes()
    );

    function prepararLista(lista, categoria) {
        if (!Array.isArray(lista)) {
            return [];
        }

        return lista.map(missao => {
            const objetivo = obterObjetivoMissao(missao);
            const atual = obterProgressoMissao(
                missao,
                categoria,
                dados
            );

            const concluida = missaoEstaConcluida(
                missao.id,
                categoria,
                dados
            );

            const porcentagem =
                objetivo > 0
                    ? Math.min(
                          100,
                          Math.round(
                              (atual / objetivo) * 100
                          )
                      )
                    : 0;

            return {
                ...missao,
                categoria,
                atual,
                objetivo,
                porcentagem,
                concluida
            };
        });
    }

    return {
        diarias: prepararLista(
            window.missoes.diarias,
            "diarias"
        ),

        semanais: prepararLista(
            window.missoes.semanais,
            "semanais"
        ),

        permanentes: prepararLista(
            window.missoes.permanentes,
            "permanentes"
        )
    };
}

function zerarMissoes() {
    localStorage.removeItem(CHAVE_MISSOES);

    const dados = criarDadosMissoes();

    salvarDadosMissoes(dados);

    window.dispatchEvent(
        new CustomEvent("missoesAtualizadas")
    );

    return dados;
}

window.addEventListener(
    "progressoAtualizado",
    verificarMissoes
);

window.addEventListener(
    "conquistaDesbloqueada",
    verificarMissoes
);

window.sistemaMissoes = {
    listar: listarMissoesComProgresso,
    verificar: verificarMissoes,
    obterDados: obterDadosMissoes,
    zerar: zerarMissoes
};

window.verificarMissoes = verificarMissoes;

document.addEventListener("DOMContentLoaded", () => {
    verificarMissoes();
});