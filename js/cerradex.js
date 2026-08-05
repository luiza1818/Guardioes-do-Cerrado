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
        document.getElementById(
            "modalIconeAlimentacao"
        );

    const modalTituloAlimentacao =
        document.getElementById(
            "modalTituloAlimentacao"
        );

    const modalAlimentacao =
        document.getElementById("modalAlimentacao");

    const modalImportancia =
        document.getElementById("modalImportancia");

    const modalStatus =
        document.getElementById("modalStatus");

    const botaoArtigoModal =
        document.getElementById("botaoArtigoModal");

    const botaoMenu =
        document.getElementById("botaoMenu");

    const menu =
        document.getElementById("menu");

    let filtroAtual = "todas";
    let pesquisaAtual = "";

    function progressoPadrao() {
        return {
            xp: 0,
            artigos: [],
            cartas: [],
            sequencia: 0,
            quizzesConcluidos: 0,
            respostasCorretas: 0
        };
    }

    function lerProgressoLocal() {
        const nomesPossiveis = [
            "progressoGuardioes",
            "progresso",
            "guardioesProgresso"
        ];

        for (const nome of nomesPossiveis) {
            try {
                const salvo =
                    localStorage.getItem(nome);

                if (salvo) {
                    return JSON.parse(salvo);
                }
            } catch {
                continue;
            }
        }

        return progressoPadrao();
    }

    function obterDadosProgresso() {
        let progresso = progressoPadrao();

        try {
            if (
                typeof window.obterProgresso ===
                "function"
            ) {
                progresso =
                    window.obterProgresso();
            } else if (
                typeof obterProgresso ===
                "function"
            ) {
                progresso =
                    obterProgresso();
            } else {
                progresso =
                    lerProgressoLocal();
            }
        } catch {
            progresso =
                lerProgressoLocal();
        }

        return {
            xp:
                Number(progresso?.xp) || 0,

            artigos:
                Array.isArray(progresso?.artigos)
                    ? progresso.artigos
                    : [],

            cartas:
                Array.isArray(progresso?.cartas)
                    ? progresso.cartas
                    : [],

            sequencia:
                Number(progresso?.sequencia) || 0,

            quizzesConcluidos:
                Number(
                    progresso?.quizzesConcluidos
                ) || 0,

            respostasCorretas:
                Number(
                    progresso?.respostasCorretas
                ) || 0
        };
    }

    function normalizarTexto(texto) {
        return String(texto || "")
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            )
            .toLowerCase()
            .trim();
    }

    function cartaDesbloqueada(
        especie,
        progresso
    ) {
        return progresso.cartas.includes(
            especie.id
        );
    }

    function correspondeAoFiltro(
        especie,
        progresso
    ) {
        const desbloqueada =
            cartaDesbloqueada(
                especie,
                progresso
            );

        const raridade =
            normalizarTexto(
                especie.raridade
            );

        if (filtroAtual === "fauna") {
            return (
                especie.categoria ===
                "fauna"
            );
        }

        if (filtroAtual === "flora") {
            return (
                especie.categoria ===
                "flora"
            );
        }

        if (
            filtroAtual ===
            "descobertas"
        ) {
            return desbloqueada;
        }

        if (
            filtroAtual ===
            "bloqueadas"
        ) {
            return !desbloqueada;
        }

        if (filtroAtual === "raras") {
            return raridade === "rara";
        }

        return true;
    }

    function correspondeAPesquisa(
        especie
    ) {
        const pesquisa =
            normalizarTexto(
                pesquisaAtual
            );

        if (!pesquisa) {
            return true;
        }

        const textoCompleto =
            normalizarTexto(`
                ${especie.nome}
                ${especie.nomeCientifico}
                ${especie.categoria}
                ${especie.raridade}
                ${especie.descricao}
                ${especie.habitat}
                ${especie.alimentacao}
            `);

        return textoCompleto.includes(
            pesquisa
        );
    }

    function obterEspeciesFiltradas(
        progresso
    ) {
        return especies.filter(
            function (especie) {
                return (
                    correspondeAoFiltro(
                        especie,
                        progresso
                    ) &&
                    correspondeAPesquisa(
                        especie
                    )
                );
            }
        );
    }

    function nomeCategoria(categoria) {
        return categoria === "fauna"
            ? "Fauna"
            : "Flora";
    }

    function descobrirEspecie(especie) {
        const progresso =
            obterDadosProgresso();

        if (
            progresso.cartas.includes(
                especie.id
            )
        ) {
            abrirModal(especie, true);
            return;
        }

        if (
            typeof window.descobrirCarta ===
            "function"
        ) {
            window.descobrirCarta(
                especie.id
            );
        } else if (
            typeof descobrirCarta ===
            "function"
        ) {
            descobrirCarta(
                especie.id
            );
        } else {
            console.error(
                "A função descobrirCarta não foi encontrada."
            );
            return;
        }

        renderizarCartas();
        abrirModal(especie, true);
    }

    function criarCarta(
        especie,
        progresso
    ) {
        const desbloqueada =
            cartaDesbloqueada(
                especie,
                progresso
            );

        const carta =
            document.createElement(
                "article"
            );

        carta.className =
            desbloqueada
                ? "carta-cerradex"
                : "carta-cerradex bloqueada";

        carta.dataset.id =
            especie.id;

        const nomeExibido =
            desbloqueada
                ? especie.nome
                : "Espécie misteriosa";

        const descricaoExibida =
            desbloqueada
                ? especie.descricao
                : "Leia o artigo desta espécie para desbloquear sua carta no Cerradex.";

        const iconeExibido =
            desbloqueada
                ? especie.icone
                : "❔";

        const statusExibido =
            desbloqueada
                ? "✓ Carta descoberta"
                : "🔒 Carta bloqueada";

        const textoBotao =
            desbloqueada
                ? "Ver carta"
                : "Descobrir";

        carta.innerHTML = `
            <div class="carta-imagem-cerradex">
                <span>${iconeExibido}</span>

                <small class="selo-carta">
                    ${nomeCategoria(
                        especie.categoria
                    )}
                </small>

                <small class="rarity-carta">
                    ${especie.raridade}
                </small>
            </div>

            <div class="carta-conteudo-cerradex">
                <h3>${nomeExibido}</h3>

                <p>
                    ${descricaoExibida}
                </p>

                <div class="carta-rodape-cerradex">
                    <span
                        class="carta-status-cerradex ${
                            desbloqueada
                                ? ""
                                : "bloqueado"
                        }"
                    >
                        ${statusExibido}
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

        const botaoCarta =
            carta.querySelector(
                ".botao-carta-cerradex"
            );

        botaoCarta.addEventListener(
            "click",
            function () {
                const progressoAtual =
                    obterDadosProgresso();

                const jaDescoberta =
                    cartaDesbloqueada(
                        especie,
                        progressoAtual
                    );

                if (!jaDescoberta) {
                    descobrirEspecie(
                        especie
                    );
                    return;
                }

                abrirModal(
                    especie,
                    true
                );
            }
        );

        return carta;
    }

    function renderizarCartas() {
        if (!gradeCartas) {
            return;
        }

        const progresso =
            obterDadosProgresso();

        const filtradas =
            obterEspeciesFiltradas(
                progresso
            );

        gradeCartas.innerHTML = "";

        filtradas.forEach(
            function (especie) {
                const carta =
                    criarCarta(
                        especie,
                        progresso
                    );

                gradeCartas.appendChild(
                    carta
                );
            }
        );

        if (contadorResultados) {
            contadorResultados.textContent =
                filtradas.length === 1
                    ? "1 espécie encontrada"
                    : `${filtradas.length} espécies encontradas`;
        }

        if (semResultados) {
            semResultados.hidden =
                filtradas.length !== 0;
        }

        atualizarProgresso(
            progresso
        );
    }

    function atualizarProgresso(
        progresso
    ) {
        const descobertas =
            especies.filter(
                function (especie) {
                    return progresso.cartas.includes(
                        especie.id
                    );
                }
            );

        const faunaDescoberta =
            descobertas.filter(
                function (especie) {
                    return (
                        especie.categoria ===
                        "fauna"
                    );
                }
            ).length;

        const floraDescoberta =
            descobertas.filter(
                function (especie) {
                    return (
                        especie.categoria ===
                        "flora"
                    );
                }
            ).length;

        const rarasDescobertas =
            descobertas.filter(
                function (especie) {
                    return (
                        normalizarTexto(
                            especie.raridade
                        ) === "rara"
                    );
                }
            ).length;

        const porcentagem =
            especies.length > 0
                ? Math.round(
                      (
                          descobertas.length /
                          especies.length
                      ) * 100
                  )
                : 0;

        if (textoProgresso) {
            textoProgresso.textContent =
                `${descobertas.length} de ${especies.length} espécies descobertas`;
        }

        if (
            porcentagemProgresso
        ) {
            porcentagemProgresso.textContent =
                `${porcentagem}%`;
        }

        if (barraProgresso) {
            barraProgresso.style.width =
                `${porcentagem}%`;
        }

        if (totalDescobertas) {
            totalDescobertas.textContent =
                descobertas.length;
        }

        if (totalFauna) {
            totalFauna.textContent =
                faunaDescoberta;
        }

        if (totalFlora) {
            totalFlora.textContent =
                floraDescoberta;
        }

        if (totalRaras) {
            totalRaras.textContent =
                rarasDescobertas;
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
                : "❔";

        modalCategoria.textContent =
            nomeCategoria(
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
                : "Esta carta ainda está bloqueada. Leia o artigo para conhecer a espécie e adicioná-la à sua coleção.";

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
            especie.categoria ===
            "flora"
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
                : "🔒 Carta bloqueada";

        botaoArtigoModal.href =
            especie.artigo;

        botaoArtigoModal.classList.remove(
            "desativado"
        );

        modalCarta.classList.add(
            "ativo"
        );

        document.body.style.overflow =
            "hidden";
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

    if (campoPesquisa) {
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
        function (botao) {
            botao.addEventListener(
                "click",
                function () {
                    botoesFiltro.forEach(
                        function (item) {
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

    if (fecharModal) {
        fecharModal.addEventListener(
            "click",
            fecharModalCarta
        );
    }

    if (modalCarta) {
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
                evento.key ===
                "Escape"
            ) {
                fecharModalCarta();
            }
        }
    );

    if (botaoMenu && menu) {
        botaoMenu.addEventListener(
            "click",
            function () {
                menu.classList.toggle(
                    "aberto"
                );
            }
        );
    }

    window.addEventListener(
        "storage",
        renderizarCartas
    );

    window.addEventListener(
        "progressoAtualizado",
        renderizarCartas
    );

    renderizarCartas();
});document.addEventListener("DOMContentLoaded", function () {
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
        document.getElementById(
            "modalIconeAlimentacao"
        );

    const modalTituloAlimentacao =
        document.getElementById(
            "modalTituloAlimentacao"
        );

    const modalAlimentacao =
        document.getElementById("modalAlimentacao");

    const modalImportancia =
        document.getElementById("modalImportancia");

    const modalStatus =
        document.getElementById("modalStatus");

    const botaoArtigoModal =
        document.getElementById("botaoArtigoModal");

    const botaoMenu =
        document.getElementById("botaoMenu");

    const menu =
        document.getElementById("menu");

    let filtroAtual = "todas";
    let pesquisaAtual = "";

    function progressoPadrao() {
        return {
            xp: 0,
            artigos: [],
            cartas: [],
            sequencia: 0,
            quizzesConcluidos: 0,
            respostasCorretas: 0
        };
    }

    function lerProgressoLocal() {
        const nomesPossiveis = [
            "progressoGuardioes",
            "progresso",
            "guardioesProgresso"
        ];

        for (const nome of nomesPossiveis) {
            try {
                const salvo =
                    localStorage.getItem(nome);

                if (salvo) {
                    return JSON.parse(salvo);
                }
            } catch {
                continue;
            }
        }

        return progressoPadrao();
    }

    function obterDadosProgresso() {
        let progresso = progressoPadrao();

        try {
            if (
                typeof window.obterProgresso ===
                "function"
            ) {
                progresso =
                    window.obterProgresso();
            } else if (
                typeof obterProgresso ===
                "function"
            ) {
                progresso =
                    obterProgresso();
            } else {
                progresso =
                    lerProgressoLocal();
            }
        } catch {
            progresso =
                lerProgressoLocal();
        }

        return {
            xp:
                Number(progresso?.xp) || 0,

            artigos:
                Array.isArray(progresso?.artigos)
                    ? progresso.artigos
                    : [],

            cartas:
                Array.isArray(progresso?.cartas)
                    ? progresso.cartas
                    : [],

            sequencia:
                Number(progresso?.sequencia) || 0,

            quizzesConcluidos:
                Number(
                    progresso?.quizzesConcluidos
                ) || 0,

            respostasCorretas:
                Number(
                    progresso?.respostasCorretas
                ) || 0
        };
    }

    function normalizarTexto(texto) {
        return String(texto || "")
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            )
            .toLowerCase()
            .trim();
    }

    function cartaDesbloqueada(
        especie,
        progresso
    ) {
        return progresso.cartas.includes(
            especie.id
        );
    }

    function correspondeAoFiltro(
        especie,
        progresso
    ) {
        const desbloqueada =
            cartaDesbloqueada(
                especie,
                progresso
            );

        const raridade =
            normalizarTexto(
                especie.raridade
            );

        if (filtroAtual === "fauna") {
            return (
                especie.categoria ===
                "fauna"
            );
        }

        if (filtroAtual === "flora") {
            return (
                especie.categoria ===
                "flora"
            );
        }

        if (
            filtroAtual ===
            "descobertas"
        ) {
            return desbloqueada;
        }

        if (
            filtroAtual ===
            "bloqueadas"
        ) {
            return !desbloqueada;
        }

        if (filtroAtual === "raras") {
            return raridade === "rara";
        }

        return true;
    }

    function correspondeAPesquisa(
        especie
    ) {
        const pesquisa =
            normalizarTexto(
                pesquisaAtual
            );

        if (!pesquisa) {
            return true;
        }

        const textoCompleto =
            normalizarTexto(`
                ${especie.nome}
                ${especie.nomeCientifico}
                ${especie.categoria}
                ${especie.raridade}
                ${especie.descricao}
                ${especie.habitat}
                ${especie.alimentacao}
            `);

        return textoCompleto.includes(
            pesquisa
        );
    }

    function obterEspeciesFiltradas(
        progresso
    ) {
        return especies.filter(
            function (especie) {
                return (
                    correspondeAoFiltro(
                        especie,
                        progresso
                    ) &&
                    correspondeAPesquisa(
                        especie
                    )
                );
            }
        );
    }

    function nomeCategoria(categoria) {
        return categoria === "fauna"
            ? "Fauna"
            : "Flora";
    }

    function descobrirEspecie(especie) {
        const progresso =
            obterDadosProgresso();

        if (
            progresso.cartas.includes(
                especie.id
            )
        ) {
            abrirModal(especie, true);
            return;
        }

        if (
            typeof window.descobrirCarta ===
            "function"
        ) {
            window.descobrirCarta(
                especie.id
            );
        } else if (
            typeof descobrirCarta ===
            "function"
        ) {
            descobrirCarta(
                especie.id
            );
        } else {
            console.error(
                "A função descobrirCarta não foi encontrada."
            );
            return;
        }

        renderizarCartas();
        abrirModal(especie, true);
    }

    function criarCarta(
        especie,
        progresso
    ) {
        const desbloqueada =
            cartaDesbloqueada(
                especie,
                progresso
            );

        const carta =
            document.createElement(
                "article"
            );

        carta.className =
            desbloqueada
                ? "carta-cerradex"
                : "carta-cerradex bloqueada";

        carta.dataset.id =
            especie.id;

        const nomeExibido =
            desbloqueada
                ? especie.nome
                : "Espécie misteriosa";

        const descricaoExibida =
            desbloqueada
                ? especie.descricao
                : "Leia o artigo desta espécie para desbloquear sua carta no Cerradex.";

        const iconeExibido =
            desbloqueada
                ? especie.icone
                : "❔";

        const statusExibido =
            desbloqueada
                ? "✓ Carta descoberta"
                : "🔒 Carta bloqueada";

        const textoBotao =
            desbloqueada
                ? "Ver carta"
                : "Descobrir";

        carta.innerHTML = `
            <div class="carta-imagem-cerradex">
                <span>${iconeExibido}</span>

                <small class="selo-carta">
                    ${nomeCategoria(
                        especie.categoria
                    )}
                </small>

                <small class="rarity-carta">
                    ${especie.raridade}
                </small>
            </div>

            <div class="carta-conteudo-cerradex">
                <h3>${nomeExibido}</h3>

                <p>
                    ${descricaoExibida}
                </p>

                <div class="carta-rodape-cerradex">
                    <span
                        class="carta-status-cerradex ${
                            desbloqueada
                                ? ""
                                : "bloqueado"
                        }"
                    >
                        ${statusExibido}
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

        const botaoCarta =
            carta.querySelector(
                ".botao-carta-cerradex"
            );

        botaoCarta.addEventListener(
            "click",
            function () {
                const progressoAtual =
                    obterDadosProgresso();

                const jaDescoberta =
                    cartaDesbloqueada(
                        especie,
                        progressoAtual
                    );

                if (!jaDescoberta) {
                    descobrirEspecie(
                        especie
                    );
                    return;
                }

                abrirModal(
                    especie,
                    true
                );
            }
        );

        return carta;
    }

    function renderizarCartas() {
        if (!gradeCartas) {
            return;
        }

        const progresso =
            obterDadosProgresso();

        const filtradas =
            obterEspeciesFiltradas(
                progresso
            );

        gradeCartas.innerHTML = "";

        filtradas.forEach(
            function (especie) {
                const carta =
                    criarCarta(
                        especie,
                        progresso
                    );

                gradeCartas.appendChild(
                    carta
                );
            }
        );

        if (contadorResultados) {
            contadorResultados.textContent =
                filtradas.length === 1
                    ? "1 espécie encontrada"
                    : `${filtradas.length} espécies encontradas`;
        }

        if (semResultados) {
            semResultados.hidden =
                filtradas.length !== 0;
        }

        atualizarProgresso(
            progresso
        );
    }

    function atualizarProgresso(
        progresso
    ) {
        const descobertas =
            especies.filter(
                function (especie) {
                    return progresso.cartas.includes(
                        especie.id
                    );
                }
            );

        const faunaDescoberta =
            descobertas.filter(
                function (especie) {
                    return (
                        especie.categoria ===
                        "fauna"
                    );
                }
            ).length;

        const floraDescoberta =
            descobertas.filter(
                function (especie) {
                    return (
                        especie.categoria ===
                        "flora"
                    );
                }
            ).length;

        const rarasDescobertas =
            descobertas.filter(
                function (especie) {
                    return (
                        normalizarTexto(
                            especie.raridade
                        ) === "rara"
                    );
                }
            ).length;

        const porcentagem =
            especies.length > 0
                ? Math.round(
                      (
                          descobertas.length /
                          especies.length
                      ) * 100
                  )
                : 0;

        if (textoProgresso) {
            textoProgresso.textContent =
                `${descobertas.length} de ${especies.length} espécies descobertas`;
        }

        if (
            porcentagemProgresso
        ) {
            porcentagemProgresso.textContent =
                `${porcentagem}%`;
        }

        if (barraProgresso) {
            barraProgresso.style.width =
                `${porcentagem}%`;
        }

        if (totalDescobertas) {
            totalDescobertas.textContent =
                descobertas.length;
        }

        if (totalFauna) {
            totalFauna.textContent =
                faunaDescoberta;
        }

        if (totalFlora) {
            totalFlora.textContent =
                floraDescoberta;
        }

        if (totalRaras) {
            totalRaras.textContent =
                rarasDescobertas;
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
                : "❔";

        modalCategoria.textContent =
            nomeCategoria(
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
                : "Esta carta ainda está bloqueada. Leia o artigo para conhecer a espécie e adicioná-la à sua coleção.";

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
            especie.categoria ===
            "flora"
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
                : "🔒 Carta bloqueada";

        botaoArtigoModal.href =
            especie.artigo;

        botaoArtigoModal.classList.remove(
            "desativado"
        );

        modalCarta.classList.add(
            "ativo"
        );

        document.body.style.overflow =
            "hidden";
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

    if (campoPesquisa) {
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
        function (botao) {
            botao.addEventListener(
                "click",
                function () {
                    botoesFiltro.forEach(
                        function (item) {
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

    if (fecharModal) {
        fecharModal.addEventListener(
            "click",
            fecharModalCarta
        );
    }

    if (modalCarta) {
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
                evento.key ===
                "Escape"
            ) {
                fecharModalCarta();
            }
        }
    );

    if (botaoMenu && menu) {
        botaoMenu.addEventListener(
            "click",
            function () {
                menu.classList.toggle(
                    "aberto"
                );
            }
        );
    }

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