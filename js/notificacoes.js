function criarContainer() {

    if (document.getElementById("containerNotificacoes")) {
        return;
    }

    const container = document.createElement("div");
    container.id = "containerNotificacoes";

    document.body.appendChild(container);

}

function mostrarNotificacao(titulo, mensagem) {

    criarContainer();

    const container =
        document.getElementById("containerNotificacoes");

    const card = document.createElement("div");

    card.className = "notificacao";

    card.innerHTML = `
        <h4>${titulo}</h4>
        <p>${mensagem}</p>
    `;

    container.appendChild(card);

    setTimeout(() => {

        card.classList.add("saindo");

        setTimeout(() => {

            card.remove();

        },400);

    },3500);

}

window.addEventListener(
    "missaoConcluida",
    evento => {

        mostrarNotificacao(
            "🎯 Missão concluída",
            `${evento.detail.titulo} (+${evento.detail.recompensa} XP)`
        );

    }
);

window.addEventListener(
    "conquistaDesbloqueada",
    evento => {

        mostrarNotificacao(
            "🏆 Nova conquista",
            evento.detail.titulo
        );

    }
);

window.addEventListener(
    "progressoAtualizado",
    () => {

    }
);