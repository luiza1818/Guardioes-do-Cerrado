const paginas = [
    {
        titulo: "📍 Chapada dos Veadeiros",
        imagem: "97c53ad3d0de70047f1368f51f95622e.jpg",
        fala: "Bem-vindo à Chapada dos Veadeiros! Aqui nascem rios importantes e vivem muitas espécies do Cerrado.",
        ondeFica: "Localizada no estado de Goiás, a Chapada dos Veadeiros é um dos parques nacionais mais famosos do Brasil.",
        encontramos: "Cachoeiras, campos rupestres, sempre-vivas, lobos-guará, veados-campeiros e muitas aves.",
        curiosidade: "As rochas da Chapada possuem mais de um bilhão de anos de idade.",
        pergunta: "Qual estado abriga a Chapada dos Veadeiros?",
        opcoes: [
            "Bahia",
            "Goiás",
            "Minas Gerais"
        ],
        correta: 1,
        xp: 40,
        local: "Chapada dos Veadeiros",
        dificuldade: "Fácil",
        especies: [
            "🦊 Lobo-guará",
            "🌼 Sempre-viva",
            "🦌 Veado-campeiro",
            "🦅 Aves do Cerrado"
        ],
        tema: "chapada"
    },
    {
        titulo: "🌳 Mata de Galeria",
        imagem: "assets/imagens/diario/mata-galeria.jpg",
        fala: "As árvores acompanham os rios e criam corredores naturais para muitos animais.",
        ondeFica: "Ao longo de rios e córregos do Cerrado.",
        encontramos: "Árvores altas, macacos, tucanos, antas e muita sombra.",
        curiosidade: "Ela protege as margens dos rios contra a erosão.",
        pergunta: "O que a Mata de Galeria protege?",
        opcoes: [
            "Montanhas",
            "Margens dos rios",
            "Desertos"
        ],
        correta: 1,
        xp: 40,
        local: "Mata de Galeria",
        dificuldade: "Fácil",
        especies: [
            "🐒 Macacos",
            "🦜 Tucanos",
            "🌳 Árvores altas",
            "🐜 Insetos"
        ],
        tema: "mata"
    },
    {
        titulo: "🌾 Campo Limpo",
        imagem: "assets/imagens/diario/campo-limpo.jpg",
        fala: "Aqui quase não existem árvores. As gramíneas dominam a paisagem.",
        ondeFica: "É encontrado em diversas regiões do Cerrado.",
        encontramos: "Capins, flores, emas, seriemas e pequenos mamíferos.",
        curiosidade: "Mesmo parecendo simples, abriga uma enorme biodiversidade.",
        pergunta: "Qual tipo de planta predomina no Campo Limpo?",
        opcoes: [
            "Gramíneas",
            "Manguezais",
            "Pinheiros"
        ],
        correta: 0,
        xp: 40,
        local: "Campo Limpo",
        dificuldade: "Médio",
        especies: [
            "🌾 Gramíneas",
            "🐦 Seriema",
            "🐭 Pequenos mamíferos",
            "🌼 Flores do Cerrado"
        ],
        tema: "campo"
    },
    {
        titulo: "💧 Veredas",
        imagem: "assets/imagens/diario/veredas.jpg",
        fala: "As veredas são verdadeiros oásis do Cerrado. A água que brota aqui mantém a vida de muitas espécies.",
        ondeFica: "São encontradas em áreas úmidas do Cerrado, próximas às nascentes e aos pequenos cursos de água.",
        encontramos: "Buritis, capivaras, garças, peixes, anfíbios e muitos insetos.",
        curiosidade: "O buriti é conhecido como a árvore símbolo das veredas.",
        pergunta: "Qual árvore é considerada símbolo das Veredas?",
        opcoes: [
            "Ipê-amarelo",
            "Buriti",
            "Pequi"
        ],
        correta: 1,
        xp: 40,
        local: "Veredas",
        dificuldade: "Médio",
        especies: [
            "🌴 Buriti",
            "🦆 Garças",
            "🐟 Peixes",
            "🐸 Anfíbios"
        ],
        tema: "veredas"
    },
    {
        titulo: "🏞️ Rio Cristalino",
        imagem: "assets/imagens/diario/rio-cristalino.jpg",
        fala: "A água limpa permite enxergar peixes, pedras e plantas aquáticas. É um ambiente muito delicado.",
        ondeFica: "Diversos rios do Cerrado apresentam águas extremamente transparentes.",
        encontramos: "Peixes, lontras, aves aquáticas, pedras e vegetação ciliar.",
        curiosidade: "Os rios do Cerrado abastecem algumas das maiores bacias hidrográficas do Brasil.",
        pergunta: "O que torna esses rios especiais?",
        opcoes: [
            "A água cristalina",
            "A água salgada",
            "A água quente"
        ],
        correta: 0,
        xp: 40,
        local: "Rio Cristalino",
        dificuldade: "Difícil",
        especies: [
            "🦦 Lontras",
            "🐟 Peixes",
            "🪨 Rochas",
            "🌿 Vegetação ciliar"
        ],
        tema: "rio"
    },
    {
        titulo: "🏆 Guardião do Cerrado",
        imagem: "assets/imagens/diario/guardiao.jpg",
        fala: "Parabéns! Você chegou ao fim da nossa expedição. Agora conhece muito mais sobre o Cerrado e pode ajudar a protegê-lo.",
        ondeFica: "O Cerrado ocupa uma grande parte do território brasileiro e está presente em vários estados.",
        encontramos: "Animais, plantas, rios, comunidades e muita biodiversidade que precisam ser preservados.",
        curiosidade: "Pequenas atitudes podem fazer uma grande diferença para a conservação da natureza.",
        pergunta: "Qual é a melhor forma de proteger o Cerrado?",
        opcoes: [
            "Preservar a natureza",
            "Desmatar áreas verdes",
            "Poluir os rios"
        ],
        correta: 0,
        xp: 200,
        local: "Cerrado brasileiro",
        dificuldade: "Missão final",
        especies: [],
        tema: "guardiao",
        certificado: true
    }
];

let paginaAtual = 0;
let respostaSelecionada = null;

const capa = document.getElementById("capaDiario");
const livro = document.getElementById("livro");
const tituloLocal = document.getElementById("tituloLocal");
const paginaTexto = document.getElementById("paginaAtual");
const contadorPaginas = document.getElementById("contadorPaginas");
const imagemLocal = document.getElementById("imagemLocal");
const falaLobo = document.getElementById("falaLobo");
const ondeFica = document.getElementById("ondeFica");
const encontramos = document.getElementById("encontramos");
const curiosidade = document.getElementById("curiosidade");
const pergunta = document.getElementById("pergunta");
const opcoes = document.getElementById("opcoes");
const resultado = document.getElementById("resultado");
const barra = document.getElementById("barraProgresso");
const xpPagina = document.getElementById("xpPagina");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");
const botaoVerificar = document.getElementById("verificarResposta");
const botaoAbrir = document.getElementById("abrirDiario");
const textoBotaoAbrir = document.getElementById("textoBotaoAbrir");

const fichaExpedicao = document.getElementById("fichaExpedicao");
const fichaNormal = document.getElementById("fichaNormal");
const certificado = document.getElementById("certificado");
const localFicha = document.getElementById("localFicha");
const especiesFicha = document.getElementById("especiesFicha");
const dificuldadeFicha = document.getElementById("dificuldadeFicha");
const recompensaFicha = document.getElementById("recompensaFicha");

const botaoMenuDiario = document.getElementById("botaoMenuDiario");
const menuDiario = document.getElementById("menuDiario");
const numeroExpedicao = document.getElementById("numeroExpedicao");
const porcentagemProgresso = document.getElementById("porcentagemProgresso");

function obterProgresso() {
    const salvo = localStorage.getItem("progressoDiario");

    if (!salvo) {
        return {
            paginas: [],
            xp: 0,
            ultimaPagina: 0
        };
    }

    try {
        const progresso = JSON.parse(salvo);

        return {
            paginas: Array.isArray(progresso.paginas)
                ? progresso.paginas
                : [],
            xp: Number(progresso.xp) || 0,
            ultimaPagina: Number(progresso.ultimaPagina) || 0
        };
    } catch {
        return {
            paginas: [],
            xp: 0,
            ultimaPagina: 0
        };
    }
}

function salvarObjetoProgresso(progresso) {
    localStorage.setItem(
        "progressoDiario",
        JSON.stringify(progresso)
    );
}

function atualizarBotaoInicial() {
    const progresso = obterProgresso();

    if (progresso.paginas.length > 0 || progresso.ultimaPagina > 0) {
        textoBotaoAbrir.textContent = "Continuar expedição";
    } else {
        textoBotaoAbrir.textContent = "Iniciar expedição";
    }
}

function carregarFicha(pagina) {
    fichaExpedicao.className =
        `ficha-expedicao tema-${pagina.tema}`;

    if (pagina.certificado) {
        fichaNormal.classList.add("oculto");
        certificado.classList.remove("oculto");
        return;
    }

    fichaNormal.classList.remove("oculto");
    certificado.classList.add("oculto");

    localFicha.textContent = pagina.local;
    dificuldadeFicha.textContent = pagina.dificuldade;
    recompensaFicha.textContent = `+${pagina.xp} XP`;

    especiesFicha.innerHTML = "";

    pagina.especies.forEach(especie => {
        const item = document.createElement("span");

        item.textContent = especie;

        especiesFicha.appendChild(item);
    });
}

function criarOpcoes(pagina, paginaConcluida) {
    opcoes.innerHTML = "";

    pagina.opcoes.forEach((texto, indice) => {
        const opcao = document.createElement("button");

        opcao.type = "button";
        opcao.className = "opcao";
        opcao.textContent = texto;

        if (paginaConcluida) {
            opcao.disabled = true;

            if (indice === pagina.correta) {
                opcao.classList.add("correta");
            }
        }

        opcao.addEventListener("click", () => {
            document.querySelectorAll(".opcao").forEach(item => {
                item.classList.remove("selecionada");
            });

            opcao.classList.add("selecionada");
            respostaSelecionada = indice;
        });

        opcoes.appendChild(opcao);
    });
}

function carregarPagina() {
    const pagina = paginas[paginaAtual];
    const progresso = obterProgresso();
    const paginaConcluida = progresso.paginas.includes(paginaAtual);

    const porcentagem = Math.round(
        ((paginaAtual + 1) / paginas.length) * 100
    );

    numeroExpedicao.textContent =
        `Expedição ${String(paginaAtual + 1).padStart(2, "0")}`;

    porcentagemProgresso.textContent = `${porcentagem}%`;

    tituloLocal.textContent = pagina.titulo;

    paginaTexto.textContent =
        `Página ${paginaAtual + 1} de ${paginas.length}`;

    contadorPaginas.textContent =
        `Página ${paginaAtual + 1} de ${paginas.length}`;

    imagemLocal.src = pagina.imagem;
    imagemLocal.alt = pagina.local;

    falaLobo.textContent = pagina.fala;
    ondeFica.textContent = pagina.ondeFica;
    encontramos.textContent = pagina.encontramos;
    curiosidade.textContent = pagina.curiosidade;
    pergunta.textContent = pagina.pergunta;
    xpPagina.textContent = `+${pagina.xp} XP`;

    barra.style.width = `${porcentagem}%`;

    carregarFicha(pagina);

    respostaSelecionada = null;
    resultado.textContent = "";

    criarOpcoes(pagina, paginaConcluida);

    if (paginaConcluida) {
        resultado.textContent = "✅ Página já concluída!";
        resultado.style.color = "#2E7D32";
        botaoVerificar.textContent = "Página concluída";
        botaoVerificar.disabled = true;
    } else {
        botaoVerificar.textContent = "Verificar resposta";
        botaoVerificar.disabled = false;
    }
botaoAnterior.disabled = paginaAtual === 0;

const ultimaPagina = paginaAtual === paginas.length - 1;
const podeAvancar = paginaConcluida && !ultimaPagina;

botaoProximo.disabled = !podeAvancar;

botaoAnterior.classList.toggle(
    "desativado",
    paginaAtual === 0
);

botaoProximo.classList.toggle(
    "desativado",
    !podeAvancar
);

if (ultimaPagina) {
    botaoProximo.textContent = "Expedição concluída 🏆";
} else if (paginaConcluida) {
    botaoProximo.textContent = "Próxima página ▶";
} else {
    botaoProximo.textContent = "Responda para avançar 🔒";
}

    const progressoAtualizado = obterProgresso();

    progressoAtualizado.ultimaPagina = paginaAtual;

    salvarObjetoProgresso(progressoAtualizado);
}

function adicionarXpAoPerfil(valor) {
    const xpAtual = Number(localStorage.getItem("xpTotal")) || 0;
    const novoXp = xpAtual + valor;

    localStorage.setItem("xpTotal", String(novoXp));
}

function salvarConclusaoPagina() {
    const progresso = obterProgresso();
    const pagina = paginas[paginaAtual];

    if (!progresso.paginas.includes(paginaAtual)) {
        progresso.paginas.push(paginaAtual);
        progresso.xp += pagina.xp;

        adicionarXpAoPerfil(pagina.xp);
    }

    progresso.ultimaPagina = paginaAtual;

    salvarObjetoProgresso(progresso);
}

botaoAbrir.addEventListener("click", () => {
    const progresso = obterProgresso();

    paginaAtual = Math.min(
        Math.max(progresso.ultimaPagina, 0),
        paginas.length - 1
    );

    capa.classList.add("oculto");
    livro.classList.remove("oculto");

    carregarPagina();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

botaoProximo.addEventListener("click", () => {
    const progresso = obterProgresso();
    const paginaConcluida = progresso.paginas.includes(paginaAtual);

    if (!paginaConcluida) {
        resultado.textContent =
            "🔒 Responda corretamente ao desafio para avançar.";

        resultado.style.color = "#D32F2F";
        return;
    }

    if (paginaAtual < paginas.length - 1) {
        paginaAtual++;

        carregarPagina();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

botaoAnterior.addEventListener("click", () => {
    if (paginaAtual > 0) {
        paginaAtual--;

        carregarPagina();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

botaoVerificar.addEventListener("click", () => {
    const pagina = paginas[paginaAtual];
    const progresso = obterProgresso();

    if (progresso.paginas.includes(paginaAtual)) {
        resultado.textContent =
            "✅ Você já concluiu esta página.";

        resultado.style.color = "#2E7D32";

        return;
    }

    if (respostaSelecionada === null) {
        resultado.textContent =
            "Escolha uma alternativa antes de verificar.";

        resultado.style.color = "#D32F2F";

        return;
    }

    const elementosOpcoes =
        document.querySelectorAll(".opcao");

    if (respostaSelecionada === pagina.correta) {
        salvarConclusaoPagina();

        resultado.textContent =
            `✨ Resposta correta! Você ganhou ${pagina.xp} XP.`;

        resultado.style.color = "#2E7D32";

        botaoVerificar.textContent = "Página concluída";
        botaoVerificar.disabled = true;

        elementosOpcoes.forEach((opcao, indice) => {
            opcao.disabled = true;
            if (paginaAtual < paginas.length - 1) {
    botaoProximo.disabled = false;
    botaoProximo.classList.remove("desativado");
    botaoProximo.textContent = "Próxima página ▶";
} else {
    botaoProximo.disabled = true;
    botaoProximo.classList.add("desativado");
    botaoProximo.textContent = "Expedição concluída 🏆";
}

            if (indice === pagina.correta) {
                opcao.classList.add("correta");
            }
        });

        atualizarBotaoInicial();
    } else {
        resultado.textContent =
            "Resposta incorreta. Tente novamente!";

        resultado.style.color = "#D32F2F";

        elementosOpcoes.forEach((opcao, indice) => {
            opcao.classList.remove("errada");

            if (indice === respostaSelecionada) {
                opcao.classList.add("errada");
            }
        });
    }
});

botaoMenuDiario.addEventListener("click", () => {
    menuDiario.classList.toggle("aberto");
});

menuDiario.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menuDiario.classList.remove("aberto");
    });
});

document.addEventListener("click", evento => {
    const clicouNoMenu = menuDiario.contains(evento.target);
    const clicouNoBotao = botaoMenuDiario.contains(evento.target);

    if (!clicouNoMenu && !clicouNoBotao) {
        menuDiario.classList.remove("aberto");
    }
});

atualizarBotaoInicial();