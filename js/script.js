const modalSobre = document.getElementById("modal-sobre");
const abrirSobre = document.getElementById("abrir-sobre");
const abrirSobreSecundario = document.getElementById("abrir-sobre-secundario");
const fecharSobre = document.getElementById("fechar-sobre");
const botaoEntendi = document.getElementById("entendi");
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

function mostrarSobre() {
    modalSobre.classList.add("ativo");
    document.body.classList.add("modal-aberto");
}

function esconderSobre() {
    modalSobre.classList.remove("ativo");
    document.body.classList.remove("modal-aberto");
}

abrirSobre.addEventListener("click", mostrarSobre);
abrirSobreSecundario.addEventListener("click", mostrarSobre);
fecharSobre.addEventListener("click", esconderSobre);
botaoEntendi.addEventListener("click", esconderSobre);

modalSobre.addEventListener("click", function (evento) {
    if (evento.target === modalSobre) {
        esconderSobre();
    }
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        esconderSobre();
    }
});

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("ativo");
});

document.querySelectorAll(".menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("ativo");
    });
});