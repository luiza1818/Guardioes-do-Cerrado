const missoes = {
    diarias: [
        {
            id: "diaria-artigo",
            titulo: "Leitor do Cerrado",
            descricao: "Leia 1 artigo sobre a fauna ou a flora do Cerrado.",
            tipo: "artigos",
            objetivo: 1,
            recompensa: 20
        },
        {
            id: "diaria-carta",
            titulo: "Nova descoberta",
            descricao: "Descubra 1 nova espécie no Cerradex.",
            tipo: "cartas",
            objetivo: 1,
            recompensa: 20
        },
        {
            id: "diaria-quiz",
            titulo: "Mente curiosa",
            descricao: "Complete 1 quiz sobre o Cerrado.",
            tipo: "quizzesConcluidos",
            objetivo: 1,
            recompensa: 25
        },
        {
            id: "diaria-respostas",
            titulo: "Resposta certeira",
            descricao: "Acerte 3 perguntas nos quizzes.",
            tipo: "respostasCorretas",
            objetivo: 3,
            recompensa: 20
        }
    ],

    semanais: [
        {
            id: "semanal-artigos",
            titulo: "Pesquisador do Cerrado",
            descricao: "Leia 5 artigos durante a semana.",
            tipo: "artigos",
            objetivo: 5,
            recompensa: 60
        },
        {
            id: "semanal-cartas",
            titulo: "Explorador da biodiversidade",
            descricao: "Descubra 4 espécies no Cerradex.",
            tipo: "cartas",
            objetivo: 4,
            recompensa: 70
        },
        {
            id: "semanal-quizzes",
            titulo: "Guardião estudioso",
            descricao: "Complete 3 quizzes durante a semana.",
            tipo: "quizzesConcluidos",
            objetivo: 3,
            recompensa: 80
        },
        {
            id: "semanal-respostas",
            titulo: "Especialista do Cerrado",
            descricao: "Acerte 10 perguntas nos quizzes.",
            tipo: "respostasCorretas",
            objetivo: 10,
            recompensa: 90
        },
        {
            id: "semanal-xp",
            titulo: "Semana produtiva",
            descricao: "Ganhe 150 pontos de experiência.",
            tipo: "xp",
            objetivo: 150,
            recompensa: 100
        }
    ],

    permanentes: [
        {
            id: "permanente-nivel-2",
            titulo: "Guardião iniciante",
            descricao: "Alcance o nível 2.",
            tipo: "nivel",
            objetivo: 2,
            recompensa: 50
        },
        {
            id: "permanente-nivel-5",
            titulo: "Protetor do Cerrado",
            descricao: "Alcance o nível 5.",
            tipo: "nivel",
            objetivo: 5,
            recompensa: 150
        },
        {
            id: "permanente-artigos",
            titulo: "Biblioteca viva",
            descricao: "Leia 10 artigos sobre o Cerrado.",
            tipo: "artigos",
            objetivo: 10,
            recompensa: 120
        },
        {
            id: "permanente-cartas",
            titulo: "Colecionador da natureza",
            descricao: "Descubra 10 espécies no Cerradex.",
            tipo: "cartas",
            objetivo: 10,
            recompensa: 150
        },
        {
            id: "permanente-cerradex",
            titulo: "Mestre do Cerradex",
            descricao: "Descubra todas as espécies disponíveis.",
            tipo: "cerradex",
            objetivo: 1,
            recompensa: 300
        },
        {
            id: "permanente-conquistas",
            titulo: "Guardião lendário",
            descricao: "Desbloqueie todas as conquistas.",
            tipo: "conquistas",
            objetivo: 1,
            recompensa: 300
        },
        {
            id: "permanente-xp",
            titulo: "Defensor experiente",
            descricao: "Acumule 1.000 pontos de experiência.",
            tipo: "xp",
            objetivo: 1000,
            recompensa: 250
        }
    ]
};

window.missoes = missoes;