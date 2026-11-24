(() => {
const configuracoesPadrao = {
    musica: true,
    natureza: true,
    botoes: true,
    animacoes: true,
    folhas: true,
    dicas: true,
    vibracao: true,
    volume: 80
};

const elementos = {
    nomeUsuario:
        document.getElementById("nomeUsuario"),

    emailUsuario:
        document.getElementById("emailUsuario"),

    nivelUsuario:
        document.getElementById("nivelUsuario"),

    xpUsuario:
        document.getElementById("xpUsuario"),

    avatarUsuario:
        document.getElementById("avatarUsuario"),

    musica:
        document.getElementById("musica"),

    natureza:
        document.getElementById("natureza"),

    botoes:
        document.getElementById("botoes"),

    animacoes:
        document.getElementById("animacoes"),

    folhas:
        document.getElementById("folhas"),

    dicas:
        document.getElementById("dicas"),

    vibracao:
        document.getElementById("vibracao"),

    volume:
        document.getElementById("volume"),

    valorVolume:
        document.getElementById("valorVolume"),

    totalArtigos:
        document.getElementById("gestao-totalArtigos"),

    totalDiario:
        document.getElementById("gestao-totalDiario"),

    totalCerradex:
        document.getElementById("gestao-totalCerradex"),

    totalMissoes:
        document.getElementById("gestao-totalMissoes"),

    xpTotal:
        document.getElementById("gestao-xpTotal"),

    btnSalvar:
        document.getElementById("btnSalvar"),

    btnRestaurar:
        document.getElementById("btnRestaurar"),

    btnReiniciar:
        document.getElementById("btnReiniciar"),

    notificacao:
        document.getElementById("gestao-notificacao"),

    botaoMenu:
        document.getElementById("botaoMenu"),

    menuNavegacao:
        document.getElementById("menuNavegacao")
};

function lerJSON(chave, valorPadrao = {}) {

    try {

        const valor =
            JSON.parse(
                Guardioes.storage.getItem(chave)
            );

        if (
            valor === null ||
            valor === undefined
        ) {
            return valorPadrao;
        }

        return valor;

    } catch {

        return valorPadrao;

    }

}

function contarItens(valor) {

    if (Array.isArray(valor)) {
        return valor.length;
    }

    if (
        valor &&
        typeof valor === "object"
    ) {
        return Object.keys(valor).length;
    }

    const numero = Number(valor);

    return Number.isFinite(numero)
        ? numero
        : 0;

}

function obterPrimeiroValor(
    objeto,
    chaves,
    valorPadrao
) {

    for (const chave of chaves) {

        if (
            objeto[chave] !== undefined &&
            objeto[chave] !== null &&
            objeto[chave] !== ""
        ) {
            return objeto[chave];
        }

    }

    return valorPadrao;

}

function obterProgresso() {

    return lerJSON(
        "progresso",
        {}
    );

}

function obterDadosUsuario() {

    const usuario =
        lerJSON(
            "usuario",
            {}
        );

    const usuarioLogado =
        lerJSON(
            "usuarioLogado",
            {}
        );

    const perfil =
        lerJSON(
            "perfilUsuario",
            {}
        );

    const progresso =
        obterProgresso();

    const dados = {
        ...usuario,
        ...usuarioLogado,
        ...perfil,
        ...progresso
    };

    const nome =
        obterPrimeiroValor(
            dados,
            [
                "nome",
                "nomeUsuario",
                "usuario"
            ],
            "Guardião"
        );

    const email =
        obterPrimeiroValor(
            dados,
            [
                "email",
                "gmail"
            ],
            "explorador@cerrado.com"
        );

    const xp =
        Number(
            obterPrimeiroValor(
                dados,
                [
                    "xp",
                    "xpTotal",
                    "experiencia"
                ],
                0
            )
        ) || 0;

    const nivelSalvo =
        Number(
            obterPrimeiroValor(
                dados,
                [
                    "nivel",
                    "level"
                ],
                0
            )
        );

    const nivel =
        nivelSalvo > 0
            ? nivelSalvo
            : Math.floor(xp / 100) + 1;

    const avatar =
        obterPrimeiroValor(
            dados,
            [
                "avatar",
                "foto",
                "imagemPerfil"
            ],
            ""
        );

    return {
        nome,
        email,
        xp,
        nivel,
        avatar
    };

}

function carregarConfiguracoes() {

    const configuracoesSalvas =
        lerJSON(
            "configuracoes",
            {}
        );

    const configuracoes = {
        ...configuracoesPadrao,
        ...configuracoesSalvas
    };

    elementos.musica.checked =
        Boolean(configuracoes.musica);

    elementos.natureza.checked =
        Boolean(configuracoes.natureza);

    elementos.botoes.checked =
        Boolean(configuracoes.botoes);

    elementos.animacoes.checked =
        Boolean(configuracoes.animacoes);

    elementos.folhas.checked =
        Boolean(configuracoes.folhas);

    elementos.dicas.checked =
        Boolean(configuracoes.dicas);

    elementos.vibracao.checked =
        Boolean(configuracoes.vibracao);

    elementos.volume.value =
        Number(configuracoes.volume) || 0;

    atualizarVolume();

    aplicarAnimacoes();

}

function obterConfiguracoesDaTela() {

    return {
        musica:
            elementos.musica.checked,

        natureza:
            elementos.natureza.checked,

        botoes:
            elementos.botoes.checked,

        animacoes:
            elementos.animacoes.checked,

        folhas:
            elementos.folhas.checked,

        dicas:
            elementos.dicas.checked,

        vibracao:
            elementos.vibracao.checked,

        volume:
            Number(
                elementos.volume.value
            )
    };

}

function salvarConfiguracoes(
    mostrarMensagem = false
) {

    const configuracoes =
        obterConfiguracoesDaTela();

    Guardioes.storage.setItem(
        "configuracoes",
        JSON.stringify(configuracoes)
    );

    aplicarAnimacoes();

    if (mostrarMensagem) {

        mostrarNotificacao(
            "Configurações salvas com sucesso."
        );

    }

}

function aplicarAnimacoes() {

    document.body.classList.toggle(
        "sem-animacoes",
        !elementos.animacoes.checked
    );

}

function atualizarVolume() {

    const valor =
        Number(
            elementos.volume.value
        );

    elementos.valorVolume.textContent =
        `${valor}%`;

    elementos.volume.style.background = `
        linear-gradient(
            to right,
            var(--verde) 0%,
            var(--verde) ${valor}%,
            var(--bege-escuro) ${valor}%,
            var(--bege-escuro) 100%
        )
    `;

}

function obterTotalArtigos() {

    const progresso =
        obterProgresso();

    const artigosLidos =
        lerJSON(
            "artigosLidos",
            []
        );

    const artigosConcluidos =
        lerJSON(
            "artigosConcluidos",
            []
        );

    return Math.max(
        contarItens(
            progresso.artigos
        ),

        contarItens(
            progresso.artigosLidos
        ),

        contarItens(
            progresso.artigosConcluidos
        ),

        contarItens(
            artigosLidos
        ),

        contarItens(
            artigosConcluidos
        )
    );

}

function obterTotalDiario() {

    const progresso =
        obterProgresso();

    const diario =
        lerJSON(
            "progressoDiario",
            {}
        );

    return Math.max(
        contarItens(
            progresso.diario
        ),

        contarItens(
            progresso.paginasDiario
        ),

        contarItens(
            progresso.expedicoes
        ),

        contarItens(
            progresso.expedicoesConcluidas
        ),

        contarItens(
            diario.paginas
        ),

        contarItens(
            diario.concluidas
        ),

        contarItens(
            diario.expedicoes
        )
    );

}

function obterTotalCerradex() {
    const progresso = obterProgresso();
    const salvas = lerJSON("descobertasCerradex", []);
    const ids = new Set([...(Array.isArray(progresso.cartas) ? progresso.cartas : []), ...(Array.isArray(salvas) ? salvas : [])]);
    return Array.isArray(window.especies) ? window.especies.filter(e => ids.has(e.id)).length : ids.size;
}
function obterTotalMissoes() {
    const dados = lerJSON("guardioesMissoes", {});
    return ["diarias", "semanais", "permanentes"].reduce((total, grupo) => total + new Set(Array.isArray(dados[grupo]?.concluidas) ? dados[grupo].concluidas : []).size, 0);
}
function carregarEstatisticas() {

    const usuario =
        obterDadosUsuario();

    elementos.totalArtigos.textContent =
        obterTotalArtigos();

    elementos.totalDiario.textContent =
        obterTotalDiario();

    elementos.totalCerradex.textContent =
        obterTotalCerradex();

    elementos.totalMissoes.textContent =
        obterTotalMissoes();

    elementos.xpTotal.textContent =
        usuario.xp;

}

function restaurarConfiguracoes() {

    const confirmar =
        confirm(
            "Deseja restaurar as configurações para o padrão?"
        );

    if (!confirmar) {
        return;
    }

    Guardioes.storage.setItem(
        "configuracoes",
        JSON.stringify(
            configuracoesPadrao
        )
    );

    carregarConfiguracoes();

    mostrarNotificacao(
        "Configurações restauradas."
    );

}

async function reiniciarProgresso() {

    const primeiraConfirmacao =
        confirm(
            "Tem certeza que deseja apagar todo o progresso?"
        );

    if (!primeiraConfirmacao) {
        return;
    }

    const segundaConfirmacao =
        confirm(
            "Essa ação não poderá ser desfeita. Deseja continuar?"
        );

    if (!segundaConfirmacao) {
        return;
    }

    const chavesDoProgresso = [
        "progresso",
        "progressoDiario",
        "artigosLidos",
        "artigosConcluidos",
        "missoes",
        "cerradex",
        "cartasDesbloqueadas",
        "especiesDescobertas",
        "guardioesQuizProgresso",
        "guardioesMissoes",
        "guardioesConquistas",
        "descobertasCerradex",
        "cartasDetalhadas",
        "ultimaVisitaGuardioes",
        "sequenciaGuardiao",
        "xpTotal"
    ];

    chavesDoProgresso.forEach(
        chave => {

            Guardioes.storage.removeItem(
                chave
            );

        }
    );

    carregarEstatisticas();
    try { await Guardioes.flush(); } catch { mostrarNotificacao("Reinício pendente de sincronização. Verifique a conexão.", true); return; }
    mostrarNotificacao("Todo o progresso foi reiniciado.");

    setTimeout(
        () => {

            window.location.href =
                "principal.html";

        },
        1400
    );

}

let tempoNotificacao;

function mostrarNotificacao(
    mensagem,
    erro = false
) {

    clearTimeout(
        tempoNotificacao
    );

    elementos.notificacao.className =
        "gestao-notificacao";

    if (erro) {

        elementos.notificacao
            .classList
            .add("erro");

    }

    elementos.notificacao.innerHTML = `
        <i class="fa-solid ${
            erro
                ? "fa-circle-exclamation"
                : "fa-circle-check"
        }"></i>

        <span>
            ${mensagem}
        </span>
    `;

    requestAnimationFrame(
        () => {

            elementos.notificacao
                .classList
                .add("mostrar");

        }
    );

    tempoNotificacao =
        setTimeout(
            () => {

                elementos.notificacao
                    .classList
                    .remove("mostrar");

            },
            3000
        );

}

function configurarEventos() {

    const caixas = [
        elementos.musica,
        elementos.natureza,
        elementos.botoes,
        elementos.animacoes,
        elementos.folhas,
        elementos.dicas,
        elementos.vibracao
    ];

    caixas.forEach(
        caixa => {

            caixa.addEventListener(
                "change",
                () => {

                    salvarConfiguracoes(
                        false
                    );

                }
            );

        }
    );

    elementos.volume.addEventListener(
        "input",
        () => {

            atualizarVolume();

            salvarConfiguracoes(
                false
            );

        }
    );

    elementos.btnSalvar.addEventListener(
        "click",
        () => {

            salvarConfiguracoes(
                true
            );

        }
    );

    elementos.btnRestaurar.addEventListener(
        "click",
        restaurarConfiguracoes
    );

    elementos.btnReiniciar.addEventListener(
        "click",
        reiniciarProgresso
    );


}

function iniciarPagina() {


    carregarConfiguracoes();

    carregarEstatisticas();

    configurarEventos();
    window.addEventListener("storage", carregarEstatisticas);
    window.addEventListener("progressoAtualizado", carregarEstatisticas);

}

document.addEventListener(
    "guardioes:ready",
    iniciarPagina
);
})();
