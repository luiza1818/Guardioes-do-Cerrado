const missoes = {
    diarias: [
        {
            id: "diaria-artigo-1",
            titulo: "Leitor do Cerrado",
            descricao: "Leia 1 artigo sobre a fauna, flora ou conservação do Cerrado.",
            tipo: "artigos",
            objetivo: 1,
            recompensa: 20,
            categoria: "leitura",
            dificuldade: "facil"
        },
        {
            id: "diaria-artigo-2",
            titulo: "Dois capítulos de natureza",
            descricao: "Leia 2 artigos durante sua exploração de hoje.",
            tipo: "artigos",
            objetivo: 2,
            recompensa: 35,
            categoria: "leitura",
            dificuldade: "medio"
        },
        {
            id: "diaria-carta-1",
            titulo: "Nova descoberta",
            descricao: "Desbloqueie 1 nova carta no Cerradex.",
            tipo: "cartas",
            objetivo: 1,
            recompensa: 25,
            categoria: "cerradex",
            dificuldade: "facil"
        },
        {
            id: "diaria-carta-2",
            titulo: "Dupla descoberta",
            descricao: "Desbloqueie 2 cartas no Cerradex.",
            tipo: "cartas",
            objetivo: 2,
            recompensa: 40,
            categoria: "cerradex",
            dificuldade: "medio"
        },
        {
            id: "diaria-quiz-1",
            titulo: "Mente curiosa",
            descricao: "Complete 1 quiz sobre o Cerrado.",
            tipo: "quizzesConcluidos",
            objetivo: 1,
            recompensa: 25,
            categoria: "quiz",
            dificuldade: "facil"
        },
        {
            id: "diaria-quiz-2",
            titulo: "Desafio em dobro",
            descricao: "Complete 2 quizzes.",
            tipo: "quizzesConcluidos",
            objetivo: 2,
            recompensa: 45,
            categoria: "quiz",
            dificuldade: "medio"
        },
        {
            id: "diaria-respostas-3",
            titulo: "Resposta certeira",
            descricao: "Acerte 3 perguntas nos quizzes.",
            tipo: "respostasCorretas",
            objetivo: 3,
            recompensa: 20,
            categoria: "quiz",
            dificuldade: "facil"
        },
        {
            id: "diaria-respostas-5",
            titulo: "Olho de pesquisador",
            descricao: "Acerte 5 perguntas nos quizzes.",
            tipo: "respostasCorretas",
            objetivo: 5,
            recompensa: 35,
            categoria: "quiz",
            dificuldade: "medio"
        },
        {
            id: "diaria-xp-50",
            titulo: "Jornada produtiva",
            descricao: "Ganhe 50 XP durante sua exploração.",
            tipo: "xp",
            objetivo: 50,
            recompensa: 25,
            categoria: "especial",
            dificuldade: "facil"
        },
        {
            id: "diaria-sequencia",
            titulo: "Guardião presente",
            descricao: "Mantenha uma sequência de 1 dia de exploração.",
            tipo: "sequencia",
            objetivo: 1,
            recompensa: 20,
            categoria: "especial",
            dificuldade: "facil"
        }
    ],

    semanais: [
        {
            id: "semanal-artigos-3",
            titulo: "Explorador de páginas",
            descricao: "Leia 3 artigos durante a semana.",
            tipo: "artigos",
            objetivo: 3,
            recompensa: 45,
            categoria: "leitura",
            dificuldade: "facil"
        },
        {
            id: "semanal-artigos-5",
            titulo: "Pesquisador do Cerrado",
            descricao: "Leia 5 artigos durante a semana.",
            tipo: "artigos",
            objetivo: 5,
            recompensa: 65,
            categoria: "leitura",
            dificuldade: "medio"
        },
        {
            id: "semanal-artigos-8",
            titulo: "Biblioteca em campo",
            descricao: "Leia 8 artigos durante a semana.",
            tipo: "artigos",
            objetivo: 8,
            recompensa: 100,
            categoria: "leitura",
            dificuldade: "dificil"
        },
        {
            id: "semanal-cartas-3",
            titulo: "Coleção crescente",
            descricao: "Descubra 3 cartas no Cerradex.",
            tipo: "cartas",
            objetivo: 3,
            recompensa: 60,
            categoria: "cerradex",
            dificuldade: "facil"
        },
        {
            id: "semanal-cartas-5",
            titulo: "Explorador da biodiversidade",
            descricao: "Descubra 5 cartas no Cerradex.",
            tipo: "cartas",
            objetivo: 5,
            recompensa: 85,
            categoria: "cerradex",
            dificuldade: "medio"
        },
        {
            id: "semanal-cartas-8",
            titulo: "Colecionador atento",
            descricao: "Descubra 8 cartas no Cerradex.",
            tipo: "cartas",
            objetivo: 8,
            recompensa: 120,
            categoria: "cerradex",
            dificuldade: "dificil"
        },
        {
            id: "semanal-quizzes-3",
            titulo: "Guardião estudioso",
            descricao: "Complete 3 quizzes.",
            tipo: "quizzesConcluidos",
            objetivo: 3,
            recompensa: 80,
            categoria: "quiz",
            dificuldade: "medio"
        },
        {
            id: "semanal-quizzes-5",
            titulo: "Semana de desafios",
            descricao: "Complete 5 quizzes.",
            tipo: "quizzesConcluidos",
            objetivo: 5,
            recompensa: 110,
            categoria: "quiz",
            dificuldade: "dificil"
        },
        {
            id: "semanal-respostas-10",
            titulo: "Especialista do Cerrado",
            descricao: "Acerte 10 perguntas nos quizzes.",
            tipo: "respostasCorretas",
            objetivo: 10,
            recompensa: 90,
            categoria: "quiz",
            dificuldade: "medio"
        },
        {
            id: "semanal-respostas-20",
            titulo: "Conhecimento afiado",
            descricao: "Acerte 20 perguntas nos quizzes.",
            tipo: "respostasCorretas",
            objetivo: 20,
            recompensa: 140,
            categoria: "quiz",
            dificuldade: "dificil"
        },
        {
            id: "semanal-xp-150",
            titulo: "Semana produtiva",
            descricao: "Acumule 150 XP.",
            tipo: "xp",
            objetivo: 150,
            recompensa: 100,
            categoria: "especial",
            dificuldade: "medio"
        },
        {
            id: "semanal-xp-300",
            titulo: "Expedição intensa",
            descricao: "Acumule 300 XP.",
            tipo: "xp",
            objetivo: 300,
            recompensa: 160,
            categoria: "especial",
            dificuldade: "dificil"
        },
        {
            id: "semanal-sequencia-3",
            titulo: "Três dias em campo",
            descricao: "Mantenha uma sequência de 3 dias de exploração.",
            tipo: "sequencia",
            objetivo: 3,
            recompensa: 75,
            categoria: "especial",
            dificuldade: "medio"
        },
        {
            id: "semanal-sequencia-5",
            titulo: "Guardião constante",
            descricao: "Mantenha uma sequência de 5 dias.",
            tipo: "sequencia",
            objetivo: 5,
            recompensa: 120,
            categoria: "especial",
            dificuldade: "dificil"
        },
        {
            id: "semanal-diario-2",
            titulo: "Caderno de expedição",
            descricao: "Complete 2 etapas do Diário de Campo.",
            tipo: "diario",
            objetivo: 2,
            recompensa: 80,
            categoria: "diario",
            dificuldade: "medio"
        }
    ],

    permanentes: [
        {
            id: "permanente-nivel-2",
            titulo: "Guardião iniciante",
            descricao: "Alcance o nível 2.",
            tipo: "nivel",
            objetivo: 2,
            recompensa: 50,
            categoria: "especial",
            dificuldade: "facil"
        },
        {
            id: "permanente-nivel-3",
            titulo: "Explorador do Cerrado",
            descricao: "Alcance o nível 3.",
            tipo: "nivel",
            objetivo: 3,
            recompensa: 80,
            categoria: "especial",
            dificuldade: "facil"
        },
        {
            id: "permanente-nivel-5",
            titulo: "Protetor do Cerrado",
            descricao: "Alcance o nível 5.",
            tipo: "nivel",
            objetivo: 5,
            recompensa: 150,
            categoria: "especial",
            dificuldade: "medio"
        },
        {
            id: "permanente-nivel-8",
            titulo: "Guardião veterano",
            descricao: "Alcance o nível 8.",
            tipo: "nivel",
            objetivo: 8,
            recompensa: 230,
            categoria: "especial",
            dificuldade: "dificil"
        },
        {
            id: "permanente-nivel-10",
            titulo: "Mestre do Cerrado",
            descricao: "Alcance o nível 10.",
            tipo: "nivel",
            objetivo: 10,
            recompensa: 320,
            categoria: "especial",
            dificuldade: "hard"
        },
        {
            id: "permanente-nivel-12",
            titulo: "Lenda das Expedições",
            descricao: "Alcance o nível 12.",
            tipo: "nivel",
            objetivo: 12,
            recompensa: 450,
            categoria: "especial",
            dificuldade: "hard"
        },
        {
            id: "permanente-artigos-5",
            titulo: "Primeiras anotações",
            descricao: "Leia 5 artigos.",
            tipo: "artigos",
            objetivo: 5,
            recompensa: 70,
            categoria: "leitura",
            dificuldade: "facil"
        },
        {
            id: "permanente-artigos-10",
            titulo: "Biblioteca viva",
            descricao: "Leia 10 artigos.",
            tipo: "artigos",
            objetivo: 10,
            recompensa: 120,
            categoria: "leitura",
            dificuldade: "medio"
        },
        {
            id: "permanente-artigos-20",
            titulo: "Pesquisador de campo",
            descricao: "Leia 20 artigos.",
            tipo: "artigos",
            objetivo: 20,
            recompensa: 220,
            categoria: "leitura",
            dificuldade: "dificil"
        },
        {
            id: "permanente-artigos-30",
            titulo: "Arquivo do Guardião",
            descricao: "Leia 30 artigos.",
            tipo: "artigos",
            objetivo: 30,
            recompensa: 320,
            categoria: "leitura",
            dificuldade: "hard"
        },
        {
            id: "permanente-artigos-50",
            titulo: "Enciclopédia do Cerrado",
            descricao: "Leia todos os 50 artigos.",
            tipo: "artigos",
            objetivo: 50,
            recompensa: 500,
            categoria: "leitura",
            dificuldade: "hard"
        },
        {
            id: "permanente-cartas-5",
            titulo: "Primeiras descobertas",
            descricao: "Desbloqueie 5 cartas no Cerradex.",
            tipo: "cartas",
            objetivo: 5,
            recompensa: 75,
            categoria: "cerradex",
            dificuldade: "facil"
        },
        {
            id: "permanente-cartas-10",
            titulo: "Colecionador da natureza",
            descricao: "Desbloqueie 10 cartas no Cerradex.",
            tipo: "cartas",
            objetivo: 10,
            recompensa: 150,
            categoria: "cerradex",
            dificuldade: "medio"
        },
        {
            id: "permanente-cartas-20",
            titulo: "Álbum de expedição",
            descricao: "Desbloqueie 20 cartas no Cerradex.",
            tipo: "cartas",
            objetivo: 20,
            recompensa: 250,
            categoria: "cerradex",
            dificuldade: "dificil"
        },
        {
            id: "permanente-cartas-30",
            titulo: "Naturalista experiente",
            descricao: "Desbloqueie 30 cartas no Cerradex.",
            tipo: "cartas",
            objetivo: 30,
            recompensa: 350,
            categoria: "cerradex",
            dificuldade: "dificil"
        },
        {
            id: "permanente-cartas-40",
            titulo: "Cerradex quase completo",
            descricao: "Desbloqueie 40 cartas no Cerradex.",
            tipo: "cartas",
            objetivo: 40,
            recompensa: 450,
            categoria: "cerradex",
            dificuldade: "hard"
        },
        {
            id: "permanente-cerradex",
            titulo: "Mestre do Cerradex",
            descricao: "Descubra todas as 50 cartas do Cerradex.",
            tipo: "cerradex",
            objetivo: 1,
            recompensa: 650,
            categoria: "cerradex",
            dificuldade: "hard"
        },
        {
            id: "permanente-quizzes-5",
            titulo: "Primeiros desafios",
            descricao: "Complete 5 quizzes.",
            tipo: "quizzesConcluidos",
            objetivo: 5,
            recompensa: 100,
            categoria: "quiz",
            dificuldade: "facil"
        },
        {
            id: "permanente-quizzes-10",
            titulo: "Mente do Cerrado",
            descricao: "Complete 10 quizzes.",
            tipo: "quizzesConcluidos",
            objetivo: 10,
            recompensa: 180,
            categoria: "quiz",
            dificuldade: "medio"
        },
        {
            id: "permanente-quizzes-25",
            titulo: "Guardião dos desafios",
            descricao: "Complete 25 quizzes.",
            tipo: "quizzesConcluidos",
            objetivo: 25,
            recompensa: 320,
            categoria: "quiz",
            dificuldade: "dificil"
        },
        {
            id: "permanente-quizzes-50",
            titulo: "Mestre da Academia",
            descricao: "Complete os 50 quizzes.",
            tipo: "quizzesConcluidos",
            objetivo: 50,
            recompensa: 550,
            categoria: "quiz",
            dificuldade: "hard"
        },
        {
            id: "permanente-respostas-25",
            titulo: "Boa memória",
            descricao: "Acerte 25 perguntas nos quizzes.",
            tipo: "respostasCorretas",
            objetivo: 25,
            recompensa: 130,
            categoria: "quiz",
            dificuldade: "medio"
        },
        {
            id: "permanente-respostas-50",
            titulo: "Conhecimento consolidado",
            descricao: "Acerte 50 perguntas.",
            tipo: "respostasCorretas",
            objetivo: 50,
            recompensa: 220,
            categoria: "quiz",
            dificuldade: "dificil"
        },
        {
            id: "permanente-respostas-100",
            titulo: "Cabeça de pesquisador",
            descricao: "Acerte 100 perguntas.",
            tipo: "respostasCorretas",
            objetivo: 100,
            recompensa: 350,
            categoria: "quiz",
            dificuldade: "hard"
        },
        {
            id: "permanente-xp-500",
            titulo: "Trilha de experiência",
            descricao: "Acumule 500 XP.",
            tipo: "xp",
            objetivo: 500,
            recompensa: 150,
            categoria: "especial",
            dificuldade: "medio"
        },
        {
            id: "permanente-xp-1000",
            titulo: "Defensor experiente",
            descricao: "Acumule 1.000 XP.",
            tipo: "xp",
            objetivo: 1000,
            recompensa: 250,
            categoria: "especial",
            dificuldade: "dificil"
        },
        {
            id: "permanente-xp-2500",
            titulo: "Guardião veterano",
            descricao: "Acumule 2.500 XP.",
            tipo: "xp",
            objetivo: 2500,
            recompensa: 420,
            categoria: "especial",
            dificuldade: "hard"
        },
        {
            id: "permanente-diario-3",
            titulo: "Primeiras páginas de campo",
            descricao: "Complete 3 etapas do Diário de Campo.",
            tipo: "diario",
            objetivo: 3,
            recompensa: 120,
            categoria: "diario",
            dificuldade: "medio"
        },
        {
            id: "permanente-diario-6",
            titulo: "Diário completo",
            descricao: "Complete todas as 6 etapas do Diário de Campo.",
            tipo: "diario",
            objetivo: 6,
            recompensa: 300,
            categoria: "diario",
            dificuldade: "hard"
        },
        {
            id: "permanente-sequencia-7",
            titulo: "Uma semana de exploração",
            descricao: "Mantenha uma sequência de 7 dias.",
            tipo: "sequencia",
            objetivo: 7,
            recompensa: 180,
            categoria: "especial",
            dificuldade: "medio"
        },
        {
            id: "permanente-sequencia-15",
            titulo: "Guardião constante",
            descricao: "Mantenha uma sequência de 15 dias.",
            tipo: "sequencia",
            objetivo: 15,
            recompensa: 320,
            categoria: "especial",
            dificuldade: "dificil"
        },
        {
            id: "permanente-conquistas",
            titulo: "Guardião lendário",
            descricao: "Desbloqueie todas as conquistas disponíveis.",
            tipo: "conquistas",
            objetivo: 1,
            recompensa: 600,
            categoria: "especial",
            dificuldade: "hard"
        }
    ]
};

window.missoes = missoes; 