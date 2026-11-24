
const progressoPadrao = {
    xp: 0,
    artigos: [],
    cartas: [],
    sequencia: 0,
    quizzesConcluidos: 0,
    respostasCorretas: 0
};

function criarProgressoPadrao() {
    return {
        xp: 0,
        artigos: [],
        cartas: [],
        sequencia: 0,
        quizzesConcluidos: 0,
        respostasCorretas: 0
    };
}

function obterDataHojeBrasilia() {
    const partes = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).formatToParts(new Date());

    const ano = partes.find(p => p.type === 'year').value;
    const mes = partes.find(p => p.type === 'month').value;
    const dia = partes.find(p => p.type === 'day').value;

    return `${ano}-${mes}-${dia}`;
}

function normalizarProgresso(dados) {
    const progresso = dados || criarProgressoPadrao();

    return {
        xp: Number(progresso.xp) || 0,
        artigos: Array.isArray(progresso.artigos) ? progresso.artigos : [],
        cartas: Array.isArray(progresso.cartas) ? progresso.cartas : [],
        sequencia: Number(progresso.sequencia) || 0,
        quizzesConcluidos: Number(progresso.quizzesConcluidos) || 0,
        respostasCorretas: Number(progresso.respostasCorretas) || 0
    };
}

function obterProgresso() {
    try {
        const dadosSalvos = JSON.parse(
            Guardioes.storage.getItem("progresso")
        );

        const dados = normalizarProgresso(dadosSalvos);
        // A sequência é a mesma da tela inicial, sem alterar XP ou outras conquistas.
        const registro = JSON.parse(Guardioes.storage.getItem("sequenciaGuardiao") || "null");
        if (registro && Number.isFinite(Number(registro.dias))) {
            dados.sequencia = Math.max(0, Number(registro.dias));
        }
        return dados;
    } catch {
        return criarProgressoPadrao();
    }
}

function salvarProgresso(progresso) {
    const dadosNormalizados = normalizarProgresso(progresso);

    Guardioes.storage.setItem(
        "progresso",
        JSON.stringify(dadosNormalizados)
    );

    window.dispatchEvent(
        new CustomEvent("progressoAtualizado", {
            detail: dadosNormalizados
        })
    );

    if (
        window.sistemaConquistas &&
        typeof window.sistemaConquistas.verificar === "function"
    ) {
        window.sistemaConquistas.verificar();
    }

    return dadosNormalizados;
}

function adicionarXP(valor) {
    const quantidade = Number(valor);

    if (!Number.isFinite(quantidade) || quantidade <= 0) {
        return false;
    }

    const progresso = obterProgresso();

    progresso.xp += quantidade;
    salvarProgresso(progresso);

    return true;
}

function concluirArtigo(id, xp) {
    if (!id) {
        return false;
    }

    const progresso = obterProgresso();

    if (progresso.artigos.includes(id)) {
        return false;
    }

    progresso.artigos.push(id);

    if (!progresso.cartas.includes(id)) {
        progresso.cartas.push(id);
    }

    const recompensa = Number(xp);

    if (Number.isFinite(recompensa) && recompensa > 0) {
        progresso.xp += recompensa;
    }

    salvarProgresso(progresso);

    return true;
}

function descobrirCarta(id, xp = 0) {
    if (!id) {
        return false;
    }

    const progresso = obterProgresso();

    if (progresso.cartas.includes(id)) {
        return false;
    }

    progresso.cartas.push(id);

    const recompensa = Number(xp);

    if (Number.isFinite(recompensa) && recompensa > 0) {
        progresso.xp += recompensa;
    }

    salvarProgresso(progresso);

    return true;
}

function registrarQuiz(acertos, xp = 0) {
    const progresso = obterProgresso();
    const totalAcertos = Number(acertos);
    const recompensa = Number(xp);

    progresso.quizzesConcluidos += 1;

    if (Number.isFinite(totalAcertos) && totalAcertos > 0) {
        progresso.respostasCorretas += totalAcertos;
    }

    if (Number.isFinite(recompensa) && recompensa > 0) {
        progresso.xp += recompensa;
    }

    salvarProgresso(progresso);

    return true;
}

function atualizarSequencia() {
    return Guardioes.atualizarSequenciaDiaria().dias;
}

function zerarProgresso() {
    Guardioes.storage.removeItem("progresso");
    Guardioes.storage.removeItem("guardioesConquistas");
    Guardioes.storage.removeItem("ultimaVisitaGuardioes");

    const progresso = criarProgressoPadrao();

    window.dispatchEvent(
        new CustomEvent("progressoAtualizado", {
            detail: progresso
        })
    );

    return progresso;
}

window.obterProgresso = obterProgresso;
window.salvarProgresso = salvarProgresso;
window.adicionarXP = adicionarXP;
window.concluirArtigo = concluirArtigo;
window.descobrirCarta = descobrirCarta;
window.registrarQuiz = registrarQuiz;
window.atualizarSequencia = atualizarSequencia;
window.zerarProgresso = zerarProgresso;
