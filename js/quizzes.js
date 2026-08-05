let quizAtual = null;
let indicePergunta = 0;
let respostasCorretas = 0;
let alternativaSelecionada = null;

const gradeQuizzes = document.getElementById("gradeQuizzes");
const pesquisaQuiz = document.getElementById("pesquisaQuiz");
const filtroDificuldade = document.getElementById("filtroDificuldade");
const nenhumQuiz = document.getElementById("nenhumQuiz");

const telaQuiz = document.getElementById("telaQuiz");
const telaResultado = document.getElementById("telaResultado");
const listaQuizzes = document.querySelector(".listaQuizzes");

const xpTotal = document.getElementById("xpTotal");
const quizzesConcluidos = document.getElementById("quizzesConcluidos");
const acertosTotais = document.getElementById("acertosTotais");

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

document.addEventListener("DOMContentLoaded", iniciarPagina);

function iniciarPagina() {
    telaQuiz.hidden = true;
    telaResultado.hidden = true;
    listaQuizzes.hidden = false;

    atualizarResumo();
    renderizarQuizzes(window.quizzes || []);

    pesquisaQuiz.addEventListener("input", aplicarFiltros);
    filtroDificuldade.addEventListener("change", aplicarFiltros);

    confirmarResposta.addEventListener("click", corrigirResposta);
    proximaQuestao.addEventListener("click", avancarPergunta);
    voltarQuizzes.addEventListener("click", voltarLista);
    outroQuiz.addEventListener("click", voltarLista);
    refazerQuiz.addEventListener("click", refazerQuizAtual);
}

function obterDadosProgresso() {
    if (typeof window.obterProgresso === "function") {
        return window.obterProgresso();
    }

    return {
        xp: 0,
        quizzesConcluidos: 0,
        respostasCorretas: 0
    };
}

function atualizarResumo() {
    const progresso = obterDadosProgresso();

    xpTotal.textContent = progresso.xp || 0;
    quizzesConcluidos.textContent = progresso.quizzesConcluidos || 0;
    acertosTotais.textContent = progresso.respostasCorretas || 0;
}

function aplicarFiltros() {
    const texto = pesquisaQuiz.value.toLowerCase().trim();
    const dificuldade = filtroDificuldade.value;

    let lista = [...(window.quizzes || [])];

    if (texto) {
        lista = lista.filter(quiz =>
            quiz.titulo.toLowerCase().includes(texto) ||
            quiz.descricao.toLowerCase().includes(texto)
        );
    }

    if (dificuldade !== "todos") {
        lista = lista.filter(quiz =>
            quiz.dificuldade === dificuldade
        );
    }

    renderizarQuizzes(lista);
}

function renderizarQuizzes(lista) {
    gradeQuizzes.innerHTML = "";

    if (!lista || lista.length === 0) {
        nenhumQuiz.hidden = false;
        return;
    }

    nenhumQuiz.hidden = true;

    lista.forEach(quiz => {
        criarCardQuiz(quiz);
    });
}

function criarCardQuiz(quiz) {
    const card = document.createElement("article");

    card.className = "cardQuiz";

    const dificuldade =
        quiz.dificuldade === "intermediario"
            ? "Intermediário"
            : "Avançado";

    card.innerHTML = `
        <div class="topoCardQuiz">
            <div class="iconeQuiz">${quiz.icone}</div>
            <span class="dificuldade">${dificuldade}</span>
        </div>

        <div class="conteudoQuiz">
            <h3>${quiz.titulo}</h3>
            <p>${quiz.descricao}</p>

            <div class="infoQuiz">
                <span>${quiz.perguntas.length} perguntas</span>
                <span>Até ${quiz.xp} XP</span>
            </div>

            <button
                type="button"
                class="botaoComecar"
                data-id="${quiz.id}"
            >
                Começar
            </button>
        </div>
    `;

    card
        .querySelector(".botaoComecar")
        .addEventListener("click", () => {
            iniciarQuiz(quiz.id);
        });

    gradeQuizzes.appendChild(card);
}

function iniciarQuiz(id) {
    if (typeof window.buscarQuizPorId !== "function") {
        return;
    }

    quizAtual = window.buscarQuizPorId(id);

    if (!quizAtual) {
        return;
    }

    indicePergunta = 0;
    respostasCorretas = 0;
    alternativaSelecionada = null;

    listaQuizzes.hidden = true;
    telaResultado.hidden = true;
    telaQuiz.hidden = false;

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
    explicacaoQuiz.className = "explicacaoQuiz";

    const pergunta = quizAtual.perguntas[indicePergunta];
    const totalPerguntas = quizAtual.perguntas.length;

    temaQuiz.textContent = quizAtual.titulo;

    nivelQuiz.textContent =
        quizAtual.dificuldade === "intermediario"
            ? "Intermediário"
            : "Avançado";

    perguntaQuiz.textContent = pergunta.pergunta;

    contadorQuestao.textContent =
        `Questão ${indicePergunta + 1} de ${totalPerguntas}`;

    contadorAcertos.textContent =
        `${respostasCorretas} acertos`;

    barraProgresso.style.width =
        `${(indicePergunta / totalPerguntas) * 100}%`;

    alternativasQuiz.innerHTML = "";

    const letras = ["A", "B", "C", "D", "E"];

    pergunta.alternativas.forEach((texto, indice) => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.className = "alternativaQuiz";

        botao.innerHTML = `
            <span class="letraAlternativa">
                ${letras[indice]}
            </span>

            <span class="textoAlternativa">
                ${texto}
            </span>
        `;

        botao.addEventListener("click", () => {
            selecionarAlternativa(indice);
        });

        alternativasQuiz.appendChild(botao);
    });
}

function selecionarAlternativa(indice) {
    alternativaSelecionada = indice;
    confirmarResposta.disabled = false;

    const botoes =
        alternativasQuiz.querySelectorAll(".alternativaQuiz");

    botoes.forEach(botao => {
        botao.classList.remove("selecionada");
    });

    botoes[indice].classList.add("selecionada");
}

function corrigirResposta() {
    if (alternativaSelecionada === null) {
        return;
    }

    const pergunta = quizAtual.perguntas[indicePergunta];

    const botoes =
        alternativasQuiz.querySelectorAll(".alternativaQuiz");

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    botoes[pergunta.correta].classList.add("correta");

    const acertou =
        alternativaSelecionada === pergunta.correta;

    if (acertou) {
        respostasCorretas++;

        tituloExplicacao.textContent =
            "✅ Resposta correta!";

        explicacaoQuiz.classList.add("correta");
    } else {
        botoes[alternativaSelecionada]
            .classList.add("errada");

        tituloExplicacao.textContent =
            "❌ Resposta incorreta";

        explicacaoQuiz.classList.add("errada");
    }

    textoExplicacao.textContent =
        pergunta.explicacao;

    explicacaoQuiz.hidden = false;
    confirmarResposta.hidden = true;
    proximaQuestao.hidden = false;

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
    telaQuiz.hidden = true;
    telaResultado.hidden = false;

    const totalPerguntas =
        quizAtual.perguntas.length;

    const porcentagem = Math.round(
        (respostasCorretas / totalPerguntas) * 100
    );

    const xpRecebido = Math.round(
        (quizAtual.xp * porcentagem) / 100
    );

    const resultado =
        obterClassificacao(porcentagem);

    document
        .getElementById("iconeResultado")
        .textContent = resultado.icone;

    document
        .getElementById("tituloResultado")
        .textContent = resultado.titulo;

    document
        .getElementById("mensagemResultado")
        .textContent =
        `Você acertou ${respostasCorretas} de ${totalPerguntas} perguntas.`;

    document
        .getElementById("notaResultado")
        .textContent =
        `${respostasCorretas}/${totalPerguntas}`;

    document
        .getElementById("porcentagemResultado")
        .textContent =
        `${porcentagem}%`;

    document
        .getElementById("xpResultado")
        .textContent =
        `+${xpRecebido} XP`;

    document
        .getElementById("classificacaoResultado")
        .textContent = resultado.titulo;

    if (typeof window.registrarQuiz === "function") {
        window.registrarQuiz(
            respostasCorretas,
            xpRecebido
        );
    }

    barraProgresso.style.width = "100%";

    atualizarResumo();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function obterClassificacao(porcentagem) {
    if (porcentagem === 100) {
        return {
            titulo: "Lenda do Cerrado",
            icone: "👑"
        };
    }

    if (porcentagem >= 80) {
        return {
            titulo: "Guardião de Ouro",
            icone: "🥇"
        };
    }

    if (porcentagem >= 60) {
        return {
            titulo: "Guardião de Prata",
            icone: "🥈"
        };
    }

    if (porcentagem >= 40) {
        return {
            titulo: "Guardião de Bronze",
            icone: "🥉"
        };
    }

    return {
        titulo: "Aprendiz do Cerrado",
        icone: "🌱"
    };
}

function voltarLista() {
    telaQuiz.hidden = true;
    telaResultado.hidden = true;
    listaQuizzes.hidden = false;

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

    iniciarQuiz(quizAtual.id);
}