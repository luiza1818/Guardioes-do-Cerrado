let quizAtual = null;
let indicePergunta = 0;
let respostasCorretas = 0;
let alternativaSelecionada = null;

const gradeQuizzes = document.getElementById("gradeQuizzes");
const pesquisaQuiz = document.getElementById("pesquisaQuiz");
const filtroDificuldade = document.getElementById("filtroDificuldade");
const filtroStatus = document.getElementById("filtroStatus");
const nenhumQuiz = document.getElementById("nenhumQuiz");

const telaQuiz = document.getElementById("telaQuiz");
const telaResultado = document.getElementById("telaResultado");
const listaQuizzes = document.querySelector(".listaQuizzes");
const heroQuiz = document.querySelector(".heroQuiz");
const resumoAcademia = document.querySelector(".resumoAcademia");

const xpTotal = document.getElementById("xpTotal");
const quizzesConcluidos = document.getElementById("quizzesConcluidos");
const acertosTotais = document.getElementById("acertosTotais");
const quizzesDesbloqueados = document.getElementById("quizzesDesbloqueados");
const quantidadeQuizzes = document.getElementById("quantidadeQuizzes");

const temaQuiz = document.getElementById("temaQuiz");
const nivelQuiz = document.getElementById("nivelQuiz");
const perguntaQuiz = document.getElementById("perguntaQuiz");
const alternativasQuiz = document.getElementById("alternativasQuiz");

const contadorQuestao = document.getElementById("contadorQuestao");
const contadorAcertos = document.getElementById("contadorAcertos");
const barraProgresso = document.getElementById("barraProgresso");

const confirmarResposta = document.getElementById("confirmarResposta");
const proximaQuestao = document.getElementById("proximaQuestao");

const explicacaoQuiz = document.getElementById("explicacaoQuiz");
const tituloExplicacao = document.getElementById("tituloExplicacao");
const textoExplicacao = document.getElementById("textoExplicacao");

const voltarQuizzes = document.getElementById("voltarQuizzes");

const outroQuiz = document.getElementById("outroQuiz");
const refazerQuiz = document.getElementById("refazerQuiz");

const iconeResultado = document.getElementById("iconeResultado");
const tituloResultado = document.getElementById("tituloResultado");
const mensagemResultado = document.getElementById("mensagemResultado");
const notaResultado = document.getElementById("notaResultado");
const porcentagemResultado = document.getElementById("porcentagemResultado");
const xpResultado = document.getElementById("xpResultado");
const classificacaoResultado = document.getElementById("classificacaoResultado");

const descobertaResultado = document.getElementById("descobertaResultado");
const nomeDescoberta = document.getElementById("nomeDescoberta");
const textoDescoberta = document.getElementById("textoDescoberta");

const CHAVE_QUIZZES = "guardioesQuizProgresso";

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
    telaQuiz.hidden = true;
    telaResultado.hidden = true;
    listaQuizzes.hidden = false;

    configurarEventos();
    atualizarResumo();
    aplicarFiltros();
}

function configurarEventos() {
    if (pesquisaQuiz) {
        pesquisaQuiz.addEventListener(
            "input",
            aplicarFiltros
        );
    }

    if (filtroDificuldade) {
        filtroDificuldade.addEventListener(
            "change",
            aplicarFiltros
        );
    }

    if (filtroStatus) {
        filtroStatus.addEventListener(
            "change",
            aplicarFiltros
        );
    }

    if (confirmarResposta) {
        confirmarResposta.addEventListener(
            "click",
            corrigirResposta
        );
    }

    if (proximaQuestao) {
        proximaQuestao.addEventListener(
            "click",
            avancarPergunta
        );
    }

    if (voltarQuizzes) {
        voltarQuizzes.addEventListener(
            "click",
            voltarLista
        );
    }

    if (outroQuiz) {
        outroQuiz.addEventListener(
            "click",
            voltarLista
        );
    }

    if (refazerQuiz) {
        refazerQuiz.addEventListener(
            "click",
            refazerQuizAtual
        );
    }
}

function obterProgressoPrincipal() {
    try {
        if (typeof window.obterProgresso === "function") {
            const progresso = window.obterProgresso();

            if (progresso) {
                return progresso;
            }
        }
    } catch (erro) {
    }

    try {
        return JSON.parse(
            localStorage.getItem("progresso")
        ) || {};
    } catch (erro) {
        return {};
    }
}

function salvarProgressoPrincipal(progresso) {
    localStorage.setItem(
        "progresso",
        JSON.stringify(progresso)
    );
}

function obterProgressoQuizzes() {
    try {
        const salvo = JSON.parse(
            localStorage.getItem(CHAVE_QUIZZES)
        );

        if (salvo) {
            return {
                concluidos: Array.isArray(salvo.concluidos)
                    ? salvo.concluidos
                    : [],
                resultados:
                    salvo.resultados &&
                    typeof salvo.resultados === "object"
                        ? salvo.resultados
                        : {},
                acertosTotais:
                    Number(salvo.acertosTotais) || 0
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

function salvarProgressoQuizzes(progresso) {
    localStorage.setItem(
        CHAVE_QUIZZES,
        JSON.stringify(progresso)
    );
}

function obterArtigosConcluidos() {
    const progresso = obterProgressoPrincipal();

    if (!Array.isArray(progresso.artigos)) {
        return [];
    }

    return progresso.artigos;
}

function quizEstaDesbloqueado(quiz) {
    const artigos = obterArtigosConcluidos();

    return artigos.includes(quiz.artigoId);
}

function quizEstaConcluido(quizId) {
    const progresso = obterProgressoQuizzes();

    return progresso.concluidos.includes(quizId);
}

function obterStatusQuiz(quiz) {
    if (quizEstaConcluido(quiz.id)) {
        return "concluido";
    }

    if (quizEstaDesbloqueado(quiz)) {
        return "desbloqueado";
    }

    return "bloqueado";
}

function obterNomeDificuldade(dificuldade) {
    const dificuldades = {
        facil: "🌱 Fácil",
        medio: "🌿 Médio",
        dificil: "🔥 Difícil",
        hard: "👑 Hard"
    };

    return dificuldades[dificuldade] || dificuldade;
}

function obterClasseDificuldade(dificuldade) {
    if (
        dificuldade === "facil" ||
        dificuldade === "medio" ||
        dificuldade === "dificil" ||
        dificuldade === "hard"
    ) {
        return dificuldade;
    }

    return "medio";
}

function obterTextoStatus(status) {
    const textos = {
        bloqueado: "🔒 Bloqueado",
        desbloqueado: "🔓 Disponível",
        concluido: "✓ Concluído"
    };

    return textos[status];
}

function atualizarResumo() {
    const progressoPrincipal = obterProgressoPrincipal();
    const progressoQuiz = obterProgressoQuizzes();
    const lista = window.quizzes || [];

    const desbloqueados = lista.filter(
        quiz => quizEstaDesbloqueado(quiz)
    ).length;

    if (xpTotal) {
        xpTotal.textContent =
            `${Number(progressoPrincipal.xp) || 0} XP`;
    }

    if (quizzesConcluidos) {
        quizzesConcluidos.textContent =
            progressoQuiz.concluidos.length;
    }

    if (acertosTotais) {
        acertosTotais.textContent =
            progressoQuiz.acertosTotais;
    }

    if (quizzesDesbloqueados) {
        quizzesDesbloqueados.textContent =
            `${desbloqueados}/${lista.length}`;
    }

    if (quantidadeQuizzes) {
        quantidadeQuizzes.textContent =
            `${lista.length} desafios`;
    }
}

function normalizarTexto(texto) {
    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function aplicarFiltros() {
    const listaOriginal = window.quizzes || [];

    const termo = pesquisaQuiz
        ? normalizarTexto(pesquisaQuiz.value)
        : "";

    const dificuldade = filtroDificuldade
        ? filtroDificuldade.value
        : "todos";

    const statusSelecionado = filtroStatus
        ? filtroStatus.value
        : "todos";

    const lista = listaOriginal.filter(quiz => {
        const textoQuiz = normalizarTexto(`
            ${quiz.titulo}
            ${quiz.descricao}
            ${quiz.dificuldade}
        `);

        const correspondePesquisa =
            !termo ||
            textoQuiz.includes(termo);

        const correspondeDificuldade =
            dificuldade === "todos" ||
            quiz.dificuldade === dificuldade;

        const status = obterStatusQuiz(quiz);

        let correspondeStatus = true;

        if (statusSelecionado === "bloqueado") {
            correspondeStatus =
                status === "bloqueado";
        }

        if (statusSelecionado === "desbloqueado") {
            correspondeStatus =
                status === "desbloqueado";
        }

        if (statusSelecionado === "concluido") {
            correspondeStatus =
                status === "concluido";
        }

        return (
            correspondePesquisa &&
            correspondeDificuldade &&
            correspondeStatus
        );
    });

    renderizarQuizzes(lista);
}

function renderizarQuizzes(lista) {
    if (!gradeQuizzes) {
        return;
    }

    gradeQuizzes.innerHTML = "";

    if (!lista || lista.length === 0) {
        if (nenhumQuiz) {
            nenhumQuiz.hidden = false;
        }

        return;
    }

    if (nenhumQuiz) {
        nenhumQuiz.hidden = true;
    }

    lista.forEach(quiz => {
        gradeQuizzes.appendChild(
            criarCardQuiz(quiz)
        );
    });
}

function criarCardQuiz(quiz) {
    const status = obterStatusQuiz(quiz);
    const bloqueado = status === "bloqueado";
    const concluido = status === "concluido";

    const card = document.createElement("article");

    card.className =
        `cardQuiz ${bloqueado ? "bloqueado" : ""}`;

    const dificuldade =
        obterNomeDificuldade(
            quiz.dificuldade
        );

    const classeDificuldade =
        obterClasseDificuldade(
            quiz.dificuldade
        );

    let textoBotao = "Começar desafio";

    if (bloqueado) {
        textoBotao = "Quiz bloqueado";
    }

    if (concluido) {
        textoBotao = "Refazer desafio";
    }

    card.innerHTML = `
        <div class="topoCardQuiz">

            <div class="iconeQuiz">
                ${quiz.icone}
            </div>

            <span class="dificuldade nivel ${classeDificuldade}">
                ${dificuldade}
            </span>

            <span class="statusQuiz ${status}">
                ${obterTextoStatus(status)}
            </span>

        </div>

        <div class="conteudoQuiz">

            <h3>
                ${quiz.titulo}
            </h3>

            <p>
                ${quiz.descricao}
            </p>

            <div class="infoQuiz">

                <span>
                    📝 ${quiz.perguntas.length} perguntas
                </span>

                <span>
                    ⭐ ${quiz.xp} XP
                </span>

                <span>
                    📖 1 artigo
                </span>

            </div>

            ${
                bloqueado
                    ? `
                        <div class="avisoBloqueio">
                            🔒 Leia o artigo correspondente na Biblioteca para liberar este desafio.
                        </div>
                    `
                    : ""
            }

            <button
                type="button"
                class="botaoComecar"
                ${bloqueado ? "disabled" : ""}
            >
                ${textoBotao}
            </button>

        </div>
    `;

    const botao =
        card.querySelector(
            ".botaoComecar"
        );

    if (!bloqueado) {
        botao.addEventListener(
            "click",
            () => iniciarQuiz(quiz.id)
        );
    }

    return card;
}

function iniciarQuiz(id) {
    const quiz =
        typeof window.buscarQuizPorId === "function"
            ? window.buscarQuizPorId(id)
            : (window.quizzes || []).find(
                item => item.id === id
            );

    if (!quiz) {
        return;
    }

    if (!quizEstaDesbloqueado(quiz)) {
        return;
    }

    quizAtual = quiz;
    indicePergunta = 0;
    respostasCorretas = 0;
    alternativaSelecionada = null;

    listaQuizzes.hidden = true;
    telaResultado.hidden = true;
    telaQuiz.hidden = false;

    if (heroQuiz) {
        heroQuiz.hidden = true;
    }

    if (resumoAcademia) {
        resumoAcademia.hidden = true;
    }

    mostrarPergunta();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function mostrarPergunta() {
    alternativaSelecionada = null;

    confirmarResposta.disabled = true;
    confirmarResposta.hidden = false;

    proximaQuestao.hidden = true;

    explicacaoQuiz.hidden = true;
    explicacaoQuiz.className =
        "explicacaoQuiz";

    const pergunta =
        quizAtual.perguntas[
            indicePergunta
        ];

    const total =
        quizAtual.perguntas.length;

    temaQuiz.textContent =
        quizAtual.titulo;

    nivelQuiz.textContent =
        obterNomeDificuldade(
            quizAtual.dificuldade
        );

    nivelQuiz.className =
        `nivelQuestao nivel ${obterClasseDificuldade(
            quizAtual.dificuldade
        )}`;

    perguntaQuiz.textContent =
        pergunta.pergunta;

    contadorQuestao.textContent =
        `Questão ${indicePergunta + 1} de ${total}`;

    contadorAcertos.textContent =
        `${respostasCorretas} acertos`;

    barraProgresso.style.width =
        `${(indicePergunta / total) * 100}%`;

    alternativasQuiz.innerHTML = "";

    const letras = [
        "A",
        "B",
        "C",
        "D",
        "E"
    ];

    pergunta.alternativas.forEach(
        (texto, indice) => {

            const botao =
                document.createElement(
                    "button"
                );

            botao.type = "button";

            botao.className =
                "alternativaQuiz";

            botao.innerHTML = `
                <span class="letraAlternativa">
                    ${letras[indice]}
                </span>

                <span class="textoAlternativa">
                    ${texto}
                </span>
            `;

            botao.addEventListener(
                "click",
                () => selecionarAlternativa(
                    indice
                )
            );

            alternativasQuiz.appendChild(
                botao
            );
        }
    );
}

function selecionarAlternativa(indice) {
    alternativaSelecionada =
        indice;

    confirmarResposta.disabled =
        false;

    const botoes =
        alternativasQuiz.querySelectorAll(
            ".alternativaQuiz"
        );

    botoes.forEach(botao => {
        botao.classList.remove(
            "selecionada"
        );
    });

    botoes[indice].classList.add(
        "selecionada"
    );
}

function corrigirResposta() {
    if (
        alternativaSelecionada === null
    ) {
        return;
    }

    const pergunta =
        quizAtual.perguntas[
            indicePergunta
        ];

    const botoes =
        alternativasQuiz.querySelectorAll(
            ".alternativaQuiz"
        );

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    botoes[
        pergunta.correta
    ].classList.add(
        "correta"
    );

    const acertou =
        alternativaSelecionada ===
        pergunta.correta;

    if (acertou) {
        respostasCorretas++;

        tituloExplicacao.textContent =
            "✅ Resposta correta!";

        explicacaoQuiz.classList.add(
            "correta"
        );
    } else {
        botoes[
            alternativaSelecionada
        ].classList.add(
            "errada"
        );

        tituloExplicacao.textContent =
            "❌ Resposta incorreta";

        explicacaoQuiz.classList.add(
            "errada"
        );
    }

    textoExplicacao.textContent =
        pergunta.explicacao;

    explicacaoQuiz.hidden =
        false;

    confirmarResposta.hidden =
        true;

    proximaQuestao.hidden =
        false;

    contadorAcertos.textContent =
        `${respostasCorretas} acertos`;

    if (
        indicePergunta ===
        quizAtual.perguntas.length - 1
    ) {
        proximaQuestao.textContent =
            "Ver resultado";
    } else {
        proximaQuestao.textContent =
            "Próxima questão";
    }
}

function avancarPergunta() {
    indicePergunta++;

    if (
        indicePergunta >=
        quizAtual.perguntas.length
    ) {
        finalizarQuiz();
        return;
    }

    mostrarPergunta();
}

function finalizarQuiz() {
    const total =
        quizAtual.perguntas.length;

    const porcentagem =
        Math.round(
            (respostasCorretas / total) *
            100
        );

    const progressoQuiz =
        obterProgressoQuizzes();

    const primeiraConclusao =
        !progressoQuiz.concluidos.includes(
            quizAtual.id
        );

    let xpRecebido = 0;

    if (primeiraConclusao) {
        xpRecebido =
            Math.max(
                1,
                Math.round(
                    quizAtual.xp *
                    (porcentagem / 100)
                )
            );

        progressoQuiz.concluidos.push(
            quizAtual.id
        );

        progressoQuiz.acertosTotais +=
            respostasCorretas;

        adicionarXP(
            respostasCorretas,
            xpRecebido
        );

        desbloquearDescoberta(
            quizAtual.descoberta
        );
    }

    const resultadoAnterior =
        progressoQuiz.resultados[
            quizAtual.id
        ];

    if (
        !resultadoAnterior ||
        porcentagem >
        resultadoAnterior.porcentagem
    ) {
        progressoQuiz.resultados[
            quizAtual.id
        ] = {
            acertos:
                respostasCorretas,
            total:
                total,
            porcentagem:
                porcentagem
        };
    }

    salvarProgressoQuizzes(
        progressoQuiz
    );

    mostrarResultado(
        porcentagem,
        xpRecebido,
        primeiraConclusao
    );

    atualizarResumo();
}

function adicionarXP(
    acertos,
    xpRecebido
) {
    if (
        typeof window.registrarQuiz ===
        "function"
    ) {
        try {
            window.registrarQuiz(
                acertos,
                xpRecebido
            );

            return;
        } catch (erro) {
        }
    }

    const progresso =
        obterProgressoPrincipal();

    progresso.xp =
        (Number(progresso.xp) || 0) +
        xpRecebido;

    salvarProgressoPrincipal(
        progresso
    );
}

function desbloquearDescoberta(
    descoberta
) {
    if (!descoberta) {
        return;
    }

    let cartas = [];

    try {
        cartas =
            JSON.parse(
                localStorage.getItem(
                    "cartasDetalhadas"
                )
            ) || [];
    } catch (erro) {
        cartas = [];
    }

    const existe =
        cartas.some(
            item =>
                item.id ===
                descoberta.id
        );

    if (!existe) {
        cartas.push({
            id: descoberta.id,
            nome: descoberta.nome,
            raridade:
                descoberta.raridade ||
                "Comum",
            categoria:
                descoberta.tipo ||
                "Conhecimento",
            icone:
                descoberta.icone ||
                "🌿",
            imagem: ""
        });

        localStorage.setItem(
            "cartasDetalhadas",
            JSON.stringify(cartas)
        );
    }

    let descobertas = [];

    try {
        descobertas =
            JSON.parse(
                localStorage.getItem(
                    "descobertasCerradex"
                )
            ) || [];
    } catch (erro) {
        descobertas = [];
    }

    if (
        !descobertas.includes(
            descoberta.id
        )
    ) {
        descobertas.push(
            descoberta.id
        );

        localStorage.setItem(
            "descobertasCerradex",
            JSON.stringify(
                descobertas
            )
        );
    }
}

function mostrarResultado(
    porcentagem,
    xpRecebido,
    primeiraConclusao
) {
    telaQuiz.hidden = true;
    telaResultado.hidden = false;

    const classificacao =
        obterClassificacao(
            porcentagem
        );

    iconeResultado.textContent =
        classificacao.icone;

    tituloResultado.textContent =
        classificacao.titulo;

    mensagemResultado.textContent =
        `Você acertou ${respostasCorretas} de ${quizAtual.perguntas.length} perguntas.`;

    notaResultado.textContent =
        `${respostasCorretas}/${quizAtual.perguntas.length}`;

    porcentagemResultado.textContent =
        `${porcentagem}%`;

    if (primeiraConclusao) {
        xpResultado.textContent =
            `+${xpRecebido} XP`;
    } else {
        xpResultado.textContent =
            "XP já recebido";
    }

    classificacaoResultado.textContent =
        classificacao.titulo;

    if (
        quizAtual.descoberta &&
        descobertaResultado
    ) {
        descobertaResultado.hidden =
            false;

        nomeDescoberta.textContent =
            quizAtual.descoberta.nome;

        if (primeiraConclusao) {
            textoDescoberta.textContent =
                `Nova descoberta registrada na sua Cerradex: ${quizAtual.descoberta.nome}.`;
        } else {
            textoDescoberta.textContent =
                `Esta descoberta já faz parte da sua Cerradex.`;
        }

        const icone =
            descobertaResultado.querySelector(
                ".iconeDescoberta"
            );

        if (icone) {
            icone.textContent =
                quizAtual.descoberta.icone ||
                "🐾";
        }
    } else if (
        descobertaResultado
    ) {
        descobertaResultado.hidden =
            true;
    }

    barraProgresso.style.width =
        "100%";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function obterClassificacao(
    porcentagem
) {
    if (porcentagem === 100) {
        return {
            titulo:
                "Lenda do Cerrado",
            icone:
                "👑"
        };
    }

    if (porcentagem >= 80) {
        return {
            titulo:
                "Guardião de Ouro",
            icone:
                "🥇"
        };
    }

    if (porcentagem >= 60) {
        return {
            titulo:
                "Guardião de Prata",
            icone:
                "🥈"
        };
    }

    if (porcentagem >= 40) {
        return {
            titulo:
                "Guardião de Bronze",
            icone:
                "🥉"
        };
    }

    return {
        titulo:
            "Aprendiz do Cerrado",
        icone:
            "🌱"
    };
}

function voltarLista() {
    telaQuiz.hidden = true;
    telaResultado.hidden = true;
    listaQuizzes.hidden = false;

    if (heroQuiz) {
        heroQuiz.hidden = false;
    }

    if (resumoAcademia) {
        resumoAcademia.hidden = false;
    }

    quizAtual = null;

    atualizarResumo();
    aplicarFiltros();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function refazerQuizAtual() {
    if (!quizAtual) {
        voltarLista();
        return;
    }

    const id = quizAtual.id;

    iniciarQuiz(id);
}