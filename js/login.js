const btnEntrar = document.getElementById("btnEntrar");
const btnCadastrar = document.getElementById("btnCadastrar");

const login = document.getElementById("login");
const cadastro = document.getElementById("cadastro");

btnEntrar.addEventListener("click", () => {

    btnEntrar.classList.add("ativo");
    btnCadastrar.classList.remove("ativo");

    login.style.display = "flex";
    cadastro.style.display = "none";

});

btnCadastrar.addEventListener("click", () => {

    btnCadastrar.classList.add("ativo");
    btnEntrar.classList.remove("ativo");

    login.style.display = "none";
    cadastro.style.display = "flex";

});
login.addEventListener("submit", (evento) => {
    evento.preventDefault();

    window.location.href = "principal.html";
});
cadastro.addEventListener("submit", (evento) => {
    evento.preventDefault();

    window.location.href = "principal.html";
});