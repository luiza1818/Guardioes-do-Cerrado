const quizzes = [
    {
        id: "fauna-cerrado",
        titulo: "Fauna do Cerrado",
        descricao: "Animais, hábitos e características das espécies do Cerrado.",
        icone: "🐺",
        dificuldade: "intermediario",
        xp: 50,
        perguntas: [
            {
                pergunta: "Qual destes animais é considerado um dos principais símbolos do Cerrado brasileiro?",
                alternativas: [
                    "Lobo-guará",
                    "Urso-polar",
                    "Leão-africano",
                    "Pinguim-imperador"
                ],
                correta: 0,
                explicacao: "O lobo-guará é um dos animais mais conhecidos do Cerrado e também ajuda na dispersão de sementes."
            },
            {
                pergunta: "Qual animal utiliza uma língua comprida e pegajosa para capturar formigas e cupins?",
                alternativas: [
                    "Onça-pintada",
                    "Tamanduá-bandeira",
                    "Capivara",
                    "Veado-campeiro"
                ],
                correta: 1,
                explicacao: "O tamanduá-bandeira possui uma língua adaptada para capturar formigas e cupins."
            },
            {
                pergunta: "Qual destas aves pode ser encontrada no Cerrado?",
                alternativas: [
                    "Seriema",
                    "Pinguim",
                    "Albatroz",
                    "Papagaio-do-mar"
                ],
                correta: 0,
                explicacao: "A seriema vive principalmente em áreas abertas e é bastante encontrada no Cerrado."
            },
            {
                pergunta: "Qual destas ameaças prejudica diretamente o tamanduá-bandeira?",
                alternativas: [
                    "Nevascas",
                    "Atropelamentos e queimadas",
                    "Congelamento dos rios",
                    "Erupções vulcânicas"
                ],
                correta: 1,
                explicacao: "Atropelamentos, queimadas e perda de habitat estão entre as principais ameaças ao tamanduá-bandeira."
            },
            {
                pergunta: "A alimentação do tamanduá-bandeira é composta principalmente por:",
                alternativas: [
                    "Frutas e sementes",
                    "Formigas e cupins",
                    "Peixes e crustáceos",
                    "Folhas e flores"
                ],
                correta: 1,
                explicacao: "O tamanduá-bandeira é insetívoro e se alimenta principalmente de formigas e cupins."
            }
        ]
    },
    {
        id: "flora-cerrado",
        titulo: "Flora do Cerrado",
        descricao: "Árvores, frutos e adaptações das plantas do bioma.",
        icone: "🌳",
        dificuldade: "intermediario",
        xp: 50,
        perguntas: [
            {
                pergunta: "Qual árvore é conhecida por sua intensa floração amarela durante a estação seca?",
                alternativas: [
                    "Ipê-amarelo",
                    "Pinheiro",
                    "Mangueira",
                    "Araucária"
                ],
                correta: 0,
                explicacao: "O ipê-amarelo floresce durante a estação seca e é um dos grandes símbolos da vegetação brasileira."
            },
            {
                pergunta: "O pequi é:",
                alternativas: [
                    "Uma ave do Cerrado",
                    "Um fruto típico do Cerrado",
                    "Uma espécie de peixe",
                    "Um pequeno mamífero"
                ],
                correta: 1,
                explicacao: "O pequi é um fruto típico do Cerrado, muito utilizado na culinária regional."
            },
            {
                pergunta: "Qual planta do Cerrado é conhecida por usos tradicionais relacionados à sua casca?",
                alternativas: [
                    "Barbatimão",
                    "Coqueiro",
                    "Samambaia",
                    "Pinheiro"
                ],
                correta: 0,
                explicacao: "O barbatimão é uma planta do Cerrado conhecida por usos tradicionais de sua casca."
            },
            {
                pergunta: "O buriti é encontrado com frequência em:",
                alternativas: [
                    "Veredas e áreas úmidas",
                    "Desertos extremamente secos",
                    "Montanhas congeladas",
                    "Regiões cobertas por neve"
                ],
                correta: 0,
                explicacao: "O buriti costuma crescer em veredas, locais úmidos importantes para a conservação da água."
            },
            {
                pergunta: "Muitas plantas do Cerrado possuem raízes profundas para:",
                alternativas: [
                    "Alcançar água em períodos secos",
                    "Evitar a produção de frutos",
                    "Impedir a entrada de insetos",
                    "Diminuir o tamanho das folhas"
                ],
                correta: 0,
                explicacao: "As raízes profundas permitem que as plantas alcancem água armazenada nas camadas inferiores do solo."
            }
        ]
    },
    {
        id: "conservacao-cerrado",
        titulo: "Conservação do Cerrado",
        descricao: "Ameaças, recursos hídricos e proteção ambiental.",
        icone: "🌎",
        dificuldade: "avancado",
        xp: 75,
        perguntas: [
            {
                pergunta: "Qual processo está entre as maiores ameaças atuais ao Cerrado?",
                alternativas: [
                    "Expansão do desmatamento",
                    "Formação de geleiras",
                    "Aumento de vulcões",
                    "Acúmulo permanente de neve"
                ],
                correta: 0,
                explicacao: "O desmatamento e a transformação da vegetação nativa prejudicam habitats, espécies e recursos hídricos."
            },
            {
                pergunta: "Por que a conservação do Cerrado é importante para a biodiversidade?",
                alternativas: [
                    "Porque o bioma abriga numerosas espécies",
                    "Porque não possui animais silvestres",
                    "Porque contém somente uma espécie vegetal",
                    "Porque não apresenta diferentes habitats"
                ],
                correta: 0,
                explicacao: "O Cerrado possui uma grande diversidade de espécies e ambientes naturais."
            },
            {
                pergunta: "A expressão Berço das Águas está relacionada ao Cerrado porque:",
                alternativas: [
                    "O bioma abriga nascentes importantes",
                    "Toda a sua área permanece alagada",
                    "O bioma é formado apenas por praias",
                    "Não existem períodos de seca"
                ],
                correta: 0,
                explicacao: "No Cerrado existem nascentes que alimentam importantes bacias hidrográficas brasileiras."
            },
            {
                pergunta: "Queimadas descontroladas podem provocar:",
                alternativas: [
                    "Perda de habitats e biodiversidade",
                    "Aumento imediato de todas as espécies",
                    "Criação de novos rios",
                    "Fim dos períodos secos"
                ],
                correta: 0,
                explicacao: "Incêndios descontrolados podem destruir habitats, matar animais e prejudicar a recuperação da vegetação."
            },
            {
                pergunta: "Qual atitude contribui para a preservação do Cerrado?",
                alternativas: [
                    "Proteger áreas naturais",
                    "Caçar animais silvestres",
                    "Descartar lixo em nascentes",
                    "Provocar incêndios"
                ],
                correta: 0,
                explicacao: "A proteção das áreas naturais ajuda a conservar espécies, nascentes e paisagens do Cerrado."
            }
        ]
    }
];

window.quizzes = quizzes;

window.buscarQuizPorId = function(id) {
    return quizzes.find(quiz => quiz.id === id);
};

window.buscarQuizzesPorDificuldade = function(dificuldade) {
    if (dificuldade === "todos") {
        return quizzes;
    }

    return quizzes.filter(quiz => quiz.dificuldade === dificuldade);
};

window.pesquisarQuizzes = function(texto) {
    const pesquisa = texto.toLowerCase().trim();

    if (!pesquisa) {
        return quizzes;
    }

    return quizzes.filter(quiz =>
        quiz.titulo.toLowerCase().includes(pesquisa) ||
        quiz.descricao.toLowerCase().includes(pesquisa)
    );
};

window.obterTotalQuizzes = function() {
    return quizzes.length;
};

window.obterTotalPerguntas = function() {
    return quizzes.reduce((total, quiz) => {
        return total + quiz.perguntas.length;
    }, 0);
};