function carregarTemaGlobal() {
    let configuracoes = {};

    try {
        configuracoes = JSON.parse(
            localStorage.getItem("configuracoes")
        ) || {};
    } catch {
        configuracoes = {};
    }

    const tema = configuracoes.tema || "claro";

    document.body.classList.toggle(
        "tema-escuro",
        tema === "escuro"
    );

    document.documentElement.setAttribute(
        "data-tema",
        tema
    );
}

document.addEventListener(
    "DOMContentLoaded",
    carregarTemaGlobal
);

window.addEventListener("storage", evento => {
    if (evento.key === "configuracoes") {
        carregarTemaGlobal();
    }
});