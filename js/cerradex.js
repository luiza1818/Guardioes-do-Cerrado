document.addEventListener("DOMContentLoaded", function () {
    const especies = Array.isArray(window.especies)
        ? window.especies
        : [];

    const gradeCartas =
        document.getElementById("gradeCartas");

    const campoPesquisa =
        document.getElementById("campoPesquisa");

    const botoesFiltro =
        document.querySelectorAll(".filtro-cerradex");

    const contadorResultados =
        document.getElementById("contadorResultados");

    const semResultados =
        document.getElementById("semResultados");

    const textoProgresso =
        document.getElementById("textoProgresso");

    const porcentagemProgresso =
        document.getElementById("porcentagemProgresso");

    const barraProgresso =
        document.getElementById("barraProgresso");

    const totalDescobertas =
        document.getElementById("totalDescobertas");

    const totalFauna =
        document.getElementById("totalFauna");

    const totalFlora =
        document.getElementById("totalFlora");

    const totalRaras =
        document.getElementById("totalRaras");

    const modalCarta =
        document.getElementById("modalCarta");

    const fecharModal =
        document.getElementById("fecharModal");

    const modalIcone =
        document.getElementById("modalIcone");

    const modalCategoria =
        document.getElementById("modalCategoria");

    const modalNome =
        document.getElementById("modalNome");

    const modalRaridade =
        document.getElementById("modalRaridade");

    const modalDescricao =
        document.getElementById("modalDescricao");

    const modalHabitat =
        document.getElementById("modalHabitat");

    const modalIconeAlimentacao =
        document.getElementById("modalIconeAlimentacao");

    const modalTituloAlimentacao =
        document.getElementById("modalTituloAlimentacao");

    const modalAlimentacao =
        document.getElementById("modalAlimentacao");

    const modalImportancia =
        document.getElementById("modalImportancia");

    const modalCuriosidade =
        document.getElementById("modalCuriosidade");

    const modalStatus =
        document.getElementById("modalStatus");

    const botaoArtigoModal =
        document.getElementById("botaoArtigoModal");

    let filtroAtual = "todas";
    let pesquisaAtual = "";

    function normalizarTexto(texto) {
        return String(texto || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }

    function obterProgressoPrincipal() {
        try {
            if (
                typeof window.obterProgresso === "function"
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
            nivel: 1,
            artigos: []
        };
    }

    function obterProgressoQuizzes() {
        try {
            const salvo =
                JSON.parse(
                    localStorage.getItem(
                        "guardioesQuizProgresso"
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
                            : {}
                };
            }
        } catch (erro) {
        }

        return {
            concluidos: [],
            resultados: {}
        };
    }

    function obterDescobertasSalvas() {
        try {
            const salvo =
                JSON.parse(
                    localStorage.getItem(
                        "descobertasCerradex"
                    )
                );

            return Array.isArray(salvo)
                ? salvo
                : [];
        } catch (erro) {
            return [];
        }
    }

    function salvarDescobertas(lista) {
        const unicas =
            [...new Set(lista)];

        localStorage.setItem(
            "descobertasCerradex",
            JSON.stringify(unicas)
        );
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
                    typeof nivel === "number" &&
                    nivel > 0
                ) {
                    return nivel;
                }

                if (
                    nivel &&
                    typeof nivel.nivel === "number"
                ) {
                    return nivel.nivel;
                }
            } catch (erro) {
            }
        }

        if (
            typeof progresso.nivel === "number" &&
            progresso.nivel > 0
        ) {
            return progresso.nivel;
        }

        const xp =
            Number(progresso.xp) || 0;

        return Math.floor(xp / 100) + 1;
    }

    function artigoConcluido(id) {
        if (!id) {
            return false;
        }

        const progresso =
            obterProgressoPrincipal();

        const artigos =
            Array.isArray(progresso.artigos)
                ? progresso.artigos
                : [];

        return artigos.includes(id);
    }

    function quizConcluido(id) {
        if (!id) {
            return false;
        }

        const progressoQuiz =
            obterProgressoQuizzes();

        return progressoQuiz.concluidos.includes(
            id
        );
    }

    function regraFoiCumprida(especie) {
        const regra =
            especie.desbloqueio;

        if (!regra) {
            return false;
        }

        if (
            regra.tipo === "artigoQuiz"
        ) {
            return (
                artigoConcluido(
                    regra.artigoId
                ) &&
                quizConcluido(
                    regra.quizId
                )
            );
        }

        if (
            regra.tipo === "nivel"
        ) {
            return (
                obterNivelAtual() >=
                Number(regra.nivel)
            );
        }

        if (
            regra.tipo === "artigoQuizNivel"
        ) {
            return (
                artigoConcluido(
                    regra.artigoId
                ) &&
                quizConcluido(
                    regra.quizId
                ) &&
                obterNivelAtual() >=
                    Number(regra.nivel)
            );
        }

        return false;
    }

    function sincronizarDesbloqueios() {
        const descobertas =
            obterDescobertasSalvas();

        let alterou = false;

        especies.forEach(especie => {
            if (
                regraFoiCumprida(especie) &&
                !descobertas.includes(
                    especie.id
                )
            ) {
                descobertas.push(
                    especie.id
                );

                alterou = true;
            }
        });

        if (alterou) {
            salvarDescobertas(
                descobertas
            );
        }

        return descobertas;
    }

    function cartaDesbloqueada(especie) {
        const descobertas =
            sincronizarDesbloqueios();

        return descobertas.includes(
            especie.id
        );
    }

    function obterNomeCategoria(categoria) {
        if (categoria === "fauna") {
            return "Fauna";
        }

        if (categoria === "flora") {
            return "Flora";
        }

        return "Cerrado";
    }

    function obterClasseRaridade(raridade) {
        const valor =
            normalizarTexto(
                raridade
            );

        if (valor === "comum") {
            return "comum";
        }

        if (valor === "incomum") {
            return "incomum";
        }

        if (valor === "rara") {
            return "rara";
        }

        if (valor === "lendaria") {
            return "lendaria";
        }

        return "comum";
    }

    function obterTextoRequisito(especie) {
        const regra =
            especie.desbloqueio;

        if (!regra) {
            return "Continue explorando para descobrir esta carta.";
        }

        if (
            regra.tipo === "artigoQuiz"
        ) {
            const artigoOk =
                artigoConcluido(
                    regra.artigoId
                );

            const quizOk =
                quizConcluido(
                    regra.quizId
                );

            if (!artigoOk) {
                return "📖 Leia o artigo correspondente para começar esta descoberta.";
            }

            if (!quizOk) {
                return "🧠 Artigo concluído. Agora complete o quiz correspondente.";
            }

            return "✓ Requisitos concluídos.";
        }

        if (
            regra.tipo === "nivel"
        ) {
            const nivelAtual =
                obterNivelAtual();

            return `⭐ Alcance o nível ${regra.nivel}. Seu nível atual é ${nivelAtual}.`;
        }

        if (
            regra.tipo === "artigoQuizNivel"
        ) {
            const artigoOk =
                artigoConcluido(
                    regra.artigoId
                );

            const quizOk =
                quizConcluido(
                    regra.quizId
                );

            const nivelAtual =
                obterNivelAtual();

            if (!artigoOk) {
                return "📖 Leia primeiro o artigo desta espécie.";
            }

            if (!quizOk) {
                return "🧠 Complete o quiz correspondente.";
            }

            if (
                nivelAtual <
                Number(regra.nivel)
            ) {
                return `⭐ Alcance o nível ${regra.nivel}. Seu nível atual é ${nivelAtual}.`;
            }

            return "✓ Todos os requisitos foram concluídos.";
        }

        return "Continue sua jornada para descobrir esta carta.";
    }

    function correspondeFiltro(especie) {
        const desbloqueada =
            cartaDesbloqueada(
                especie
            );

        const raridade =
            normalizarTexto(
                especie.raridade
            );

        if (
            filtroAtual === "fauna"
        ) {
            return (
                especie.categoria === "fauna"
            );
        }

        if (
            filtroAtual === "flora"
        ) {
            return (
                especie.categoria === "flora"
            );
        }

        if (
            filtroAtual === "descobertas"
        ) {
            return desbloqueada;
        }

        if (
            filtroAtual === "bloqueadas"
        ) {
            return !desbloqueada;
        }

        if (
            filtroAtual === "raras"
        ) {
            return (
                raridade === "rara" ||
                raridade === "lendaria"
            );
        }

        return true;
    }

    function correspondePesquisa(especie) {
        const pesquisa =
            normalizarTexto(
                pesquisaAtual
            );

        if (!pesquisa) {
            return true;
        }

        const texto =
            normalizarTexto(`
                ${especie.nome}
                ${especie.nomeCientifico}
                ${especie.categoria}
                ${especie.raridade}
                ${especie.descricao}
                ${especie.habitat}
                ${especie.alimentacao}
                ${especie.importancia}
                ${especie.curiosidade}
            `);

        return texto.includes(
            pesquisa
        );
    }

    function obterEspeciesFiltradas() {
        return especies.filter(
            especie =>
                correspondeFiltro(
                    especie
                ) &&
                correspondePesquisa(
                    especie
                )
        );
    }

    function criarCarta(especie) {
        const desbloqueada =
            cartaDesbloqueada(
                especie
            );

        const carta =
            document.createElement(
                "article"
            );

        const classeRaridade =
            obterClasseRaridade(
                especie.raridade
            );

        carta.className =
            desbloqueada
                ? `carta-cerradex ${classeRaridade}`
                : "carta-cerradex bloqueada";

        carta.dataset.id =
            especie.id;

        const nome =
            desbloqueada
                ? especie.nome
                : "???";

        const nomeCientifico =
            desbloqueada
                ? especie.nomeCientifico
                : "Espécie ainda não identificada";

        const icone =
            desbloqueada
                ? especie.icone
                : "🔒";

        const descricao =
            desbloqueada
                ? especie.descricao
                : obterTextoRequisito(
                      especie
                  );

        const status =
            desbloqueada
                ? "✓ Descoberta"
                : "🔒 Bloqueada";

        const textoBotao =
            desbloqueada
                ? "Ver carta"
                : "Ver requisito";

        carta.innerHTML = `
            <div class="carta-imagem-cerradex">

                <span class="icone-especie">
                    ${icone}
                </span>

                <small class="selo-carta">
                    ${obterNomeCategoria(
                        especie.categoria
                    )}
                </small>

                <small class="rarity-carta ${classeRaridade}">
                    ${especie.raridade}
                </small>

            </div>

            <div class="carta-conteudo-cerradex">

                <h3>
                    ${nome}
                </h3>

                <span class="nome-cientifico">
                    ${nomeCientifico}
                </span>

                <p>
                    ${descricao}
                </p>

                <div class="carta-rodape-cerradex">

                    <span
                        class="carta-status-cerradex ${
                            desbloqueada
                                ? ""
                                : "bloqueado"
                        }"
                    >
                        ${status}
                    </span>

                    <button
                        type="button"
                        class="botao-carta-cerradex"
                    >
                        ${textoBotao}
                    </button>

                </div>

            </div>
        `;

        const botao =
            carta.querySelector(
                ".botao-carta-cerradex"
            );

        botao.addEventListener(
            "click",
            function () {
                abrirModal(
                    especie,
                    cartaDesbloqueada(
                        especie
                    )
                );
            }
        );

        return carta;
    }

    function renderizarCartas() {
        if (!gradeCartas) {
            return;
        }

        sincronizarDesbloqueios();

        const filtradas =
            obterEspeciesFiltradas();

        gradeCartas.innerHTML = "";

        filtradas.forEach(
            especie => {
                gradeCartas.appendChild(
                    criarCarta(
                        especie
                    )
                );
            }
        );

        if (
            contadorResultados
        ) {
            contadorResultados.textContent =
                filtradas.length === 1
                    ? "1 carta encontrada"
                    : `${filtradas.length} cartas encontradas`;
        }

        if (
            semResultados
        ) {
            semResultados.hidden =
                filtradas.length > 0;
        }

        atualizarProgresso();
    }

    function atualizarProgresso() {
        const descobertasSalvas =
            sincronizarDesbloqueios();

        const descobertas =
            especies.filter(
                especie =>
                    descobertasSalvas.includes(
                        especie.id
                    )
            );

        const fauna =
            descobertas.filter(
                especie =>
                    especie.categoria === "fauna"
            ).length;

        const flora =
            descobertas.filter(
                especie =>
                    especie.categoria === "flora"
            ).length;

        const raras =
            descobertas.filter(
                especie => {
                    const raridade =
                        normalizarTexto(
                            especie.raridade
                        );

                    return (
                        raridade === "rara" ||
                        raridade === "lendaria"
                    );
                }
            ).length;

        const porcentagem =
            especies.length
                ? Math.round(
                      (
                          descobertas.length /
                          especies.length
                      ) * 100
                  )
                : 0;

        if (
            textoProgresso
        ) {
            textoProgresso.textContent =
                `${descobertas.length} de ${especies.length} cartas descobertas`;
        }

        if (
            porcentagemProgresso
        ) {
            porcentagemProgresso.textContent =
                `${porcentagem}%`;
        }

        if (
            barraProgresso
        ) {
            barraProgresso.style.width =
                `${porcentagem}%`;
        }

        if (
            totalDescobertas
        ) {
            totalDescobertas.textContent =
                descobertas.length;
        }

        if (
            totalFauna
        ) {
            totalFauna.textContent =
                fauna;
        }

        if (
            totalFlora
        ) {
            totalFlora.textContent =
                flora;
        }

        if (
            totalRaras
        ) {
            totalRaras.textContent =
                raras;
        }
    }

    function abrirModal(
        especie,
        desbloqueada
    ) {
        if (!modalCarta) {
            return;
        }

        modalIcone.textContent =
            desbloqueada
                ? especie.icone
                : "🔒";

        modalCategoria.textContent =
            obterNomeCategoria(
                especie.categoria
            );

        modalNome.textContent =
            desbloqueada
                ? especie.nome
                : "Espécie misteriosa";

        modalRaridade.textContent =
            especie.raridade;

        modalDescricao.textContent =
            desbloqueada
                ? especie.descricao
                : obterTextoRequisito(
                      especie
                  );

        modalHabitat.textContent =
            desbloqueada
                ? especie.habitat
                : "Informação ainda não descoberta.";

        modalAlimentacao.textContent =
            desbloqueada
                ? especie.alimentacao
                : "Informação ainda não descoberta.";

        modalImportancia.textContent =
            desbloqueada
                ? especie.importancia
                : "Informação ainda não descoberta.";

        if (
            modalCuriosidade
        ) {
            modalCuriosidade.textContent =
                desbloqueada
                    ? especie.curiosidade ||
                      "Continue explorando para descobrir mais."
                    : "Esta curiosidade será revelada quando a carta for desbloqueada.";
        }

        if (
            especie.categoria === "flora"
        ) {
            modalIconeAlimentacao.textContent =
                "☀️";

            modalTituloAlimentacao.textContent =
                "Nutrição";
        } else {
            modalIconeAlimentacao.textContent =
                "🍽️";

            modalTituloAlimentacao.textContent =
                "Alimentação";
        }

        modalStatus.textContent =
            desbloqueada
                ? "✓ Carta descoberta"
                : obterTextoRequisito(
                      especie
                  );

        configurarBotaoModal(
            especie,
            desbloqueada
        );

        modalCarta.classList.add(
            "ativo"
        );

        document.body.style.overflow =
            "hidden";
    }

    function configurarBotaoModal(
        especie,
        desbloqueada
    ) {
        if (!botaoArtigoModal) {
            return;
        }

        botaoArtigoModal.classList.remove(
            "desativado"
        );

        if (
            especie.artigoId
        ) {
            botaoArtigoModal.href =
                `artigo.html?id=${especie.artigoId}`;

            if (desbloqueada) {
                botaoArtigoModal.textContent =
                    "📖 Rever artigo";
            } else {
                const regra =
                    especie.desbloqueio;

                if (
                    regra &&
                    regra.tipo ===
                        "artigoQuiz"
                ) {
                    if (
                        artigoConcluido(
                            regra.artigoId
                        ) &&
                        !quizConcluido(
                            regra.quizId
                        )
                    ) {
                        botaoArtigoModal.href =
                            "quizzes.html";

                        botaoArtigoModal.textContent =
                            "🧠 Ir para os quizzes";
                    } else {
                        botaoArtigoModal.textContent =
                            "📖 Ir para o artigo";
                    }
                } else {
                    botaoArtigoModal.textContent =
                        "📖 Ir para o artigo";
                }
            }

            return;
        }

        const regra =
            especie.desbloqueio;

        if (
            regra &&
            regra.tipo === "nivel"
        ) {
            botaoArtigoModal.removeAttribute(
                "href"
            );

            botaoArtigoModal.textContent =
                `⭐ Nível ${regra.nivel}`;

            botaoArtigoModal.classList.add(
                "desativado"
            );

            return;
        }

        if (
            especie.artigo
        ) {
            botaoArtigoModal.href =
                especie.artigo;

            botaoArtigoModal.textContent =
                "📖 Ler artigo";

            return;
        }

        botaoArtigoModal.removeAttribute(
            "href"
        );

        botaoArtigoModal.textContent =
            "🔒 Continue explorando";

        botaoArtigoModal.classList.add(
            "desativado"
        );
    }

    function fecharModalCarta() {
        if (!modalCarta) {
            return;
        }

        modalCarta.classList.remove(
            "ativo"
        );

        document.body.style.overflow =
            "";
    }

    if (
        campoPesquisa
    ) {
        campoPesquisa.addEventListener(
            "input",
            function () {
                pesquisaAtual =
                    campoPesquisa.value;

                renderizarCartas();
            }
        );
    }

    botoesFiltro.forEach(
        botao => {
            botao.addEventListener(
                "click",
                function () {
                    botoesFiltro.forEach(
                        item => {
                            item.classList.remove(
                                "ativo"
                            );
                        }
                    );

                    botao.classList.add(
                        "ativo"
                    );

                    filtroAtual =
                        botao.dataset.filtro ||
                        "todas";

                    renderizarCartas();
                }
            );
        }
    );

    if (
        fecharModal
    ) {
        fecharModal.addEventListener(
            "click",
            fecharModalCarta
        );
    }

    if (
        modalCarta
    ) {
        modalCarta.addEventListener(
            "click",
            function (evento) {
                if (
                    evento.target ===
                    modalCarta
                ) {
                    fecharModalCarta();
                }
            }
        );
    }

    document.addEventListener(
        "keydown",
        function (evento) {
            if (
                evento.key === "Escape"
            ) {
                fecharModalCarta();
            }
        }
    );

    window.addEventListener(
        "storage",
        renderizarCartas
    );

    window.addEventListener(
        "progressoAtualizado",
        renderizarCartas
    );

    renderizarCartas();
});