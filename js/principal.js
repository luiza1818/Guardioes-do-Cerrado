
function lerJSON(chave, padrao = {}) {
    try {
        const valor = JSON.parse(Guardioes.storage.getItem(chave));
        return valor === null || valor === undefined ? padrao : valor;
    } catch {
        return padrao;
    }
}

function salvarJSON(chave, valor) {
    Guardioes.storage.setItem(chave, JSON.stringify(valor));
}

function contar(valor) {
    if (Array.isArray(valor)) {
        return valor.length;
    }

    if (valor && typeof valor === "object") {
        return Object.keys(valor).length;
    }

    const numero = Number(valor);
    return Number.isFinite(numero) ? numero : 0;
}

function pegarPrimeiro(objeto, chaves, padrao) {
    for (const chave of chaves) {
        if (
            objeto[chave] !== undefined &&
            objeto[chave] !== null &&
            objeto[chave] !== ""
        ) {
            return objeto[chave];
        }
    }

    return padrao;
}

function dataLocalString(data = new Date()) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

function diferencaDias(data1, data2) {
    const primeira = new Date(`${data1}T12:00:00`);
    const segunda = new Date(`${data2}T12:00:00`);

    if (
        Number.isNaN(primeira.getTime()) ||
        Number.isNaN(segunda.getTime())
    ) {
        return NaN;
    }

    return Math.round(
        (segunda.getTime() - primeira.getTime()) / 86400000
    );
}

function atualizarSequencia() {
    const hoje = dataLocalString();

    let dados = lerJSON("sequenciaGuardiao", {
        dias: 0,
        ultimoDia: null,
        historico: []
    });

    if (!dados || typeof dados !== "object" || Array.isArray(dados)) {
        dados = {
            dias: 0,
            ultimoDia: null,
            historico: []
        };
    }

    if (!Array.isArray(dados.historico)) {
        dados.historico = [];
    }

    const historico = new Set(
        dados.historico.filter(
            data => typeof data === "string" &&
                    /^\d{4}-\d{2}-\d{2}$/.test(data)
        )
    );

    if (dados.ultimoDia && dados.ultimoDia > hoje) {
        dados.ultimoDia = null;
        dados.dias = 0;
    }

    if (!dados.ultimoDia) {
        dados.dias = 1;
        dados.ultimoDia = hoje;
    } else {
        const diferenca = diferencaDias(dados.ultimoDia, hoje);

        if (diferenca === 1) {
            dados.dias = Math.max(0, Number(dados.dias) || 0) + 1;
            dados.ultimoDia = hoje;
        } else if (diferenca > 1 || Number.isNaN(diferenca)) {
            dados.dias = 1;
            dados.ultimoDia = hoje;
        } else if (diferenca === 0) {
            dados.dias = Math.max(1, Number(dados.dias) || 1);
        }
    }

    historico.add(hoje);

    dados.historico = Array.from(historico)
        .filter(data => data <= hoje)
        .sort()
        .slice(-60);

    salvarJSON("sequenciaGuardiao", dados);

    return dados;
}

function obterDadosUsuario() {
    const usuario = lerJSON("usuario", {});
    const usuarioLogado = lerJSON("usuarioLogado", {});
    const perfil = lerJSON("perfilUsuario", {});
    const progresso = lerJSON("progresso", {});

    const dados = {
        ...usuario,
        ...usuarioLogado,
        ...perfil,
        ...progresso
    };

    const nome = pegarPrimeiro(
        dados,
        ["nome", "nomeUsuario", "usuario"],
        "Guardiã"
    );

    const xp = Number(
        pegarPrimeiro(
            dados,
            ["xp", "xpTotal", "experiencia", "pontos"],
            0
        )
    ) || 0;

    const avatar = pegarPrimeiro(
        dados,
        ["avatar", "foto", "imagemPerfil"],
        ""
    );

    return {
        nome: String(nome || "Guardiã"),
        xp: Math.max(0, xp),
        avatar
    };
}

function obterNomeCurto(nome) {
    return String(nome || "Guardiã")
        .trim()
        .split(/\s+/)[0];
}

function obterNivel(xp) {
    return Math.floor(xp / 100) + 1;
}

function obterNomeNivel(nivel) {
    if (nivel >= 15) return "Guardião Lendário";
    if (nivel >= 12) return "Protetor do Cerrado";
    if (nivel >= 9) return "Naturalista";
    if (nivel >= 6) return "Explorador";
    if (nivel >= 3) return "Aventureiro";

    return "Aprendiz";
}

function obterProgressoNivel(xp) {
    const xpDentroNivel = xp % 100;

    return {
        atual: xpDentroNivel,
        necessario: 100,
        porcentagem: xpDentroNivel
    };
}

function obterArtigos() {
    const progresso = lerJSON("progresso", {});

    return Math.max(
        contar(progresso.artigos),
        contar(progresso.artigosLidos),
        contar(progresso.artigosConcluidos),
        contar(lerJSON("artigosLidos", [])),
        contar(lerJSON("artigosConcluidos", []))
    );
}

function obterCerradex() {
    const progresso = lerJSON("progresso", {});
    const cerradex = lerJSON("cerradex", {});

    return Math.max(
        contar(progresso.cartas),
        contar(progresso.especies),
        contar(progresso.especiesDescobertas),
        contar(cerradex.cartas),
        contar(cerradex.especies),
        contar(lerJSON("cartasDesbloqueadas", [])),
        contar(lerJSON("especiesDescobertas", [])),
        contar(lerJSON("descobertasCerradex", []))
    );
}

function obterDiario() {
    const progresso = lerJSON("progresso", {});
    const diario = lerJSON("progressoDiario", {});

    return Math.max(
        contar(progresso.diario),
        contar(progresso.paginasDiario),
        contar(progresso.expedicoes),
        contar(progresso.expedicoesConcluidas),
        contar(diario.paginas),
        contar(diario.concluidas),
        contar(diario.expedicoes)
    );
}

function obterMissoes() {
    const progresso = lerJSON("progresso", {});
    const missoes = lerJSON("missoes", {});

    return Math.max(
        contar(progresso.missoes),
        contar(progresso.missoesConcluidas),
        contar(missoes.concluidas),
        contar(missoes.missoesConcluidas)
    );
}

function preencherBarra(elemento, porcentagem) {
    if (!elemento) return;

    const valor = Number(porcentagem) || 0;
    elemento.style.width = `${Math.max(0, Math.min(100, valor))}%`;
}

function atualizarPerfil() {
    const usuario = obterDadosUsuario();
    const nomeCurto = obterNomeCurto(usuario.nome);
    const nivel = obterNivel(usuario.xp);
    const nomeNivel = obterNomeNivel(nivel);

    document.getElementById("nomeHero").textContent = nomeCurto;
    document.getElementById("nomeMenu").textContent = nomeCurto;
    document.getElementById("nivelMenu").textContent = `Nível ${nivel}`;
    document.getElementById("nomeNivel").textContent = nomeNivel;
    document.getElementById("numeroNivel").textContent = `Nível ${nivel}`;
    document.getElementById("xpTotal").textContent = usuario.xp;

    const progressoNivel = obterProgressoNivel(usuario.xp);

    preencherBarra(
        document.getElementById("barraNivel"),
        progressoNivel.porcentagem
    );

    document.getElementById("proximoNivel").textContent =
        `${progressoNivel.atual} / ${progressoNivel.necessario} XP para o próximo nível`;

    const avatar = document.getElementById("avatarMenu");

    if (avatar) {
        const avatarPadrao = "assets/imagens/avatar.png";

        avatar.onerror = function () {
            if (!this.src.endsWith(avatarPadrao)) {
                this.src = avatarPadrao;
            }
        };

        if (usuario.avatar) {
            avatar.src = usuario.avatar;
        }
    }
}

function atualizarData() {
    const agora = new Date();

    const texto = agora.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long"
    });

    document.getElementById("dataAtual").textContent =
        `Expedição de ${texto}`;
}

function atualizarSequenciaTela() {
    const dados = atualizarSequencia();

    document.getElementById("sequenciaDias").textContent =
        dados.dias;

    document.getElementById("textoSequencia").textContent =
        dados.dias === 1 ? "dia seguido" : "dias seguidos";

    const bolinhas = document.querySelectorAll("#miniSemana span");

    const hoje = new Date();
    const diaSemana = hoje.getDay();
    const deslocamento = (diaSemana + 6) % 7;

    const segundaFeira = new Date(
        hoje.getFullYear(),
        hoje.getMonth(),
        hoje.getDate() - deslocamento
    );

    const historico = new Set(dados.historico || []);
    const nomesDias = ["S", "T", "Q", "Q", "S", "S", "D"];

    bolinhas.forEach((bolinha, indice) => {
        const data = new Date(
            segundaFeira.getFullYear(),
            segundaFeira.getMonth(),
            segundaFeira.getDate() + indice
        );

        const dataFormatada = dataLocalString(data);
        const ehHoje = dataFormatada === dataLocalString(hoje);

        bolinha.textContent = nomesDias[indice];

        bolinha.classList.toggle(
            "ativo",
            historico.has(dataFormatada)
        );

        bolinha.classList.toggle("hoje", ehHoje);

        bolinha.title = data.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long"
        });

        bolinha.setAttribute(
            "aria-label",
            `${bolinha.title}${historico.has(dataFormatada) ? ", visitado" : ""}${ehHoje ? ", hoje" : ""}`
        );
    });
}

function atualizarProgressoGeral() {
    const artigos = obterArtigos();
    const cerradex = obterCerradex();
    const diario = obterDiario();
    const missoes = obterMissoes();

    const totalArtigos = 50;
    const totalCerradex = 50;
    const totalDiario = 6;
    const totalMissoes = 10;

    document.getElementById("artigosNumero").textContent =
        `${artigos}/${totalArtigos}`;

    document.getElementById("cerradexNumero").textContent =
        `${cerradex}/${totalCerradex}`;

    document.getElementById("diarioNumero").textContent =
        `${diario}/${totalDiario}`;

    document.getElementById("missoesNumero").textContent =
        `${missoes}/${totalMissoes}`;

    preencherBarra(
        document.getElementById("barraArtigos"),
        artigos / totalArtigos * 100
    );

    preencherBarra(
        document.getElementById("barraCerradex"),
        cerradex / totalCerradex * 100
    );

    preencherBarra(
        document.getElementById("barraDiario"),
        diario / totalDiario * 100
    );

    preencherBarra(
        document.getElementById("barraMissoes"),
        missoes / totalMissoes * 100
    );
}

const missoesDiarias = [
    {
        tipo: "Biblioteca",
        titulo: "Hora de estudar o Cerrado",
        descricao: "Leia pelo menos um artigo da Biblioteca e descubra algo novo sobre a fauna ou flora.",
        recompensa: 20,
        link: "biblioteca.html",
        textoBotao: "Ir para Biblioteca",
        progresso: () => Math.min(obterArtigos(), 1)
    },
    {
        tipo: "Cerradex",
        titulo: "Nova espécie à vista",
        descricao: "Descubra uma nova espécie e registre mais uma carta na sua Cerradex.",
        recompensa: 25,
        link: "cerradex.html",
        textoBotao: "Abrir Cerradex",
        progresso: () => Math.min(obterCerradex(), 1)
    },
    {
        tipo: "Diário de Campo",
        titulo: "Continue a expedição",
        descricao: "Avance em uma etapa do Diário de Campo e registre sua passagem pelo Cerrado.",
        recompensa: 30,
        link: "diario.html",
        textoBotao: "Abrir Diário",
        progresso: () => Math.min(obterDiario(), 1)
    },
    {
        tipo: "Exploração",
        titulo: "Guardião em movimento",
        descricao: "Explore uma das áreas do projeto e mantenha sua sequência diária ativa.",
        recompensa: 15,
        link: "biblioteca.html",
        textoBotao: "Começar exploração",
        progresso: () => 1
    },
    {
        tipo: "Missões",
        titulo: "Um desafio para o Guardião",
        descricao: "Conclua uma missão para avançar na sua jornada de preservação.",
        recompensa: 35,
        link: "missoes.html",
        textoBotao: "Ver missões",
        progresso: () => Math.min(obterMissoes(), 1)
    }
];

function numeroDoDiaDoAno() {
    const agora = new Date();

    const inicio = new Date(
        agora.getFullYear(),
        0,
        1
    );

    const hoje = new Date(
        agora.getFullYear(),
        agora.getMonth(),
        agora.getDate()
    );

    return Math.round(
        (Date.UTC(
            hoje.getFullYear(),
            hoje.getMonth(),
            hoje.getDate()
        ) - Date.UTC(
            inicio.getFullYear(),
            inicio.getMonth(),
            inicio.getDate()
        )) / 86400000
    );
}

function obterMissaoDoDia() {
    const numero = numeroDoDiaDoAno();

    return missoesDiarias[
        numero % missoesDiarias.length
    ];
}

function atualizarMissaoDoDia() {
    const missao = obterMissaoDoDia();
    const progresso = missao.progresso();
    const porcentagem = Math.min(100, progresso * 100);

    document.getElementById("missaoTipo").textContent =
        missao.tipo;

    document.getElementById("tituloMissao").textContent =
        missao.titulo;

    document.getElementById("descricaoMissao").textContent =
        missao.descricao;

    document.getElementById("recompensaMissao").textContent =
        `+${missao.recompensa} XP`;

    document.getElementById("porcentagemMissao").textContent =
        `${Math.round(porcentagem)}%`;

    preencherBarra(
        document.getElementById("barraMissao"),
        porcentagem
    );

    const circunferencia = 2 * Math.PI * 50;
    const offset = circunferencia -
        (porcentagem / 100) * circunferencia;

    const circulo = document.getElementById("circuloMissao");

    circulo.style.strokeDasharray = circunferencia;
    circulo.style.strokeDashoffset = offset;

    const botao = document.getElementById("botaoMissao");

    botao.href = missao.link;

    const status = document.getElementById("statusMissao");

    if (porcentagem >= 100) {
        status.textContent = "Concluída";
        status.classList.add("concluida");

        botao.innerHTML = `
            Missão concluída
            <i class="fa-solid fa-check"></i>
        `;
    } else {
        status.textContent = "Em andamento";
        status.classList.remove("concluida");

        botao.innerHTML = `
            ${missao.textoBotao}
            <i class="fa-solid fa-arrow-right"></i>
        `;
    }
}

function atualizarFalaLobo() {
    const sequencia = lerJSON(
        "sequenciaGuardiao",
        { dias: 1 }
    );

    const artigos = obterArtigos();
    const cerradex = obterCerradex();

    let mensagem;

    if (sequencia.dias >= 7) {
        mensagem =
            `Uma semana inteira de exploração! Sua sequência já chegou a ${sequencia.dias} dias.`;
    } else if (cerradex >= 8) {
        mensagem =
            "Sua Cerradex está ficando incrível. Ainda existem espécies esperando para serem descobertas!";
    } else if (artigos >= 5) {
        mensagem =
            "Você já estudou bastante sobre o Cerrado. Que tal continuar a expedição pelo Diário?";
    } else if (sequencia.dias >= 3) {
        mensagem =
            `${sequencia.dias} dias seguidos! Continue assim e sua jornada vai ganhar cada vez mais vida.`;
    } else {
        mensagem =
            "Que bom que você voltou! Escolha uma missão e vamos explorar o Cerrado juntos.";
    }

    document.getElementById("falaLobo").textContent =
        mensagem;
}

function configurarMenuMobile() {
    const botao = document.getElementById("botaoMenuMobile");
    const menu = document.getElementById("menuLateral");
    const fundo = document.getElementById("fundoMenu");

    if (!botao || !menu || !fundo) return;

    function fecharMenu() {
        menu.classList.remove("aberto");
        fundo.classList.remove("ativo");

        botao.innerHTML = '<i class="fa-solid fa-bars"></i>';
        botao.setAttribute("aria-expanded", "false");
        botao.setAttribute("aria-label", "Abrir menu");
    }

    function alternarMenu() {
        const aberto = menu.classList.toggle("aberto");

        fundo.classList.toggle("ativo", aberto);

        botao.innerHTML = aberto
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

        botao.setAttribute("aria-expanded", String(aberto));
        botao.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );
    }

    botao.addEventListener("click", alternarMenu);
    fundo.addEventListener("click", fecharMenu);

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", fecharMenu);
    });

    document.addEventListener("keydown", evento => {
        if (evento.key === "Escape") {
            fecharMenu();
        }
    });
}

function configurarImagemLobo() {
    const lobo = document.getElementById("loboPrincipal");
    const fundo = document.querySelector(".lobo-fundo");

    if (!lobo || !fundo) return;

    lobo.addEventListener("error", () => {
        lobo.style.display = "none";

        if (!fundo.querySelector(".lobo-substituto")) {
            const substituto = document.createElement("div");

            substituto.className = "lobo-substituto";
            substituto.style.cssText = `
                position: absolute;
                inset: 0;
                display: grid;
                place-items: center;
                color: #2E7D32;
                font-size: 6rem;
            `;

            substituto.innerHTML =
                '<i class="fa-solid fa-paw"></i>';

            fundo.appendChild(substituto);
        }
    });

    if (lobo.complete && lobo.naturalWidth === 0) {
        lobo.dispatchEvent(new Event("error"));
    }
}

const configuracoesVisuaisPadrao = {
    animacoes: true,
    folhas: true
};

function obterConfiguracoesVisuais() {
    const salvas = lerJSON("configuracoes", {});

    if (
        !salvas ||
        typeof salvas !== "object" ||
        Array.isArray(salvas)
    ) {
        return { ...configuracoesVisuaisPadrao };
    }

    return {
        ...configuracoesVisuaisPadrao,
        ...salvas
    };
}

function animacoesPermitidasPeloSistema() {
    return !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;
}

function aplicarConfiguracoesVisuais() {
    const configuracoes = obterConfiguracoesVisuais();

    const animacoesAtivas =
        configuracoes.animacoes !== false &&
        animacoesPermitidasPeloSistema();

    const folhasAtivas =
        configuracoes.folhas !== false &&
        animacoesAtivas;

    document.body.classList.toggle(
        "sem-animacoes",
        !animacoesAtivas
    );

    document.body.classList.toggle(
        "sem-folhas",
        !folhasAtivas
    );

    configurarFolhasAnimadas(folhasAtivas);
}

function configurarFolhasAnimadas(ativar) {
    const hero = document.querySelector(".hero");

    if (!hero) return;

    let recipiente = hero.querySelector(".folhas-animadas");

    if (!ativar) {
        if (recipiente) {
            recipiente.remove();
        }
        return;
    }

    if (recipiente) return;

    recipiente = document.createElement("div");
    recipiente.className = "folhas-animadas";
    recipiente.setAttribute("aria-hidden", "true");

    const quantidade = window.innerWidth <= 560 ? 6 : 11;

    for (let i = 0; i < quantidade; i++) {
        const folha = document.createElement("i");

        folha.className = i % 3 === 0
            ? "fa-brands fa-pagelines folha-animada"
            : "fa-solid fa-leaf folha-animada";

        const posicao = 5 + Math.random() * 90;
        const tamanho = 12 + Math.random() * 12;
        const duracao = 10 + Math.random() * 9;
        const atraso = -Math.random() * duracao;
        const deslocamento = -70 + Math.random() * 140;

        folha.style.setProperty(
            "--folha-x",
            `${posicao}%`
        );

        folha.style.setProperty(
            "--folha-tamanho",
            `${tamanho}px`
        );

        folha.style.setProperty(
            "--folha-duracao",
            `${duracao}s`
        );

        folha.style.setProperty(
            "--folha-atraso",
            `${atraso}s`
        );

        folha.style.setProperty(
            "--folha-deslocamento",
            `${deslocamento}px`
        );

        recipiente.appendChild(folha);
    }

    hero.appendChild(recipiente);
}

function configurarPreferenciasVisuais() {
    aplicarConfiguracoesVisuais();

    window.addEventListener("storage", evento => {
        if (
            evento.key === "configuracoes" ||
            evento.key === null
        ) {
            aplicarConfiguracoesVisuais();
        }
    });

    const preferenciaMovimento = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (typeof preferenciaMovimento.addEventListener === "function") {
        preferenciaMovimento.addEventListener(
            "change",
            aplicarConfiguracoesVisuais
        );
    }

    document.addEventListener(
        "visibilitychange",
        () => {
            if (!document.hidden) {
                aplicarConfiguracoesVisuais();
            }
        }
    );
}

function iniciarPrincipal() {
    atualizarData();
    atualizarSequenciaTela();
    atualizarPerfil();
    atualizarProgressoGeral();
    atualizarMissaoDoDia();
    atualizarFalaLobo();
    configurarMenuMobile();
    configurarImagemLobo();
    configurarPreferenciasVisuais();
}

document.addEventListener(
    "guardioes:ready",
    iniciarPrincipal
);
