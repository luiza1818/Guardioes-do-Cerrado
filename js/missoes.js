const CHAVE_MISSOES = "guardioesMissoes";
const CHAVE_QUIZZES = "guardioesQuizProgresso";
const CHAVE_CERRADEX = "descobertasCerradex";

let verificandoMissoes = false;
let filtroMissoesAtual = "todas";
let pesquisaMissoesAtual = "";

function obterDataLocal() {
    const agora = new Date();

    const ano = agora.getFullYear();

    const mes = String(
        agora.getMonth() + 1
    ).padStart(2, "0");

    const dia = String(
        agora.getDate()
    ).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

function obterSemanaAtual() {
    const data = new Date();

    const diaSemana = data.getDay();

    const distanciaSegunda =
        diaSemana === 0
            ? -6
            : 1 - diaSemana;

    data.setDate(
        data.getDate() +
        distanciaSegunda
    );

    const ano = data.getFullYear();

    const mes = String(
        data.getMonth() + 1
    ).padStart(2, "0");

    const dia = String(
        data.getDate()
    ).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

function obterProgressoPrincipal() {
    try {
        if (
            typeof window.obterProgresso ===
            "function"
        ) {
            const progresso =
                window.obterProgresso();

            if (progresso) {
                return progresso;
            }
        }
    } catch (erro) {
    }

    const chaves = [
        "progresso",
        "progressoGuardioes",
        "guardioesProgresso"
    ];

    for (const chave of chaves) {
        try {
            const salvo =
                localStorage.getItem(chave);

            if (salvo) {
                return JSON.parse(salvo);
            }
        } catch (erro) {
        }
    }

    return {
        xp: 0,
        artigos: [],
        sequencia: 0
    };
}

function obterProgressoQuizzes() {
    try {
        const salvo =
            JSON.parse(
                localStorage.getItem(
                    CHAVE_QUIZZES
                )
            );

        if (salvo) {
            return {
                concluidos:
                    Array.isArray(
                        salvo.concluidos
                    )
                        ? salvo.concluidos
                        : [],

                resultados:
                    salvo.resultados &&
                    typeof salvo.resultados === "object"
                        ? salvo.resultados
                        : {},

                acertosTotais:
                    Number(
                        salvo.acertosTotais
                    ) || 0
            };
        }
    } catch (erro) {
    }

    return {
        concluidos: [],
        resultados: {},
        acertosTotais: 0
    };
}

function obterCartasCerradex() {
    try {
        const salvo =
            JSON.parse(
                localStorage.getItem(
                    CHAVE_CERRADEX
                )
            );

        if (Array.isArray(salvo)) {
            return salvo;
        }
    } catch (erro) {
    }

    const progresso =
        obterProgressoPrincipal();

    if (
        Array.isArray(
            progresso.cartas
        )
    ) {
        return progresso.cartas;
    }

    return [];
}

function obterQuantidadeConquistas() {
    if (
        window.sistemaConquistas &&
        typeof window.sistemaConquistas.contar ===
            "function"
    ) {
        try {
            return Number(
                window.sistemaConquistas.contar()
            ) || 0;
        } catch (erro) {
        }
    }

    try {
        const conquistas =
            JSON.parse(
                localStorage.getItem(
                    "conquistasDesbloqueadas"
                )
            );

        return Array.isArray(conquistas)
            ? conquistas.length
            : 0;
    } catch (erro) {
        return 0;
    }
}

function obterTotalConquistas() {
    if (
        window.sistemaConquistas &&
        typeof window.sistemaConquistas.listar ===
            "function"
    ) {
        try {
            const lista =
                window.sistemaConquistas.listar();

            return Array.isArray(lista)
                ? lista.length
                : 0;
        } catch (erro) {
        }
    }

    return 0;
}

function obterTotalEspecies() {
    if (
        Array.isArray(window.especies) &&
        window.especies.length > 0
    ) {
        return window.especies.length;
    }

    return 50;
}

function obterNivelAtual() {
    const progresso =
        obterProgressoPrincipal();

    if (
        typeof window.obterNivelAtual ===
        "function"
    ) {
        try {
            const nivel =
                window.obterNivelAtual();

            if (
                typeof nivel ===
                "number"
            ) {
                return nivel;
            }

            if (
                nivel &&
                typeof nivel.nivel ===
                    "number"
            ) {
                return nivel.nivel;
            }
        } catch (erro) {
        }
    }

    if (
        typeof progresso.nivel ===
            "number" &&
        progresso.nivel > 0
    ) {
        return progresso.nivel;
    }

    const xp =
        Number(progresso.xp) || 0;

    return Math.floor(
        xp / 100
    ) + 1;
}

function obterProgressoDiario() {
    const progresso =
        obterProgressoPrincipal();

    if (
        Array.isArray(
            progresso.diario
        )
    ) {
        return progresso.diario.length;
    }

    if (
        Number.isFinite(
            Number(
                progresso.diario
            )
        )
    ) {
        return Number(
            progresso.diario
        );
    }

    const chaves = [
        "diarioProgresso",
        "guardioesDiario",
        "progressoDiario",
        "registrosDiario"
    ];

    for (const chave of chaves) {
        try {
            const salvo =
                JSON.parse(
                    localStorage.getItem(
                        chave
                    )
                );

            if (
                Array.isArray(salvo)
            ) {
                return salvo.length;
            }

            if (
                salvo &&
                Array.isArray(
                    salvo.concluidos
                )
            ) {
                return salvo.concluidos.length;
            }

            if (
                salvo &&
                Array.isArray(
                    salvo.registros
                )
            ) {
                return salvo.registros.length;
            }

            if (
                salvo &&
                typeof salvo.total ===
                    "number"
            ) {
                return salvo.total;
            }
        } catch (erro) {
        }
    }

    return 0;
}

function criarSnapshotProgresso() {
    const progresso =
        obterProgressoPrincipal();

    const quizzes =
        obterProgressoQuizzes();

    return {
        xp:
            Number(
                progresso.xp
            ) || 0,

        artigos:
            Array.isArray(
                progresso.artigos
            )
                ? progresso.artigos.length
                : 0,

        cartas:
            obterCartasCerradex().length,

        quizzesConcluidos:
            quizzes.concluidos.length,

        respostasCorretas:
            quizzes.acertosTotais,

        conquistas:
            obterQuantidadeConquistas(),

        nivel:
            obterNivelAtual(),

        sequencia:
            Number(
                progresso.sequencia
            ) || 0,

        diario:
            obterProgressoDiario()
    };
}

function criarDadosMissoes() {
    return {
        diarias: {
            periodo:
                obterDataLocal(),

            base:
                criarSnapshotProgresso(),

            concluidas: []
        },

        semanais: {
            periodo:
                obterSemanaAtual(),

            base:
                criarSnapshotProgresso(),

            concluidas: []
        },

        permanentes: {
            concluidas: []
        }
    };
}

function normalizarDadosMissoes(
    dados
) {
    const padrao =
        criarDadosMissoes();

    if (
        !dados ||
        typeof dados !==
            "object"
    ) {
        return padrao;
    }

    return {
        diarias: {
            periodo:
                dados.diarias?.periodo ||
                padrao.diarias.periodo,

            base: {
                ...padrao.diarias.base,
                ...(dados.diarias?.base || {})
            },

            concluidas:
                Array.isArray(
                    dados.diarias?.concluidas
                )
                    ? dados.diarias.concluidas
                    : []
        },

        semanais: {
            periodo:
                dados.semanais?.periodo ||
                padrao.semanais.periodo,

            base: {
                ...padrao.semanais.base,
                ...(dados.semanais?.base || {})
            },

            concluidas:
                Array.isArray(
                    dados.semanais?.concluidas
                )
                    ? dados.semanais.concluidas
                    : []
        },

        permanentes: {
            concluidas:
                Array.isArray(
                    dados.permanentes?.concluidas
                )
                    ? dados.permanentes.concluidas
                    : []
        }
    };
}

function obterDadosMissoes() {
    try {
        const salvo =
            JSON.parse(
                localStorage.getItem(
                    CHAVE_MISSOES
                )
            );

        return normalizarDadosMissoes(
            salvo
        );
    } catch (erro) {
        return criarDadosMissoes();
    }
}

function salvarDadosMissoes(
    dados
) {
    localStorage.setItem(
        CHAVE_MISSOES,
        JSON.stringify(dados)
    );
}

function atualizarPeriodos(
    dados
) {
    const hoje =
        obterDataLocal();

    const semana =
        obterSemanaAtual();

    let alterou = false;

    if (
        dados.diarias.periodo !==
        hoje
    ) {
        dados.diarias = {
            periodo: hoje,
            base:
                criarSnapshotProgresso(),
            concluidas: []
        };

        alterou = true;
    }

    if (
        dados.semanais.periodo !==
        semana
    ) {
        dados.semanais = {
            periodo: semana,
            base:
                criarSnapshotProgresso(),
            concluidas: []
        };

        alterou = true;
    }

    if (alterou) {
        salvarDadosMissoes(
            dados
        );
    }

    return dados;
}

function obterValorAtual(
    tipo
) {
    const snapshot =
        criarSnapshotProgresso();

    if (
        tipo === "cerradex"
    ) {
        return snapshot.cartas;
    }

    if (
        Object.prototype.hasOwnProperty.call(
            snapshot,
            tipo
        )
    ) {
        return Number(
            snapshot[tipo]
        ) || 0;
    }

    return 0;
}

function obterObjetivoMissao(
    missao
) {
    if (
        missao.tipo ===
        "cerradex"
    ) {
        return obterTotalEspecies();
    }

    if (
        missao.tipo ===
        "conquistas"
    ) {
        const total =
            obterTotalConquistas();

        if (total > 0) {
            return total;
        }
    }

    return Number(
        missao.objetivo
    ) || 0;
}

function obterProgressoMissao(
    missao,
    grupo,
    dados
) {
    const atual =
        obterValorAtual(
            missao.tipo
        );

    if (
        grupo ===
        "permanentes"
    ) {
        return atual;
    }

    const base =
        dados[grupo]?.base || {};

    const inicial =
        Number(
            base[missao.tipo]
        ) || 0;

    return Math.max(
        0,
        atual - inicial
    );
}

function missaoEstaConcluida(
    id,
    grupo,
    dados
) {
    return (
        Array.isArray(
            dados[grupo]?.concluidas
        ) &&
        dados[grupo].concluidas.includes(
            id
        )
    );
}

function registrarMissaoConcluida(
    missao,
    grupo,
    dados
) {
    if (
        missaoEstaConcluida(
            missao.id,
            grupo,
            dados
        )
    ) {
        return false;
    }

    dados[
        grupo
    ].concluidas.push(
        missao.id
    );

    salvarDadosMissoes(
        dados
    );

    const recompensa =
        Number(
            missao.recompensa
        ) || 0;

    if (
        recompensa > 0 &&
        typeof window.adicionarXP ===
            "function"
    ) {
        try {
            window.adicionarXP(
                recompensa
            );
        } catch (erro) {
        }
    }

    window.dispatchEvent(
        new CustomEvent(
            "missaoConcluida",
            {
                detail: {
                    ...missao,
                    grupo
                }
            }
        )
    );

    return true;
}

function verificarListaMissoes(
    lista,
    grupo,
    dados
) {
    if (
        !Array.isArray(lista)
    ) {
        return false;
    }

    let concluiuAlguma =
        false;

    lista.forEach(
        missao => {
            if (
                missaoEstaConcluida(
                    missao.id,
                    grupo,
                    dados
                )
            ) {
                return;
            }

            const objetivo =
                obterObjetivoMissao(
                    missao
                );

            const atual =
                obterProgressoMissao(
                    missao,
                    grupo,
                    dados
                );

            if (
                objetivo > 0 &&
                atual >= objetivo
            ) {
                if (
                    registrarMissaoConcluida(
                        missao,
                        grupo,
                        dados
                    )
                ) {
                    concluiuAlguma =
                        true;
                }
            }
        }
    );

    return concluiuAlguma;
}

function verificarMissoes() {
    if (
        verificandoMissoes ||
        !window.missoes
    ) {
        return;
    }

    verificandoMissoes =
        true;

    try {
        const dados =
            atualizarPeriodos(
                obterDadosMissoes()
            );

        verificarListaMissoes(
            window.missoes.diarias,
            "diarias",
            dados
        );

        verificarListaMissoes(
            window.missoes.semanais,
            "semanais",
            dados
        );

        verificarListaMissoes(
            window.missoes.permanentes,
            "permanentes",
            dados
        );

        salvarDadosMissoes(
            dados
        );
    } finally {
        verificandoMissoes =
            false;
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

    const dados =
        atualizarPeriodos(
            obterDadosMissoes()
        );

    function prepararLista(
        lista,
        grupo
    ) {
        if (
            !Array.isArray(lista)
        ) {
            return [];
        }

        return lista.map(
            missao => {
                const objetivo =
                    obterObjetivoMissao(
                        missao
                    );

                const atualReal =
                    obterProgressoMissao(
                        missao,
                        grupo,
                        dados
                    );

                const concluida =
                    missaoEstaConcluida(
                        missao.id,
                        grupo,
                        dados
                    );

                const porcentagem =
                    objetivo > 0
                        ? Math.min(
                              100,
                              Math.round(
                                  (
                                      atualReal /
                                      objetivo
                                  ) * 100
                              )
                          )
                        : 0;

                return {
                    ...missao,
                    grupo,
                    atual:
                        Math.min(
                            atualReal,
                            objetivo
                        ),
                    objetivo,
                    porcentagem,
                    concluida
                };
            }
        );
    }

    return {
        diarias:
            prepararLista(
                window.missoes.diarias,
                "diarias"
            ),

        semanais:
            prepararLista(
                window.missoes.semanais,
                "semanais"
            ),

        permanentes:
            prepararLista(
                window.missoes.permanentes,
                "permanentes"
            )
    };
}

function normalizarTexto(
    texto
) {
    return String(
        texto || ""
    )
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .toLowerCase()
        .trim();
}

function obterNomeCategoria(
    categoria
) {
    const nomes = {
        leitura: "Leitura",
        quiz: "Quiz",
        cerradex: "Cerradex",
        diario: "Diário",
        especial: "Especial"
    };

    return (
        nomes[categoria] ||
        "Missão"
    );
}

function obterIconeCategoria(
    categoria
) {
    const icones = {
        leitura: "📚",
        quiz: "🧠",
        cerradex: "🃏",
        diario: "📖",
        especial: "👑"
    };

    return (
        icones[categoria] ||
        "🎯"
    );
}

function obterNomeDificuldade(
    dificuldade
) {
    const nomes = {
        facil: "🌱 Fácil",
        medio: "🌿 Médio",
        dificil: "🔥 Difícil",
        hard: "👑 Hard"
    };

    return (
        nomes[dificuldade] ||
        "🌿 Missão"
    );
}

function criarCardMissao(
    missao
) {
    const card =
        document.createElement(
            "article"
        );

    const especial =
        missao.categoria ===
            "especial" ||
        missao.dificuldade ===
            "hard";

    card.className =
        `cardMissao ${
            missao.concluida
                ? "concluida"
                : ""
        } ${
            especial
                ? "especial"
                : ""
        }`;

    card.innerHTML = `
        <div class="topo-card-missao">

            <div class="informacoes-card-missao">

                <div class="etiquetas-card-missao">

                    <span>
                        ${obterIconeCategoria(
                            missao.categoria
                        )}
                        ${obterNomeCategoria(
                            missao.categoria
                        )}
                    </span>

                    <span>
                        ${obterNomeDificuldade(
                            missao.dificuldade
                        )}
                    </span>

                </div>

                <h3>
                    ${missao.titulo}
                </h3>

                <p>
                    ${missao.descricao}
                </p>

            </div>

            <span class="xp-missao">
                +${Number(
                    missao.recompensa
                ) || 0} XP
            </span>

        </div>

        <div class="barra-missao-card">

            <div
                class="progresso-missao-card"
                style="width: ${missao.porcentagem}%"
            ></div>

        </div>

        <div class="rodape-card-missao">

            <span class="numero-progresso-missao">
                ${missao.atual}/${missao.objetivo}
            </span>

            ${
                missao.concluida
                    ? `
                        <span class="status-missao concluida">
                            ✓ Concluída
                        </span>
                    `
                    : `
                        <span class="status-missao andamento">
                            Em andamento
                        </span>
                    `
            }

        </div>
    `;

    return card;
}

function missaoPassaFiltro(
    missao
) {
    const pesquisa =
        normalizarTexto(
            pesquisaMissoesAtual
        );

    const texto =
        normalizarTexto(`
            ${missao.titulo}
            ${missao.descricao}
            ${missao.categoria}
            ${missao.dificuldade}
        `);

    if (
        pesquisa &&
        !texto.includes(
            pesquisa
        )
    ) {
        return false;
    }

    if (
        filtroMissoesAtual ===
        "todas"
    ) {
        return true;
    }

    if (
        filtroMissoesAtual ===
        "andamento"
    ) {
        return !missao.concluida;
    }

    if (
        filtroMissoesAtual ===
        "concluidas"
    ) {
        return missao.concluida;
    }

    return (
        missao.categoria ===
        filtroMissoesAtual
    );
}

function renderizarGrupo(
    id,
    lista
) {
    const elemento =
        document.getElementById(
            id
        );

    if (!elemento) {
        return 0;
    }

    elemento.innerHTML = "";

    const filtradas =
        lista.filter(
            missaoPassaFiltro
        );

    filtradas.forEach(
        missao => {
            elemento.appendChild(
                criarCardMissao(
                    missao
                )
            );
        }
    );

    if (
        filtradas.length === 0
    ) {
        elemento.innerHTML = `
            <div class="grupo-vazio">
                <span>🌾</span>
                <p>Nenhuma missão desta categoria.</p>
            </div>
        `;
    }

    return filtradas.length;
}

function atualizarResumoMissoes(
    listas
) {
    const todas = [
        ...listas.diarias,
        ...listas.semanais,
        ...listas.permanentes
    ];

    const concluidas =
        todas.filter(
            missao =>
                missao.concluida
        );

    const andamento =
        todas.filter(
            missao =>
                !missao.concluida &&
                missao.atual > 0
        );

    const especiais =
        concluidas.filter(
            missao =>
                missao.categoria ===
                    "especial" ||
                missao.dificuldade ===
                    "hard"
        );

    const porcentagem =
        todas.length > 0
            ? Math.round(
                  (
                      concluidas.length /
                      todas.length
                  ) * 100
              )
            : 0;

    const xpRecebido =
        concluidas.reduce(
            (total, missao) =>
                total +
                (
                    Number(
                        missao.recompensa
                    ) || 0
                ),
            0
        );

    const textoProgresso =
        document.getElementById(
            "textoProgressoMissoes"
        );

    const porcentagemElemento =
        document.getElementById(
            "porcentagemMissoes"
        );

    const barra =
        document.getElementById(
            "barraProgressoMissoes"
        );

    const totalConcluidas =
        document.getElementById(
            "totalMissoesConcluidas"
        );

    const totalAndamento =
        document.getElementById(
            "totalMissoesAndamento"
        );

    const xp =
        document.getElementById(
            "xpMissoes"
        );

    const totalEspeciais =
        document.getElementById(
            "totalEspeciais"
        );

    const contador =
        document.getElementById(
            "contadorMissoes"
        );

    if (textoProgresso) {
        textoProgresso.textContent =
            `${concluidas.length} de ${todas.length} missões`;
    }

    if (
        porcentagemElemento
    ) {
        porcentagemElemento.textContent =
            `${porcentagem}%`;
    }

    if (barra) {
        barra.style.width =
            `${porcentagem}%`;
    }

    if (
        totalConcluidas
    ) {
        totalConcluidas.textContent =
            concluidas.length;
    }

    if (
        totalAndamento
    ) {
        totalAndamento.textContent =
            andamento.length;
    }

    if (xp) {
        xp.textContent =
            `${xpRecebido} XP`;
    }

    if (
        totalEspeciais
    ) {
        totalEspeciais.textContent =
            especiais.length;
    }

    if (contador) {
        contador.textContent =
            `${todas.length} missões`;
    }
}

function renderizarPaginaMissoes() {
    if (
        !window.missoes
    ) {
        return;
    }

    const listas =
        listarMissoesComProgresso();

    renderizarGrupo(
        "missoesDiarias",
        listas.diarias
    );

    renderizarGrupo(
        "missoesSemanais",
        listas.semanais
    );

    renderizarGrupo(
        "missoesPermanentes",
        listas.permanentes
    );

    atualizarResumoMissoes(
        listas
    );
}

function configurarFiltrosMissoes() {
    const pesquisa =
        document.getElementById(
            "pesquisaMissoes"
        );

    const filtros =
        document.querySelectorAll(
            ".filtro-missao"
        );

    if (pesquisa) {
        pesquisa.addEventListener(
            "input",
            function () {
                pesquisaMissoesAtual =
                    pesquisa.value;

                renderizarPaginaMissoes();
            }
        );
    }

    filtros.forEach(
        botao => {
            botao.addEventListener(
                "click",
                function () {
                    filtros.forEach(
                        item =>
                            item.classList.remove(
                                "ativo"
                            )
                    );

                    botao.classList.add(
                        "ativo"
                    );

                    filtroMissoesAtual =
                        botao.dataset.filtro ||
                        "todas";

                    renderizarPaginaMissoes();
                }
            );
        }
    );
}

function zerarMissoes() {
    localStorage.removeItem(
        CHAVE_MISSOES
    );

    const dados =
        criarDadosMissoes();

    salvarDadosMissoes(
        dados
    );

    renderizarPaginaMissoes();

    return dados;
}

window.sistemaMissoes = {
    listar:
        listarMissoesComProgresso,

    verificar:
        verificarMissoes,

    obterDados:
        obterDadosMissoes,

    zerar:
        zerarMissoes
};

window.verificarMissoes =
    verificarMissoes;

window.addEventListener(
    "progressoAtualizado",
    function () {
        verificarMissoes();
        renderizarPaginaMissoes();
    }
);

window.addEventListener(
    "conquistaDesbloqueada",
    function () {
        verificarMissoes();
        renderizarPaginaMissoes();
    }
);

window.addEventListener(
    "storage",
    function () {
        verificarMissoes();
        renderizarPaginaMissoes();
    }
);

document.addEventListener(
    "DOMContentLoaded",
    function () {
        configurarFiltrosMissoes();
        verificarMissoes();
        renderizarPaginaMissoes();
    }
);