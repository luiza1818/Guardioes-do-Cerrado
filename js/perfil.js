
document.addEventListener("DOMContentLoaded", function () {
    const especies = Array.isArray(window.especies)
        ? window.especies
        : [];

    const nomeUsuario = document.getElementById("nomeUsuario");
    const seloNivel = document.getElementById("seloNivel");
    const resumoNivel = document.getElementById("resumoNivel");
    const resumoXP = document.getElementById("resumoXP");
    const resumoSequencia = document.getElementById("resumoSequencia");
    const nivelAtual = document.getElementById("nivelAtual");
    const textoXP = document.getElementById("textoXP");
    const porcentagemXP = document.getElementById("porcentagemXP");
    const barraXP = document.getElementById("barraXP");
    const mensagemNivel = document.getElementById("mensagemNivel");
    const sequenciaAtual = document.getElementById("sequenciaAtual");
    const totalArtigos = document.getElementById("totalArtigos");
    const totalCartas = document.getElementById("totalCartas");
    const xpTotal = document.getElementById("xpTotal");
    const totalConquistas = document.getElementById("totalConquistas");
    const contadorConquistas = document.getElementById("contadorConquistas");
    const gradeConquistas = document.getElementById("gradeConquistas");
    const porcentagemCerradex = document.getElementById("porcentagemCerradex");
    const cartasEncontradas = document.getElementById("cartasEncontradas");
    const barraCerradexPerfil = document.getElementById("barraCerradexPerfil");
    const botaoMenu = document.getElementById("botaoMenu");
    const menu = document.getElementById("menu");

    const mapaIcones = {
        "🐺": "fa-paw",
        "🐾": "fa-paw",
        "📚": "fa-book-open",
        "📖": "fa-book-open",
        "📘": "fa-book",
        "🃏": "fa-layer-group",
        "⭐": "fa-star",
        "🌟": "fa-star",
        "🏆": "fa-trophy",
        "🥇": "fa-medal",
        "🥈": "fa-medal",
        "🥉": "fa-medal",
        "🏅": "fa-medal",
        "🎖️": "fa-award",
        "🌿": "fa-leaf",
        "🌱": "fa-seedling",
        "🌳": "fa-tree",
        "🌎": "fa-earth-americas",
        "🌍": "fa-earth-americas",
        "🔥": "fa-fire",
        "💚": "fa-heart",
        "❤️": "fa-heart",
        "💡": "fa-lightbulb",
        "🧠": "fa-brain",
        "🧭": "fa-compass",
        "🗺️": "fa-map",
        "🎯": "fa-bullseye",
        "🔒": "fa-lock",
        "🔓": "fa-lock-open",
        "✅": "fa-circle-check",
        "✔️": "fa-check",
        "✨": "fa-wand-magic-sparkles",
        "🎓": "fa-graduation-cap",
        "🏕️": "fa-campground",
        "🦋": "fa-bug",
        "🐝": "fa-bug",
        "🦜": "fa-dove",
        "🦊": "fa-paw",
        "🌻": "fa-seedling",
        "🌼": "fa-seedling",
        "💧": "fa-droplet",
        "☀️": "fa-sun",
        "⚡": "fa-bolt",
        "🎒": "fa-bag-shopping",
        "🔍": "fa-magnifying-glass",
        "🔎": "fa-magnifying-glass",
        "👑": "fa-crown",
        "🚀": "fa-rocket",
        "🎉": "fa-gift"
    };

    function criarIcone(classe) {
        const icone = document.createElement("i");
        icone.className = `fa-solid ${classe}`;
        icone.setAttribute("aria-hidden", "true");
        return icone;
    }

    function obterClasseIcone(valor) {
        const texto = String(valor || "").trim();

        if (mapaIcones[texto]) {
            return mapaIcones[texto];
        }

        const emojiEncontrado = Object.keys(mapaIcones).find(function (emoji) {
            return texto.includes(emoji);
        });

        if (emojiEncontrado) {
            return mapaIcones[emojiEncontrado];
        }

        const classeFontAwesome = texto.match(
            /\bfa-(?:solid|regular|brands)\s+(fa-[a-z0-9-]+)/i
        );

        if (classeFontAwesome) {
            return classeFontAwesome[1];
        }

        const classeSimples = texto.match(/^fa-[a-z0-9-]+$/i);

        if (classeSimples) {
            return classeSimples[0];
        }

        return "fa-award";
    }

    function progressoPadrao() {
        return {
            xp: 0,
            artigos: [],
            cartas: [],
            sequencia: 0
        };
    }

    function lerListaSalva(chave) {
        try {
            const valor = JSON.parse(localStorage.getItem(chave));
            return Array.isArray(valor) ? valor : [];
        } catch (erro) {
            return [];
        }
    }

    function obterDadosProgresso() {
        let progresso = progressoPadrao();

        try {
            if (typeof window.obterProgresso === "function") {
                progresso = window.obterProgresso() || progressoPadrao();
            } else if (typeof obterProgresso === "function") {
                progresso = obterProgresso() || progressoPadrao();
            }
        } catch (erro) {
            progresso = progressoPadrao();
        }

        const cartasProgresso = Array.isArray(progresso.cartas)
            ? progresso.cartas
            : [];

        const descobertasCerradex = lerListaSalva("descobertasCerradex");

        const cartas = [...new Set([
            ...cartasProgresso,
            ...descobertasCerradex
        ])];

        return {
            xp: Number(progresso.xp) || 0,
            artigos: Array.isArray(progresso.artigos)
                ? progresso.artigos
                : [],
            cartas: cartas,
            sequencia: Number(progresso.sequencia) || 0
        };
    }

    function obterNomeUsuario() {
        const nomesPossiveis = [
            "nomeUsuario",
            "usuarioNome",
            "nomeGuardiao"
        ];

        for (const chave of nomesPossiveis) {
            const valor = localStorage.getItem(chave);

            if (valor && valor.trim()) {
                return valor.trim();
            }
        }

        return "Guardião do Cerrado";
    }

    function calcularNivel(xp) {
        const xpPorNivel = 100;
        const nivel = Math.floor(xp / xpPorNivel) + 1;
        const xpNoNivel = xp % xpPorNivel;
        const porcentagem = Math.round(
            (xpNoNivel / xpPorNivel) * 100
        );

        return {
            nivel: nivel,
            xpNoNivel: xpNoNivel,
            xpNecessario: xpPorNivel,
            porcentagem: porcentagem
        };
    }

    function renderizarConquistas() {
        if (!gradeConquistas || !totalConquistas || !contadorConquistas) {
            return;
        }

        if (!window.sistemaConquistas) {
            gradeConquistas.innerHTML = "";
            totalConquistas.textContent = "0";
            contadorConquistas.textContent = "0 de 0";
            return;
        }

        window.sistemaConquistas.verificar();

        const conquistas = window.sistemaConquistas.listar();

        const desbloqueadas = conquistas.filter(function (conquista) {
            return conquista.desbloqueada;
        });

        gradeConquistas.innerHTML = "";

        conquistas.forEach(function (conquista) {
            const elemento = document.createElement("article");

            elemento.className = conquista.desbloqueada
                ? "conquista"
                : "conquista bloqueada";

            const areaIcone = document.createElement("div");
            areaIcone.className = "conquista-icone";

            const classeIcone = conquista.desbloqueada
                ? obterClasseIcone(conquista.icone)
                : "fa-lock";

            areaIcone.appendChild(criarIcone(classeIcone));

            const titulo = document.createElement("h3");
            titulo.textContent = conquista.nome;

            const descricao = document.createElement("p");
            descricao.textContent = conquista.descricao;

            const status = document.createElement("span");
            status.className = "conquista-status";

            if (conquista.desbloqueada) {
                status.appendChild(criarIcone("fa-circle-check"));
                status.appendChild(
                    document.createTextNode(" Conquista desbloqueada")
                );
            } else {
                status.appendChild(criarIcone("fa-lock"));
                status.appendChild(
                    document.createTextNode(" Conquista bloqueada")
                );
            }

            elemento.appendChild(areaIcone);
            elemento.appendChild(titulo);
            elemento.appendChild(descricao);
            elemento.appendChild(status);

            gradeConquistas.appendChild(elemento);
        });

        totalConquistas.textContent = desbloqueadas.length;

        contadorConquistas.textContent =
            `${desbloqueadas.length} de ${conquistas.length}`;
    }

    function renderizarPerfil() {
        const progresso = obterDadosProgresso();
        const nivel = calcularNivel(progresso.xp);
        const nome = obterNomeUsuario();

        const cartasValidas = especies.filter(function (especie) {
            return progresso.cartas.includes(especie.id);
        });

        const porcentagemColecao =
            especies.length > 0
                ? Math.round(
                    (cartasValidas.length / especies.length) * 100
                )
                : 0;

        nomeUsuario.textContent = nome;

        seloNivel.textContent = `Nível ${nivel.nivel}`;
        resumoNivel.textContent = `Nível ${nivel.nivel}`;
        nivelAtual.textContent = `Nível ${nivel.nivel}`;

        resumoXP.textContent = `${progresso.xp} XP`;
        xpTotal.textContent = progresso.xp;

        resumoSequencia.textContent =
            `${progresso.sequencia} dias de sequência`;

        sequenciaAtual.textContent =
            progresso.sequencia === 1
                ? "1 dia"
                : `${progresso.sequencia} dias`;

        textoXP.textContent =
            `${nivel.xpNoNivel} de ${nivel.xpNecessario} XP`;

        porcentagemXP.textContent =
            `${nivel.porcentagem}%`;

        barraXP.style.width =
            `${nivel.porcentagem}%`;

        const xpFaltante =
            nivel.xpNecessario - nivel.xpNoNivel;

        mensagemNivel.textContent =
            nivel.xpNoNivel === 0 && progresso.xp > 0
                ? "Novo nível alcançado. Sua jornada continua crescendo."
                : `Faltam ${xpFaltante} XP para o próximo nível.`;

        totalArtigos.textContent =
            progresso.artigos.length;

        totalCartas.textContent =
            cartasValidas.length;

        porcentagemCerradex.textContent =
            `${porcentagemColecao}%`;

        cartasEncontradas.textContent =
            `${cartasValidas.length} de ${especies.length}`;

        barraCerradexPerfil.style.width =
            `${porcentagemColecao}%`;

        renderizarConquistas();
    }

    if (botaoMenu && menu) {
        botaoMenu.addEventListener("click", function () {
            const aberto = menu.classList.toggle("aberto");

            botaoMenu.setAttribute(
                "aria-expanded",
                String(aberto)
            );
        });

        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.remove("aberto");
                botaoMenu.setAttribute("aria-expanded", "false");
            });
        });
    }

    window.addEventListener("storage", renderizarPerfil);

    window.addEventListener(
        "progressoAtualizado",
        renderizarPerfil
    );

    window.addEventListener(
        "conquistaDesbloqueada",
        renderizarPerfil
    );

    renderizarPerfil();
});
