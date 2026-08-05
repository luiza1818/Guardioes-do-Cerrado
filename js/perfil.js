document.addEventListener("DOMContentLoaded", function () {
    const especies = Array.isArray(window.especies)
        ? window.especies
        : [];

    const nomeUsuario = document.getElementById("nomeUsuario");
    const seloNivel = document.getElementById("seloNivel");
    const resumoNivel = document.getElementById("resumoNivel");
    const resumoXP = document.getElementById("resumoXP");
    const resumoSequencia = document.getElementById(
        "resumoSequencia"
    );
    const nivelAtual = document.getElementById("nivelAtual");
    const textoXP = document.getElementById("textoXP");
    const porcentagemXP = document.getElementById(
        "porcentagemXP"
    );
    const barraXP = document.getElementById("barraXP");
    const mensagemNivel = document.getElementById(
        "mensagemNivel"
    );
    const sequenciaAtual = document.getElementById(
        "sequenciaAtual"
    );
    const totalArtigos = document.getElementById(
        "totalArtigos"
    );
    const totalCartas = document.getElementById("totalCartas");
    const xpTotal = document.getElementById("xpTotal");
    const totalConquistas = document.getElementById(
        "totalConquistas"
    );
    const contadorConquistas = document.getElementById(
        "contadorConquistas"
    );
    const gradeConquistas = document.getElementById(
        "gradeConquistas"
    );
    const porcentagemCerradex = document.getElementById(
        "porcentagemCerradex"
    );
    const cartasEncontradas = document.getElementById(
        "cartasEncontradas"
    );
    const barraCerradexPerfil = document.getElementById(
        "barraCerradexPerfil"
    );
    const botaoMenu = document.getElementById("botaoMenu");
    const menu = document.getElementById("menu");

    function progressoPadrao() {
        return {
            xp: 0,
            artigos: [],
            cartas: [],
            sequencia: 0
        };
    }

    function obterDadosProgresso() {
        let progresso = progressoPadrao();

        try {
            if (typeof window.obterProgresso === "function") {
                progresso = window.obterProgresso();
            } else if (
                typeof obterProgresso === "function"
            ) {
                progresso = obterProgresso();
            }
        } catch {
            progresso = progressoPadrao();
        }

        return {
            xp: Number(progresso?.xp) || 0,
            artigos: Array.isArray(progresso?.artigos)
                ? progresso.artigos
                : [],
            cartas: Array.isArray(progresso?.cartas)
                ? progresso.cartas
                : [],
            sequencia: Number(progresso?.sequencia) || 0
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
        if (!window.sistemaConquistas) {
            gradeConquistas.innerHTML = "";
            totalConquistas.textContent = "0";
            contadorConquistas.textContent = "0 de 0";
            return;
        }

        window.sistemaConquistas.verificar();

        const conquistas =
            window.sistemaConquistas.listar();

        const desbloqueadas = conquistas.filter(
            function (conquista) {
                return conquista.desbloqueada;
            }
        );

        gradeConquistas.innerHTML = "";

        conquistas.forEach(function (conquista) {
            const elemento = document.createElement("article");

            elemento.className = conquista.desbloqueada
                ? "conquista"
                : "conquista bloqueada";

            elemento.innerHTML = `
                <div class="conquista-icone">
                    ${
                        conquista.desbloqueada
                            ? conquista.icone
                            : "🔒"
                    }
                </div>

                <h3>${conquista.nome}</h3>

                <p>${conquista.descricao}</p>

                <span class="conquista-status">
                    ${
                        conquista.desbloqueada
                            ? "✓ Conquista desbloqueada"
                            : "Conquista bloqueada"
                    }
                </span>
            `;

            gradeConquistas.appendChild(elemento);
        });

        totalConquistas.textContent =
            desbloqueadas.length;

        contadorConquistas.textContent =
            `${desbloqueadas.length} de ${conquistas.length}`;
    }

    function renderizarPerfil() {
        const progresso = obterDadosProgresso();
        const nivel = calcularNivel(progresso.xp);
        const nome = obterNomeUsuario();

        const cartasValidas = especies.filter(
            function (especie) {
                return progresso.cartas.includes(especie.id);
            }
        );

        const porcentagemColecao =
            especies.length > 0
                ? Math.round(
                    (
                        cartasValidas.length /
                        especies.length
                    ) * 100
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
            menu.classList.toggle("aberto");
        });
    }

    window.addEventListener(
        "storage",
        renderizarPerfil
    );

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