const quizzes = [
    {
        id: "quiz-lobo-guara",
        artigoId: "lobo-guara",
        titulo: "O Guardião de Pernas Longas",
        descricao: "Teste o que você aprendeu sobre o lobo-guará e sua função no Cerrado.",
        icone: "🐺",
        dificuldade: "facil",
        xp: 30,
        descoberta: {
            id: "lobo-guara",
            nome: "Lobo-guará",
            tipo: "Fauna",
            icone: "🐺",
            raridade: "Rara"
        },
        perguntas: [
            {
                pergunta: "Qual característica ajuda o lobo-guará a caminhar entre a vegetação alta do Cerrado?",
                alternativas: [
                    "Pernas longas",
                    "Cauda curta",
                    "Patas com membranas",
                    "Asas largas"
                ],
                correta: 0,
                explicacao: "As pernas longas facilitam o deslocamento do lobo-guará por campos e áreas com vegetação alta."
            },
            {
                pergunta: "A alimentação do lobo-guará é melhor classificada como:",
                alternativas: [
                    "Somente carnívora",
                    "Somente herbívora",
                    "Onívora",
                    "Exclusivamente insetívora"
                ],
                correta: 2,
                explicacao: "Ele consome pequenos animais e também muitos frutos, sendo considerado onívoro."
            },
            {
                pergunta: "Por que o lobo-guará também pode ajudar as plantas do Cerrado?",
                alternativas: [
                    "Porque transporta sementes após consumir frutos",
                    "Porque constrói ninhos para árvores",
                    "Porque produz pólen",
                    "Porque enterra todas as frutas que encontra"
                ],
                correta: 0,
                explicacao: "Ao consumir frutos e eliminar sementes em outros locais, ele contribui para a dispersão vegetal."
            }
        ]
    },
    {
        id: "quiz-tamandua-bandeira",
        artigoId: "tamandua-bandeira",
        titulo: "Mestre dos Cupinzeiros",
        descricao: "Descubra quanto você lembra sobre o tamanduá-bandeira.",
        icone: "🐾",
        dificuldade: "facil",
        xp: 30,
        descoberta: {
            id: "tamandua-bandeira",
            nome: "Tamanduá-bandeira",
            tipo: "Fauna",
            icone: "🐾",
            raridade: "Rara"
        },
        perguntas: [
            {
                pergunta: "Qual é a principal alimentação do tamanduá-bandeira?",
                alternativas: [
                    "Peixes",
                    "Formigas e cupins",
                    "Frutos grandes",
                    "Folhas"
                ],
                correta: 1,
                explicacao: "Sua alimentação é formada principalmente por formigas e cupins."
            },
            {
                pergunta: "Que estrutura ajuda o tamanduá a acessar colônias de insetos?",
                alternativas: [
                    "Grandes garras",
                    "Chifres",
                    "Nadadeiras",
                    "Bico"
                ],
                correta: 0,
                explicacao: "Suas fortes garras dianteiras ajudam a abrir formigueiros e cupinzeiros."
            },
            {
                pergunta: "Qual afirmação sobre seus dentes está correta?",
                alternativas: [
                    "Possui dentes muito grandes",
                    "Possui apenas dois dentes",
                    "Não possui dentes",
                    "Possui dentes venenosos"
                ],
                correta: 2,
                explicacao: "O tamanduá-bandeira não possui dentes e captura insetos com sua língua especializada."
            }
        ]
    },
    {
        id: "quiz-onca-pintada",
        artigoId: "onca-pintada",
        titulo: "Predadora de Topo",
        descricao: "Teste seu conhecimento sobre uma das maiores predadoras das Américas.",
        icone: "🐆",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "onca-pintada",
            nome: "Onça-pintada",
            tipo: "Fauna",
            icone: "🐆",
            raridade: "Lendária"
        },
        perguntas: [
            {
                pergunta: "Por que a onça-pintada é considerada uma predadora de topo?",
                alternativas: [
                    "Porque se alimenta exclusivamente de plantas",
                    "Porque ocupa uma posição elevada nas cadeias alimentares",
                    "Porque vive apenas no alto das árvores",
                    "Porque não possui predadores naturais em nenhuma fase da vida"
                ],
                correta: 1,
                explicacao: "Predadores de topo ocupam posições elevadas nas redes alimentares e influenciam populações de outras espécies."
            },
            {
                pergunta: "A proteção da onça-pintada pode beneficiar outras espécies porque:",
                alternativas: [
                    "Ela transforma todas as áreas em floresta",
                    "Sua conservação exige grandes áreas de habitat preservado",
                    "Ela transporta todos os animais para regiões seguras",
                    "Ela impede qualquer competição entre espécies"
                ],
                correta: 1,
                explicacao: "Ao conservar extensas áreas necessárias à onça, muitos outros organismos também são protegidos."
            },
            {
                pergunta: "Qual característica visual ajuda a reconhecer a onça-pintada?",
                alternativas: [
                    "Pelagem com rosetas",
                    "Penas amarelas",
                    "Escamas verdes",
                    "Listras azuis"
                ],
                correta: 0,
                explicacao: "Sua pelagem apresenta manchas organizadas em padrões semelhantes a rosetas."
            }
        ]
    },
    {
        id: "quiz-tatu-canastra",
        artigoId: "tatu-canastra",
        titulo: "Engenheiro Subterrâneo",
        descricao: "Descubra por que as tocas do tatu-canastra são tão importantes.",
        icone: "🐾",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "tatu-canastra",
            nome: "Tatu-canastra",
            tipo: "Fauna",
            icone: "🐾",
            raridade: "Rara"
        },
        perguntas: [
            {
                pergunta: "Por que o tatu-canastra pode ser chamado de engenheiro do ecossistema?",
                alternativas: [
                    "Porque modifica o ambiente ao cavar grandes tocas",
                    "Porque constrói barragens de madeira",
                    "Porque planta árvores intencionalmente",
                    "Porque produz o próprio alimento"
                ],
                correta: 0,
                explicacao: "Suas escavações alteram fisicamente o ambiente e criam estruturas utilizadas por outros animais."
            },
            {
                pergunta: "As tocas abandonadas pelo tatu-canastra podem servir principalmente como:",
                alternativas: [
                    "Abrigo para outras espécies",
                    "Lagos permanentes",
                    "Locais de produção de pólen",
                    "Fontes de alimento vegetal"
                ],
                correta: 0,
                explicacao: "Diversos animais podem usar essas cavidades como abrigo e local de descanso."
            },
            {
                pergunta: "Sua alimentação inclui principalmente:",
                alternativas: [
                    "Formigas e cupins",
                    "Grandes mamíferos",
                    "Peixes",
                    "Folhas de árvores altas"
                ],
                correta: 0,
                explicacao: "Formigas e cupins fazem parte importante da dieta do tatu-canastra."
            }
        ]
    },
    {
        id: "quiz-seriema",
        artigoId: "seriema",
        titulo: "A Voz dos Campos",
        descricao: "Conheça melhor a ave cujo canto atravessa as paisagens abertas.",
        icone: "🐦",
        dificuldade: "facil",
        xp: 30,
        descoberta: {
            id: "seriema",
            nome: "Seriema",
            tipo: "Fauna",
            icone: "🐦",
            raridade: "Comum"
        },
        perguntas: [
            {
                pergunta: "A seriema passa grande parte do tempo:",
                alternativas: [
                    "Caminhando pelo solo",
                    "Mergulhando em rios",
                    "Vivendo debaixo da terra",
                    "Nadando em lagos"
                ],
                correta: 0,
                explicacao: "A seriema é bastante terrestre e costuma caminhar pelas áreas abertas."
            },
            {
                pergunta: "Uma característica marcante da seriema é:",
                alternativas: [
                    "Seu canto forte",
                    "Sua ausência de pernas",
                    "Sua pelagem espessa",
                    "Seu hábito exclusivamente aquático"
                ],
                correta: 0,
                explicacao: "Seu canto pode ser ouvido a grandes distâncias."
            },
            {
                pergunta: "Em qual ambiente ela é frequentemente encontrada?",
                alternativas: [
                    "Campos e áreas abertas",
                    "Regiões polares",
                    "Recifes de coral",
                    "Oceanos profundos"
                ],
                correta: 0,
                explicacao: "A espécie utiliza principalmente ambientes abertos."
            }
        ]
    },
    {
        id: "quiz-ema",
        artigoId: "ema",
        titulo: "Corredora dos Campos",
        descricao: "Teste seus conhecimentos sobre uma das maiores aves sul-americanas.",
        icone: "🪶",
        dificuldade: "facil",
        xp: 30,
        descoberta: {
            id: "ema",
            nome: "Ema",
            tipo: "Fauna",
            icone: "🪶",
            raridade: "Incomum"
        },
        perguntas: [
            {
                pergunta: "Embora possua asas, a ema:",
                alternativas: [
                    "Não consegue voar",
                    "Voa durante a noite",
                    "Só voa sobre rios",
                    "Voa apenas quando jovem"
                ],
                correta: 0,
                explicacao: "A ema é uma ave não voadora, mas possui pernas fortes para correr."
            },
            {
                pergunta: "Sua dieta é:",
                alternativas: [
                    "Variada",
                    "Somente de peixes",
                    "Somente de néctar",
                    "Exclusivamente de folhas"
                ],
                correta: 0,
                explicacao: "A ema consome materiais vegetais e também pequenos animais."
            },
            {
                pergunta: "Qual comportamento reprodutivo chama atenção nessa espécie?",
                alternativas: [
                    "Os machos participam dos cuidados com ovos e filhotes",
                    "Os ovos ficam sempre dentro da água",
                    "Não existem cuidados parentais",
                    "Somente outros animais cuidam dos ovos"
                ],
                correta: 0,
                explicacao: "Os machos têm participação importante na incubação e proteção dos filhotes."
            }
        ]
    },
    {
        id: "quiz-arara-caninde",
        artigoId: "arara-caninde",
        titulo: "As Cores do Céu",
        descricao: "Descubra como a arara-canindé participa da dinâmica do Cerrado.",
        icone: "🦜",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "arara-caninde",
            nome: "Arara-canindé",
            tipo: "Fauna",
            icone: "🦜",
            raridade: "Incomum"
        },
        perguntas: [
            {
                pergunta: "O bico forte da arara-canindé é especialmente útil para:",
                alternativas: [
                    "Quebrar sementes e frutos resistentes",
                    "Respirar debaixo d'água",
                    "Escavar túneis profundos",
                    "Produzir veneno"
                ],
                correta: 0,
                explicacao: "Seu bico permite manipular frutos, sementes e estruturas resistentes."
            },
            {
                pergunta: "A relação da arara com frutos pode beneficiar a vegetação porque:",
                alternativas: [
                    "Ela pode transportar sementes",
                    "Ela impede a germinação",
                    "Ela destrói todas as árvores jovens",
                    "Ela transforma sementes em folhas"
                ],
                correta: 0,
                explicacao: "O transporte e descarte de sementes pode contribuir para a dispersão vegetal."
            },
            {
                pergunta: "Qual combinação de cores é marcante na arara-canindé?",
                alternativas: [
                    "Azul e amarelo",
                    "Preto e branco",
                    "Roxo e cinza",
                    "Vermelho e preto apenas"
                ],
                correta: 0,
                explicacao: "A combinação azul e amarela é uma das características mais reconhecidas da espécie."
            }
        ]
    },
    {
        id: "quiz-veado-campeiro",
        artigoId: "veado-campeiro",
        titulo: "Velocidade nos Campos",
        descricao: "Teste seus conhecimentos sobre o veado-campeiro.",
        icone: "🦌",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "veado-campeiro",
            nome: "Veado-campeiro",
            tipo: "Fauna",
            icone: "🦌",
            raridade: "Rara"
        },
        perguntas: [
            {
                pergunta: "O veado-campeiro apresenta adaptações especialmente adequadas a:",
                alternativas: [
                    "Paisagens abertas",
                    "Oceanos profundos",
                    "Cavernas permanentemente escuras",
                    "Regiões glaciais"
                ],
                correta: 0,
                explicacao: "Seu corpo e comportamento estão ligados a campos e savanas abertas."
            },
            {
                pergunta: "Sua alimentação é principalmente:",
                alternativas: [
                    "Vegetal",
                    "Carnívora",
                    "Exclusivamente de insetos",
                    "Exclusivamente aquática"
                ],
                correta: 0,
                explicacao: "O veado-campeiro é herbívoro."
            },
            {
                pergunta: "Ao consumir plantas, esse animal:",
                alternativas: [
                    "Também influencia a dinâmica da vegetação",
                    "Deixa de participar do ecossistema",
                    "Passa a produzir fotossíntese",
                    "Elimina todas as plantas do ambiente"
                ],
                correta: 0,
                explicacao: "Herbívoros também influenciam a estrutura e dinâmica das comunidades vegetais."
            }
        ]
    },
    {
        id: "quiz-anta",
        artigoId: "anta",
        titulo: "Jardineira das Florestas",
        descricao: "Entenda por que a anta tem papel importante na dispersão de sementes.",
        icone: "🐾",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "anta",
            nome: "Anta",
            tipo: "Fauna",
            icone: "🐾",
            raridade: "Rara"
        },
        perguntas: [
            {
                pergunta: "A anta recebe o apelido de jardineira das florestas principalmente porque:",
                alternativas: [
                    "Transporta sementes após consumir frutos",
                    "Constrói jardins artificiais",
                    "Produz sementes dentro do corpo",
                    "Enterra árvores adultas"
                ],
                correta: 0,
                explicacao: "Frutos consumidos pela anta podem ter suas sementes transportadas por grandes distâncias."
            },
            {
                pergunta: "A alimentação da anta é predominantemente:",
                alternativas: [
                    "Herbívora",
                    "Carnívora",
                    "Insetívora",
                    "Piscívora"
                ],
                correta: 0,
                explicacao: "Folhas, brotos e frutos compõem sua alimentação."
            },
            {
                pergunta: "Qual habilidade também é característica da anta?",
                alternativas: [
                    "Nadar",
                    "Voar",
                    "Produzir teias",
                    "Respirar exclusivamente por brânquias"
                ],
                correta: 0,
                explicacao: "A anta é uma excelente nadadora e utiliza ambientes próximos à água."
            }
        ]
    },
    {
        id: "quiz-macaco-prego",
        artigoId: "macaco-prego",
        titulo: "Inteligência na Mata",
        descricao: "Investigue a inteligência e o comportamento do macaco-prego.",
        icone: "🐒",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "macaco-prego",
            nome: "Macaco-prego",
            tipo: "Fauna",
            icone: "🐒",
            raridade: "Incomum"
        },
        perguntas: [
            {
                pergunta: "O uso de pedras por algumas populações de macacos-prego demonstra principalmente:",
                alternativas: [
                    "Capacidade de utilizar ferramentas para solucionar problemas",
                    "Dependência total de seres humanos",
                    "Ausência de aprendizagem social",
                    "Incapacidade de manipular objetos"
                ],
                correta: 0,
                explicacao: "O uso de ferramentas evidencia capacidades cognitivas e comportamentos complexos."
            },
            {
                pergunta: "Ao consumir frutos e deslocar-se por diferentes áreas, o macaco-prego pode:",
                alternativas: [
                    "Participar da dispersão de sementes",
                    "Interromper completamente a reprodução vegetal",
                    "Eliminar a necessidade de polinizadores",
                    "Transformar frutos em minerais"
                ],
                correta: 0,
                explicacao: "O consumo de frutos permite que sementes sejam transportadas para outros locais."
            },
            {
                pergunta: "A vida em grupos sociais pode favorecer:",
                alternativas: [
                    "Interações, aprendizagem e cooperação",
                    "O isolamento completo entre indivíduos",
                    "A ausência de comunicação",
                    "A eliminação de qualquer competição"
                ],
                correta: 0,
                explicacao: "Grupos sociais oferecem oportunidades de interação e transmissão de comportamentos."
            }
        ]
    },
    {
        id: "quiz-raposa-do-campo",
        artigoId: "raposa-do-campo",
        titulo: "Caçadora dos Campos",
        descricao: "Teste o que aprendeu sobre um pequeno canídeo brasileiro.",
        icone: "🦊",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "raposa-do-campo",
            nome: "Raposa-do-campo",
            tipo: "Fauna",
            icone: "🦊",
            raridade: "Incomum"
        },
        perguntas: [
            {
                pergunta: "A raposa-do-campo está fortemente associada a:",
                alternativas: [
                    "Ambientes abertos",
                    "Recifes marinhos",
                    "Ambientes polares",
                    "Florestas permanentemente inundadas"
                ],
                correta: 0,
                explicacao: "A espécie está particularmente relacionada a campos e outras paisagens abertas."
            },
            {
                pergunta: "Sua dieta pode incluir:",
                alternativas: [
                    "Insetos, pequenos vertebrados e frutos",
                    "Somente folhas",
                    "Somente grandes mamíferos",
                    "Somente peixes"
                ],
                correta: 0,
                explicacao: "A raposa-do-campo possui dieta variada."
            },
            {
                pergunta: "Em relação ao lobo-guará, a raposa-do-campo é:",
                alternativas: [
                    "Menor",
                    "Sempre maior",
                    "Uma ave",
                    "Uma planta"
                ],
                correta: 0,
                explicacao: "A raposa-do-campo possui porte significativamente menor."
            }
        ]
    },
    {
        id: "quiz-gato-palheiro",
        artigoId: "gato-palheiro",
        titulo: "Felino dos Campos",
        descricao: "Um desafio sobre um dos felinos mais discretos do Cerrado.",
        icone: "🐈",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "gato-palheiro",
            nome: "Gato-palheiro",
            tipo: "Fauna",
            icone: "🐈",
            raridade: "Rara"
        },
        perguntas: [
            {
                pergunta: "Dentro das relações ecológicas, o gato-palheiro exerce principalmente o papel de:",
                alternativas: [
                    "Predador de pequenos vertebrados",
                    "Produtor fotossintetizante",
                    "Decompositor de madeira",
                    "Polinizador exclusivo"
                ],
                correta: 0,
                explicacao: "Como felino, ele atua como predador de pequenos animais."
            },
            {
                pergunta: "Sua presença em campos demonstra que:",
                alternativas: [
                    "Ambientes abertos também sustentam predadores especializados",
                    "A biodiversidade existe apenas em florestas densas",
                    "Campos são biologicamente vazios",
                    "Felinos só sobrevivem em árvores"
                ],
                correta: 0,
                explicacao: "Campos naturais possuem comunidades complexas, incluindo pequenos predadores."
            },
            {
                pergunta: "Por ser discreto, o gato-palheiro:",
                alternativas: [
                    "Pode ser difícil de observar e estudar",
                    "Não possui importância ecológica",
                    "Não interage com nenhuma espécie",
                    "Não utiliza habitat natural"
                ],
                correta: 0,
                explicacao: "Espécies discretas podem exigir métodos especiais de monitoramento."
            }
        ]
    },
    {
        id: "quiz-coruja-buraqueira",
        artigoId: "coruja-buraqueira",
        titulo: "Sentinela do Chão",
        descricao: "Descubra quanto você sabe sobre a coruja-buraqueira.",
        icone: "🦉",
        dificuldade: "facil",
        xp: 30,
        descoberta: {
            id: "coruja-buraqueira",
            nome: "Coruja-buraqueira",
            tipo: "Fauna",
            icone: "🦉",
            raridade: "Comum"
        },
        perguntas: [
            {
                pergunta: "Onde a coruja-buraqueira costuma utilizar como abrigo?",
                alternativas: [
                    "Cavidades no solo",
                    "Recifes",
                    "Copas oceânicas",
                    "Geleiras"
                ],
                correta: 0,
                explicacao: "Ela utiliza buracos e cavidades no solo."
            },
            {
                pergunta: "A coruja-buraqueira pode ser observada:",
                alternativas: [
                    "Também durante o dia",
                    "Somente debaixo d'água",
                    "Somente durante eclipses",
                    "Apenas em regiões nevadas"
                ],
                correta: 0,
                explicacao: "Ela pode permanecer ativa e visível durante períodos claros."
            },
            {
                pergunta: "Sua alimentação ajuda a controlar:",
                alternativas: [
                    "Insetos e pequenos vertebrados",
                    "Somente árvores",
                    "Rios",
                    "A quantidade de chuva"
                ],
                correta: 0,
                explicacao: "Sua predação participa do controle de pequenos organismos."
            }
        ]
    },
    {
        id: "quiz-tucano-toco",
        artigoId: "tucano-toco",
        titulo: "O Grande Bico",
        descricao: "Um desafio sobre o tucano-toco e sua relação com os frutos.",
        icone: "🐦",
        dificuldade: "facil",
        xp: 30,
        descoberta: {
            id: "tucano-toco",
            nome: "Tucano-toco",
            tipo: "Fauna",
            icone: "🐦",
            raridade: "Incomum"
        },
        perguntas: [
            {
                pergunta: "Qual estrutura é mais marcante no tucano-toco?",
                alternativas: [
                    "Grande bico",
                    "Chifres",
                    "Nadadeiras",
                    "Casco"
                ],
                correta: 0,
                explicacao: "Seu grande bico alaranjado é uma das características mais reconhecidas."
            },
            {
                pergunta: "Frutos representam:",
                alternativas: [
                    "Parte importante de sua alimentação",
                    "Algo que nunca consome",
                    "Seu único abrigo",
                    "Um tipo de predador"
                ],
                correta: 0,
                explicacao: "O tucano-toco é um importante consumidor de frutos."
            },
            {
                pergunta: "Ao transportar sementes, ele pode:",
                alternativas: [
                    "Contribuir para a regeneração vegetal",
                    "Interromper a fotossíntese",
                    "Eliminar todas as plantas",
                    "Produzir novas espécies instantaneamente"
                ],
                correta: 0,
                explicacao: "A dispersão de sementes favorece a colonização e regeneração de áreas."
            }
        ]
    },
    {
        id: "quiz-sucuri",
        artigoId: "sucuri",
        titulo: "Gigante das Águas",
        descricao: "Teste seu conhecimento sobre uma das grandes serpentes sul-americanas.",
        icone: "🐍",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "sucuri",
            nome: "Sucuri",
            tipo: "Fauna",
            icone: "🐍",
            raridade: "Rara"
        },
        perguntas: [
            {
                pergunta: "A forte associação da sucuri com ambientes aquáticos favorece principalmente:",
                alternativas: [
                    "Sua locomoção e estratégias de captura próximas à água",
                    "A realização de fotossíntese",
                    "A construção de ninhos em árvores altas",
                    "A produção de frutos"
                ],
                correta: 0,
                explicacao: "A espécie é excelente nadadora e utiliza ambientes aquáticos para deslocamento e caça."
            },
            {
                pergunta: "A sucuri captura suas presas sem depender de:",
                alternativas: [
                    "Veneno",
                    "Musculatura",
                    "Camuflagem",
                    "Ambiente"
                ],
                correta: 0,
                explicacao: "Sucuris não utilizam veneno como mecanismo principal de captura."
            },
            {
                pergunta: "Como predadora, sua presença:",
                alternativas: [
                    "Integra as cadeias alimentares e regula populações de presas",
                    "Elimina toda a biodiversidade",
                    "Impede qualquer competição ecológica",
                    "Transforma rios em ambientes terrestres"
                ],
                correta: 0,
                explicacao: "Predadores participam da regulação das populações e do equilíbrio das redes alimentares."
            }
        ]
    },
    {
        id: "quiz-ipe-amarelo",
        artigoId: "ipe-amarelo",
        titulo: "Ouro na Estação Seca",
        descricao: "Teste o que aprendeu sobre a floração do ipê-amarelo.",
        icone: "🌼",
        dificuldade: "facil",
        xp: 30,
        descoberta: {
            id: "ipe-amarelo",
            nome: "Ipê-amarelo",
            tipo: "Flora",
            icone: "🌼",
            raridade: "Incomum"
        },
        perguntas: [
            {
                pergunta: "Qual é a cor característica das flores do ipê-amarelo?",
                alternativas: [
                    "Amarela",
                    "Azul",
                    "Preta",
                    "Cinza"
                ],
                correta: 0,
                explicacao: "A floração amarela é justamente a origem de seu nome popular."
            },
            {
                pergunta: "Sua floração pode ocorrer quando a árvore está:",
                alternativas: [
                    "Com poucas folhas",
                    "Totalmente submersa",
                    "Coberta de neve",
                    "Sem raízes"
                ],
                correta: 0,
                explicacao: "A perda de folhas pode tornar a floração ainda mais evidente."
            },
            {
                pergunta: "As flores podem oferecer recursos principalmente para:",
                alternativas: [
                    "Polinizadores",
                    "Rochas",
                    "Rios",
                    "Nuvens"
                ],
                correta: 0,
                explicacao: "Flores fornecem recursos como néctar e pólen a diferentes visitantes."
            }
        ]
    },
    {
        id: "quiz-pequi",
        artigoId: "pequi",
        titulo: "Fruto de Cultura e Cerrado",
        descricao: "Conheça melhor a importância ecológica e cultural do pequi.",
        icone: "🟡",
        dificuldade: "facil",
        xp: 30,
        descoberta: {
            id: "pequi",
            nome: "Pequi",
            tipo: "Flora",
            icone: "🟡",
            raridade: "Comum"
        },
        perguntas: [
            {
                pergunta: "O pequi é:",
                alternativas: [
                    "Um fruto do Cerrado",
                    "Um mamífero",
                    "Uma ave",
                    "Uma rocha"
                ],
                correta: 0,
                explicacao: "O pequi é o fruto do pequizeiro."
            },
            {
                pergunta: "Além da importância ecológica, ele possui forte valor:",
                alternativas: [
                    "Cultural e econômico",
                    "Glacial",
                    "Vulcânico",
                    "Marinho"
                ],
                correta: 0,
                explicacao: "O pequi faz parte da culinária, cultura e economia de diversas comunidades."
            },
            {
                pergunta: "O caroço do pequi exige cuidado porque apresenta:",
                alternativas: [
                    "Pequenos espinhos",
                    "Veneno líquido",
                    "Gelo",
                    "Brânquias"
                ],
                correta: 0,
                explicacao: "O caroço possui numerosos espinhos pequenos."
            }
        ]
    },
    {
        id: "quiz-barbatimao",
        artigoId: "barbatimao",
        titulo: "Saberes do Barbatimão",
        descricao: "Um desafio sobre uma planta conhecida em práticas tradicionais.",
        icone: "🌿",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "barbatimao",
            nome: "Barbatimão",
            tipo: "Flora",
            icone: "🌿",
            raridade: "Incomum"
        },
        perguntas: [
            {
                pergunta: "A casca do barbatimão é conhecida pela presença de:",
                alternativas: [
                    "Taninos",
                    "Clorofila azul",
                    "Sal marinho",
                    "Calcário puro"
                ],
                correta: 0,
                explicacao: "A concentração de taninos está relacionada ao interesse tradicional e científico pela planta."
            },
            {
                pergunta: "Retirar casca de forma inadequada pode:",
                alternativas: [
                    "Prejudicar a árvore",
                    "Aumentar indefinidamente seu crescimento",
                    "Transformá-la em outra espécie",
                    "Eliminar sua necessidade de água"
                ],
                correta: 0,
                explicacao: "A exploração excessiva pode lesionar o indivíduo e comprometer sua sobrevivência."
            },
            {
                pergunta: "O barbatimão também demonstra que a conservação envolve:",
                alternativas: [
                    "Natureza, cultura e conhecimento",
                    "Apenas aparência das plantas",
                    "Somente espécies animais",
                    "Apenas áreas urbanas"
                ],
                correta: 0,
                explicacao: "Espécies vegetais também carregam valor cultural, científico e ecológico."
            }
        ]
    },
    {
        id: "quiz-buriti",
        artigoId: "buriti",
        titulo: "Palmeira das Veredas",
        descricao: "Teste seus conhecimentos sobre o buriti e a água no Cerrado.",
        icone: "🌴",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "buriti",
            nome: "Buriti",
            tipo: "Flora",
            icone: "🌴",
            raridade: "Incomum"
        },
        perguntas: [
            {
                pergunta: "A presença de buritis costuma indicar:",
                alternativas: [
                    "Ambientes com maior disponibilidade de água",
                    "Desertos extremamente secos",
                    "Áreas congeladas",
                    "Recifes de coral"
                ],
                correta: 0,
                explicacao: "O buriti está fortemente associado a veredas e áreas úmidas."
            },
            {
                pergunta: "Seus frutos podem:",
                alternativas: [
                    "Alimentar animais e seres humanos",
                    "Ser consumidos apenas por peixes",
                    "Eliminar a germinação vegetal",
                    "Substituir a água do solo"
                ],
                correta: 0,
                explicacao: "Os frutos do buriti possuem importância ecológica e também podem ser aproveitados por pessoas."
            },
            {
                pergunta: "Proteger buritis sem proteger as veredas ao redor seria insuficiente porque:",
                alternativas: [
                    "A espécie depende das condições hídricas desse ambiente",
                    "Buritis não possuem raízes",
                    "Veredas não contêm água",
                    "A planta vive apenas em rochas"
                ],
                correta: 0,
                explicacao: "A conservação de uma espécie também depende da manutenção do ecossistema onde ela vive."
            }
        ]
    },
    {
        id: "quiz-cagaita",
        artigoId: "cagaita",
        titulo: "Fruto Nativo",
        descricao: "Conheça melhor a cagaiteira e sua relação com a fauna.",
        icone: "🍈",
        dificuldade: "facil",
        xp: 30,
        descoberta: {
            id: "cagaita",
            nome: "Cagaita",
            tipo: "Flora",
            icone: "🍈",
            raridade: "Comum"
        },
        perguntas: [
            {
                pergunta: "A cagaita é um fruto:",
                alternativas: [
                    "Nativo do Cerrado",
                    "Exclusivamente europeu",
                    "Marinho",
                    "Produzido por fungos"
                ],
                correta: 0,
                explicacao: "A cagaiteira é uma espécie nativa do Cerrado."
            },
            {
                pergunta: "Seus frutos podem ser consumidos por:",
                alternativas: [
                    "Animais e pessoas",
                    "Somente rochas",
                    "Somente insetos aquáticos",
                    "Nenhum organismo"
                ],
                correta: 0,
                explicacao: "A cagaita constitui recurso alimentar para diferentes organismos."
            },
            {
                pergunta: "O aproveitamento sustentável de frutos nativos pode:",
                alternativas: [
                    "Unir conservação e geração de renda",
                    "Exigir sempre a derrubada das árvores",
                    "Eliminar a biodiversidade",
                    "Impedir qualquer atividade econômica"
                ],
                correta: 0,
                explicacao: "Produtos nativos podem gerar valor econômico mantendo a vegetação em pé."
            }
        ]
    },
    {
        id: "quiz-araticum",
        artigoId: "araticum",
        titulo: "Doce do Cerrado",
        descricao: "Teste seus conhecimentos sobre o araticum.",
        icone: "🍃",
        dificuldade: "facil",
        xp: 30,
        descoberta: {
            id: "araticum",
            nome: "Araticum",
            tipo: "Flora",
            icone: "🍃",
            raridade: "Comum"
        },
        perguntas: [
            {
                pergunta: "O araticum é conhecido principalmente como:",
                alternativas: [
                    "Fruto nativo",
                    "Felino",
                    "Ave",
                    "Tipo de solo"
                ],
                correta: 0,
                explicacao: "O araticum é um fruto característico do Cerrado."
            },
            {
                pergunta: "Animais que consomem seus frutos podem:",
                alternativas: [
                    "Transportar sementes",
                    "Impedir completamente sua reprodução",
                    "Transformar a planta em animal",
                    "Eliminar a fotossíntese"
                ],
                correta: 0,
                explicacao: "A ingestão de frutos pode resultar na dispersão das sementes."
            },
            {
                pergunta: "O araticum possui também valor:",
                alternativas: [
                    "Cultural e alimentar",
                    "Somente mineral",
                    "Somente marinho",
                    "Exclusivamente industrial"
                ],
                correta: 0,
                explicacao: "Frutos nativos integram alimentação e cultura regional."
            }
        ]
    },
    {
        id: "quiz-baru",
        artigoId: "baru",
        titulo: "Castanha do Cerrado",
        descricao: "Descubra como o baru conecta conservação e economia.",
        icone: "🌰",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "baru",
            nome: "Baru",
            tipo: "Flora",
            icone: "🌰",
            raridade: "Incomum"
        },
        perguntas: [
            {
                pergunta: "A chamada castanha de baru é:",
                alternativas: [
                    "Uma semente presente no fruto do baruzeiro",
                    "Uma parte da raiz",
                    "Uma espécie de inseto",
                    "Uma folha modificada"
                ],
                correta: 0,
                explicacao: "A parte consumida conhecida como castanha corresponde à semente."
            },
            {
                pergunta: "O extrativismo sustentável do baru pode favorecer a conservação porque:",
                alternativas: [
                    "Cria valor econômico mantendo árvores em pé",
                    "Exige a retirada de toda a vegetação",
                    "Depende da eliminação dos animais",
                    "Impede a regeneração natural"
                ],
                correta: 0,
                explicacao: "O uso sustentável pode gerar renda sem depender da conversão da vegetação."
            },
            {
                pergunta: "A existência de valor econômico em um fruto nativo demonstra que:",
                alternativas: [
                    "Conservação e economia podem ser planejadas em conjunto",
                    "Toda atividade econômica destrói obrigatoriamente a natureza",
                    "Somente espécies exóticas geram renda",
                    "Plantas nativas não possuem utilidade"
                ],
                correta: 0,
                explicacao: "Cadeias sustentáveis podem conciliar geração de renda e manutenção da biodiversidade."
            }
        ]
    },
    {
        id: "quiz-mangaba",
        artigoId: "mangaba",
        titulo: "Sabor Nativo",
        descricao: "Um quiz sobre a mangabeira e seus frutos.",
        icone: "🍈",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "mangaba",
            nome: "Mangaba",
            tipo: "Flora",
            icone: "🍈",
            raridade: "Comum"
        },
        perguntas: [
            {
                pergunta: "A mangaba é produzida pela:",
                alternativas: [
                    "Mangabeira",
                    "Lobeira",
                    "Copaíba",
                    "Seriema"
                ],
                correta: 0,
                explicacao: "O fruto da mangabeira é conhecido como mangaba."
            },
            {
                pergunta: "Além da alimentação humana, seus frutos podem:",
                alternativas: [
                    "Servir de alimento para a fauna",
                    "Produzir chuva diretamente",
                    "Transformar o solo em rocha",
                    "Eliminar polinizadores"
                ],
                correta: 0,
                explicacao: "Frutos nativos também participam das relações alimentares da fauna."
            },
            {
                pergunta: "A coleta sustentável pode favorecer:",
                alternativas: [
                    "Economias locais e manutenção das plantas",
                    "A extinção imediata da espécie",
                    "A remoção obrigatória de todo o habitat",
                    "A eliminação de sementes"
                ],
                correta: 0,
                explicacao: "O manejo responsável pode gerar renda preservando populações naturais."
            }
        ]
    },
    {
        id: "quiz-lobeira",
        artigoId: "lobeira",
        titulo: "A Fruta do Lobo",
        descricao: "Investigue a relação entre a lobeira e o lobo-guará.",
        icone: "🍏",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "lobeira",
            nome: "Lobeira",
            tipo: "Flora",
            icone: "🍏",
            raridade: "Comum"
        },
        perguntas: [
            {
                pergunta: "A relação entre lobeira e lobo-guará é um exemplo de como:",
                alternativas: [
                    "Animais e plantas podem participar de relações mutuamente importantes",
                    "Plantas vivem totalmente isoladas da fauna",
                    "Frutos não possuem função ecológica",
                    "Carnívoros nunca consomem vegetais"
                ],
                correta: 0,
                explicacao: "O lobo consome frutos e pode auxiliar na dispersão das sementes da lobeira."
            },
            {
                pergunta: "Se populações de grandes dispersores diminuírem, uma possível consequência para plantas frutíferas é:",
                alternativas: [
                    "Redução do transporte de sementes para alguns locais",
                    "Produção automática de novas espécies",
                    "Aumento garantido da germinação",
                    "Fim completo da necessidade de reprodução"
                ],
                correta: 0,
                explicacao: "A perda de dispersores pode alterar a distribuição espacial das sementes."
            },
            {
                pergunta: "A lobeira demonstra que uma dieta onívora pode ter efeito ecológico porque:",
                alternativas: [
                    "O consumo de frutos conecta um animal também à regeneração vegetal",
                    "O animal deixa de interagir com plantas",
                    "Toda semente consumida é destruída",
                    "Predadores não influenciam vegetação"
                ],
                correta: 0,
                explicacao: "O consumo de frutos cria uma ligação ecológica entre animais onívoros e plantas."
            }
        ]
    },
    {
        id: "quiz-sucupira",
        artigoId: "sucupira",
        titulo: "Resistência Vegetal",
        descricao: "Teste seus conhecimentos sobre árvores conhecidas como sucupira.",
        icone: "🌳",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "sucupira",
            nome: "Sucupira",
            tipo: "Flora",
            icone: "🌳",
            raridade: "Incomum"
        },
        perguntas: [
            {
                pergunta: "O nome popular sucupira pode se referir a:",
                alternativas: [
                    "Mais de uma espécie",
                    "Uma única ave",
                    "Somente um tipo de solo",
                    "Um rio"
                ],
                correta: 0,
                explicacao: "Nomes populares nem sempre correspondem a apenas uma espécie científica."
            },
            {
                pergunta: "Como árvores do Cerrado, sucupiras participam:",
                alternativas: [
                    "Da estrutura da vegetação e de interações ecológicas",
                    "Somente de ambientes marinhos",
                    "Apenas da formação de rochas",
                    "Da produção de gelo"
                ],
                correta: 0,
                explicacao: "Árvores oferecem alimento, abrigo e estrutura para outras espécies."
            },
            {
                pergunta: "Uma adaptação a ambientes sazonais significa capacidade de lidar com:",
                alternativas: [
                    "Mudanças entre períodos mais secos e mais úmidos",
                    "Ausência completa de variação ambiental",
                    "Somente temperaturas abaixo de zero",
                    "Vida exclusivamente aquática"
                ],
                correta: 0,
                explicacao: "O Cerrado possui forte sazonalidade em muitas regiões."
            }
        ]
    },
    {
        id: "quiz-copaiba",
        artigoId: "copaiba",
        titulo: "A Árvore do Óleo",
        descricao: "Descubra as características das copaíbas.",
        icone: "🌳",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "copaiba",
            nome: "Copaíba",
            tipo: "Flora",
            icone: "🌳",
            raridade: "Incomum"
        },
        perguntas: [
            {
                pergunta: "Copaíba é um nome utilizado para espécies do gênero:",
                alternativas: [
                    "Copaifera",
                    "Eunectes",
                    "Sapajus",
                    "Chrysocyon"
                ],
                correta: 0,
                explicacao: "Copaifera é o gênero botânico associado às copaíbas."
            },
            {
                pergunta: "Uma característica conhecida dessas árvores é:",
                alternativas: [
                    "Produção de substância oleosa no tronco",
                    "Produção de lã",
                    "Respiração por brânquias",
                    "Ausência completa de raízes"
                ],
                correta: 0,
                explicacao: "O óleo-resina armazenado no tronco é uma característica bastante conhecida."
            },
            {
                pergunta: "A utilização humana de uma espécie nativa reforça a necessidade de:",
                alternativas: [
                    "Manejo responsável para evitar exploração excessiva",
                    "Retirada ilimitada do recurso",
                    "Eliminação das populações naturais",
                    "Substituição obrigatória por espécies exóticas"
                ],
                correta: 0,
                explicacao: "Recursos naturais precisam ser utilizados dentro de limites que permitam sua manutenção."
            }
        ]
    },
    {
        id: "quiz-jatoba",
        artigoId: "jatoba",
        titulo: "Fruto de Casca Dura",
        descricao: "Teste o que aprendeu sobre o jatobá.",
        icone: "🌳",
        dificuldade: "facil",
        xp: 30,
        descoberta: {
            id: "jatoba",
            nome: "Jatobá",
            tipo: "Flora",
            icone: "🌳",
            raridade: "Incomum"
        },
        perguntas: [
            {
                pergunta: "O fruto do jatobá é conhecido por possuir:",
                alternativas: [
                    "Casca resistente",
                    "Escamas",
                    "Penas",
                    "Nadadeiras"
                ],
                correta: 0,
                explicacao: "Os frutos do jatobá apresentam casca bastante resistente."
            },
            {
                pergunta: "Animais podem consumir:",
                alternativas: [
                    "A polpa do fruto",
                    "Apenas as raízes",
                    "Somente a casca externa",
                    "Nenhuma parte"
                ],
                correta: 0,
                explicacao: "A polpa pode servir de alimento para diferentes animais."
            },
            {
                pergunta: "Jatobá é um nome associado a espécies do gênero:",
                alternativas: [
                    "Hymenaea",
                    "Eunectes",
                    "Panthera",
                    "Rhea"
                ],
                correta: 0,
                explicacao: "Espécies de Hymenaea são conhecidas popularmente como jatobás."
            }
        ]
    },
    {
        id: "quiz-murici",
        artigoId: "murici",
        titulo: "Pequeno Fruto, Grande Rede",
        descricao: "Explore as relações ecológicas envolvendo o murici.",
        icone: "🟠",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "murici",
            nome: "Murici",
            tipo: "Flora",
            icone: "🟠",
            raridade: "Comum"
        },
        perguntas: [
            {
                pergunta: "O nome murici pode se referir a:",
                alternativas: [
                    "Diferentes espécies vegetais",
                    "Somente uma espécie animal",
                    "Uma formação geológica",
                    "Um rio"
                ],
                correta: 0,
                explicacao: "Várias espécies são conhecidas popularmente como murici."
            },
            {
                pergunta: "Ao consumir seus frutos, animais podem:",
                alternativas: [
                    "Dispersar sementes",
                    "Eliminar toda reprodução da planta",
                    "Transformar sementes em pólen",
                    "Impedir a existência de novos indivíduos"
                ],
                correta: 0,
                explicacao: "O transporte de sementes é uma das interações possíveis entre fauna e plantas frutíferas."
            },
            {
                pergunta: "Esse tipo de relação reforça que:",
                alternativas: [
                    "A biodiversidade funciona como uma rede de interações",
                    "Cada espécie vive isoladamente",
                    "Frutos não possuem função ecológica",
                    "A fauna não influencia a flora"
                ],
                correta: 0,
                explicacao: "As relações entre alimentação, dispersão e reprodução conectam diferentes espécies."
            }
        ]
    },
    {
        id: "quiz-sempre-viva",
        artigoId: "sempre-viva",
        titulo: "Flores que Permanecem",
        descricao: "Um desafio sobre as sempre-vivas do Cerrado.",
        icone: "🌾",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "sempre-viva",
            nome: "Sempre-viva",
            tipo: "Flora",
            icone: "🌾",
            raridade: "Rara"
        },
        perguntas: [
            {
                pergunta: "O nome sempre-viva está associado principalmente à capacidade de algumas estruturas florais:",
                alternativas: [
                    "Manterem sua aparência depois de secas",
                    "Realizarem fotossíntese depois de removidas indefinidamente",
                    "Nunca passarem por envelhecimento celular",
                    "Produzirem flores todos os dias do ano"
                ],
                correta: 0,
                explicacao: "A aparência preservada após a secagem deu origem ao nome popular."
            },
            {
                pergunta: "A coleta excessiva de sempre-vivas pode ser problemática porque:",
                alternativas: [
                    "Reduz indivíduos reprodutivos das populações naturais",
                    "Aumenta necessariamente a diversidade genética",
                    "Garante regeneração imediata",
                    "Não causa qualquer efeito ecológico"
                ],
                correta: 0,
                explicacao: "Retirar muitos indivíduos pode comprometer reprodução e manutenção populacional."
            },
            {
                pergunta: "A proteção dessas espécies exige atenção também aos habitats porque:",
                alternativas: [
                    "Algumas vivem em condições ambientais bastante específicas",
                    "Toda espécie consegue viver em qualquer lugar",
                    "O habitat não influencia plantas",
                    "Somente animais dependem do ambiente"
                ],
                correta: 0,
                explicacao: "Espécies especializadas podem depender fortemente de determinadas condições ambientais."
            }
        ]
    },
    {
        id: "quiz-canela-de-ema",
        artigoId: "canela-de-ema",
        titulo: "Sobrevivente do Cerrado",
        descricao: "Teste seus conhecimentos sobre adaptações vegetais.",
        icone: "🌱",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "canela-de-ema",
            nome: "Canela-de-ema",
            tipo: "Flora",
            icone: "🌱",
            raridade: "Rara"
        },
        perguntas: [
            {
                pergunta: "O estudo da canela-de-ema é interessante porque evidencia:",
                alternativas: [
                    "Adaptações vegetais a condições ambientais desafiadoras",
                    "A ausência de diversidade no Cerrado",
                    "Que plantas não respondem ao ambiente",
                    "Que toda vegetação depende de alagamento permanente"
                ],
                correta: 0,
                explicacao: "A espécie representa estratégias de sobrevivência associadas às condições do Cerrado."
            },
            {
                pergunta: "Órgãos ou estruturas resistentes próximos ao solo podem favorecer:",
                alternativas: [
                    "Sobrevivência e rebrote após perturbações",
                    "Vida exclusivamente aquática",
                    "Perda de toda capacidade reprodutiva",
                    "Produção de neve"
                ],
                correta: 0,
                explicacao: "Estruturas protegidas podem permitir que a planta rebrote após eventos ambientais."
            },
            {
                pergunta: "Uma interpretação correta das adaptações do Cerrado é que elas:",
                alternativas: [
                    "Resultam da relação histórica entre organismos e condições ambientais",
                    "Significam que nenhuma espécie sofre impactos",
                    "Tornam incêndios intensos sempre benéficos",
                    "Eliminam qualquer necessidade de conservação"
                ],
                correta: 0,
                explicacao: "Adaptação não significa invulnerabilidade a alterações intensas ou frequentes."
            }
        ]
    },
    {
        id: "quiz-o-que-e-cerrado",
        artigoId: "o-que-e-cerrado",
        titulo: "Entendendo o Cerrado",
        descricao: "Um desafio sobre a diversidade de paisagens do bioma.",
        icone: "🌎",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "mosaico-cerrado",
            nome: "Mosaico do Cerrado",
            tipo: "Conhecimento",
            icone: "🌎",
            raridade: "Conhecimento"
        },
        perguntas: [
            {
                pergunta: "Qual ideia descreve melhor o Cerrado?",
                alternativas: [
                    "Um mosaico de diferentes formações vegetais",
                    "Uma única paisagem idêntica em toda a área",
                    "Uma floresta sempre fechada",
                    "Um deserto sem biodiversidade"
                ],
                correta: 0,
                explicacao: "O Cerrado reúne campos, savanas, matas, veredas e outras formações."
            },
            {
                pergunta: "A variedade de ambientes contribui diretamente para:",
                alternativas: [
                    "Grande biodiversidade",
                    "Ausência de espécies especializadas",
                    "Uniformidade absoluta",
                    "Eliminação das relações ecológicas"
                ],
                correta: 0,
                explicacao: "Ambientes diferentes oferecem condições para comunidades variadas."
            },
            {
                pergunta: "O Cerrado também possui forte importância nacional por sua relação com:",
                alternativas: [
                    "Recursos hídricos",
                    "Geleiras permanentes",
                    "Recifes oceânicos",
                    "Vulcões ativos"
                ],
                correta: 0,
                explicacao: "O bioma está ligado a nascentes e importantes bacias hidrográficas."
            }
        ]
    },
    {
        id: "quiz-veredas",
        artigoId: "veredas",
        titulo: "Caminhos de Água",
        descricao: "Entenda o papel das veredas na paisagem do Cerrado.",
        icone: "💧",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "veredas",
            nome: "Veredas",
            tipo: "Conhecimento",
            icone: "💧",
            raridade: "Conhecimento"
        },
        perguntas: [
            {
                pergunta: "A combinação entre solos úmidos e presença frequente de buritis indica que as veredas:",
                alternativas: [
                    "São ambientes fortemente relacionados à dinâmica da água subterrânea",
                    "Representam regiões permanentemente áridas",
                    "Não possuem relação com nascentes",
                    "Existem apenas em encostas rochosas secas"
                ],
                correta: 0,
                explicacao: "As veredas estão associadas a áreas onde a água subterrânea influencia fortemente o solo e a vegetação."
            },
            {
                pergunta: "A degradação de uma vereda pode afetar além da vegetação local:",
                alternativas: [
                    "Recursos hídricos e animais que utilizam o ambiente",
                    "Somente a cor das folhas",
                    "Apenas espécies marinhas",
                    "Nenhum processo fora da área"
                ],
                correta: 0,
                explicacao: "Veredas fornecem água, abrigo, alimento e conectividade na paisagem."
            },
            {
                pergunta: "Preservar apenas alguns buritis seria insuficiente porque:",
                alternativas: [
                    "A funcionalidade da vereda depende do sistema de solo, água e vegetação",
                    "Buritis não fazem parte da vereda",
                    "A água não influencia o ambiente",
                    "Somente animais formam o ecossistema"
                ],
                correta: 0,
                explicacao: "Ecossistemas dependem da interação entre componentes bióticos e físicos."
            }
        ]
    },
    {
        id: "quiz-mata-de-galeria",
        artigoId: "mata-de-galeria",
        titulo: "Florestas que Seguem os Rios",
        descricao: "Teste seu entendimento sobre as matas de galeria.",
        icone: "🌳",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "mata-de-galeria",
            nome: "Mata de Galeria",
            tipo: "Conhecimento",
            icone: "🌳",
            raridade: "Conhecimento"
        },
        perguntas: [
            {
                pergunta: "Em uma paisagem dominada por formações abertas, as matas de galeria podem funcionar ecologicamente como:",
                alternativas: [
                    "Corredores associados aos cursos d'água",
                    "Barreiras obrigatórias para toda fauna",
                    "Áreas sem qualquer conectividade",
                    "Ambientes independentes dos rios"
                ],
                correta: 0,
                explicacao: "Essas faixas florestais podem facilitar deslocamento e conexão entre habitats."
            },
            {
                pergunta: "Sua vegetação geralmente difere dos campos próximos porque:",
                alternativas: [
                    "A maior disponibilidade de umidade favorece estrutura florestal",
                    "A água impede o crescimento de árvores",
                    "Não existe diferença ambiental",
                    "Somente gramíneas conseguem sobreviver"
                ],
                correta: 0,
                explicacao: "Proximidade da água modifica condições de solo, umidade e microclima."
            },
            {
                pergunta: "Remover mata de galeria pode aumentar o risco de:",
                alternativas: [
                    "Degradação das margens e perda de habitat",
                    "Formação espontânea de novas florestas",
                    "Aumento garantido da biodiversidade",
                    "Redução total da erosão"
                ],
                correta: 0,
                explicacao: "A vegetação ajuda a estabilizar margens e manter comunidades associadas."
            }
        ]
    },
    {
        id: "quiz-campo-limpo",
        artigoId: "campo-limpo",
        titulo: "Oceano de Gramíneas",
        descricao: "Um desafio sobre a biodiversidade das paisagens abertas.",
        icone: "🌾",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "campo-limpo",
            nome: "Campo Limpo",
            tipo: "Conhecimento",
            icone: "🌾",
            raridade: "Conhecimento"
        },
        perguntas: [
            {
                pergunta: "A pouca presença de árvores no campo limpo significa que:",
                alternativas: [
                    "A biodiversidade pode estar concentrada em plantas baixas e fauna especializada",
                    "O ambiente não possui biodiversidade",
                    "Nenhum animal consegue viver ali",
                    "A área não é natural"
                ],
                correta: 0,
                explicacao: "Campos naturais possuem comunidades adaptadas à vegetação aberta."
            },
            {
                pergunta: "A vegetação predominante é formada principalmente por:",
                alternativas: [
                    "Plantas herbáceas",
                    "Árvores gigantes",
                    "Algas marinhas",
                    "Musgos polares"
                ],
                correta: 0,
                explicacao: "Gramíneas e outras plantas herbáceas dominam o campo limpo."
            },
            {
                pergunta: "Converter campos naturais apenas porque parecem vazios pode ser problemático porque:",
                alternativas: [
                    "Ignora espécies especializadas desses habitats",
                    "Campos nunca possuem fauna",
                    "Todas as espécies vivem melhor em florestas",
                    "Não existe vegetação no solo"
                ],
                correta: 0,
                explicacao: "Paisagens abertas também são habitats naturais importantes."
            }
        ]
    },
    {
        id: "quiz-campo-sujo",
        artigoId: "campo-sujo",
        titulo: "Entre Campos e Arbustos",
        descricao: "Descubra as diferenças estruturais do campo sujo.",
        icone: "🌿",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "campo-sujo",
            nome: "Campo Sujo",
            tipo: "Conhecimento",
            icone: "🌿",
            raridade: "Conhecimento"
        },
        perguntas: [
            {
                pergunta: "O campo sujo diferencia-se do campo limpo principalmente pela:",
                alternativas: [
                    "Maior presença de arbustos",
                    "Ausência completa de plantas baixas",
                    "Presença de recifes",
                    "Cobertura permanente por água"
                ],
                correta: 0,
                explicacao: "O campo sujo combina vegetação herbácea com arbustos e pequenas plantas lenhosas."
            },
            {
                pergunta: "A variação de alturas na vegetação pode:",
                alternativas: [
                    "Criar diferentes microambientes",
                    "Eliminar toda diversidade",
                    "Impedir a existência de insetos",
                    "Tornar o solo irrelevante"
                ],
                correta: 0,
                explicacao: "Estruturas vegetais variadas oferecem diferentes recursos e abrigos."
            },
            {
                pergunta: "Campo limpo e campo sujo demonstram que:",
                alternativas: [
                    "Pequenas mudanças na estrutura vegetal criam ambientes distintos",
                    "Todas as formações do Cerrado são iguais",
                    "Somente árvores definem ecossistemas",
                    "Gramíneas não possuem importância ecológica"
                ],
                correta: 0,
                explicacao: "A composição e estrutura da vegetação alteram as condições disponíveis para os organismos."
            }
        ]
    },
    {
        id: "quiz-cerradao",
        artigoId: "cerradao",
        titulo: "A Floresta do Cerrado",
        descricao: "Teste seu conhecimento sobre uma das formações mais arborizadas.",
        icone: "🌲",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "cerradao",
            nome: "Cerradão",
            tipo: "Conhecimento",
            icone: "🌲",
            raridade: "Conhecimento"
        },
        perguntas: [
            {
                pergunta: "O cerradão demonstra que o Cerrado:",
                alternativas: [
                    "Inclui também formações de caráter florestal",
                    "É composto somente por campos",
                    "Não possui árvores altas",
                    "É um ambiente uniforme"
                ],
                correta: 0,
                explicacao: "O cerradão apresenta maior cobertura arbórea e aspecto florestal."
            },
            {
                pergunta: "Uma cobertura de copas mais contínua pode alterar:",
                alternativas: [
                    "Luz, temperatura e umidade próximas ao solo",
                    "Somente a cor das rochas",
                    "A rotação da Terra",
                    "A composição da atmosfera global imediatamente"
                ],
                correta: 0,
                explicacao: "A estrutura da vegetação cria microclimas próprios."
            },
            {
                pergunta: "A existência do cerradão junto a campos reforça a ideia de:",
                alternativas: [
                    "Mosaico de formações",
                    "Uniformidade absoluta",
                    "Ausência de transições",
                    "Inexistência de fatores ambientais"
                ],
                correta: 0,
                explicacao: "O Cerrado é composto por diversas formações que podem coexistir na paisagem."
            }
        ]
    },
    {
        id: "quiz-fogo-no-cerrado",
        artigoId: "fogo-no-cerrado",
        titulo: "Fogo Ecológico",
        descricao: "Um desafio avançado sobre fogo natural, manejo e incêndios destrutivos.",
        icone: "🔥",
        dificuldade: "hard",
        xp: 80,
        descoberta: {
            id: "fogo-ecologico",
            nome: "Fogo Ecológico",
            tipo: "Conhecimento",
            icone: "🔥",
            raridade: "Conhecimento Raro"
        },
        perguntas: [
            {
                pergunta: "Em uma área campestre do Cerrado historicamente sujeita ao fogo, qual interpretação é ecologicamente mais adequada?",
                alternativas: [
                    "A presença histórica do fogo pode ter selecionado adaptações, mas isso não significa que qualquer frequência, intensidade ou época de queima seja benéfica",
                    "Como algumas espécies rebrotam, incêndios de qualquer intensidade produzem obrigatoriamente efeitos positivos",
                    "Toda ocorrência de fogo é artificial e incompatível com a história ecológica do Cerrado",
                    "Se uma planta possui casca espessa, todas as demais espécies do ecossistema necessariamente possuem a mesma tolerância"
                ],
                correta: 0,
                explicacao: "O efeito ecológico do fogo depende do regime de queima. Adaptação ao fogo não equivale a tolerância ilimitada."
            },
            {
                pergunta: "Por que a frequência de incêndios é uma variável tão importante para avaliar impactos sobre a vegetação?",
                alternativas: [
                    "Queimas muito próximas podem ocorrer antes que indivíduos recuperem reservas, cresçam ou completem ciclos reprodutivos",
                    "A frequência não interfere em processos ecológicos desde que exista vegetação",
                    "Quanto maior a frequência, maior obrigatoriamente será a diversidade em qualquer formação",
                    "A única variável relevante é a presença de cinzas depois da queima"
                ],
                correta: 0,
                explicacao: "Intervalos muito curtos podem impedir recuperação e reprodução de espécies, alterando a composição da comunidade."
            },
            {
                pergunta: "Qual proposta de manejo representa melhor uma abordagem ecologicamente responsável?",
                alternativas: [
                    "Considerar formação vegetal, histórico de fogo, estação, intensidade, objetivos e vulnerabilidade das espécies antes de qualquer decisão",
                    "Aplicar o mesmo regime de queima a campos, veredas e matas porque todos pertencem ao mesmo bioma",
                    "Eliminar qualquer análise local e utilizar somente uma frequência fixa de queima",
                    "Assumir que ambientes florestais e campestres possuem respostas idênticas ao fogo"
                ],
                correta: 0,
                explicacao: "Manejo integrado exige considerar diferenças entre ambientes e características do regime de fogo."
            }
        ]
    },
    {
        id: "quiz-estacao-seca",
        artigoId: "estacao-seca",
        titulo: "Sobrevivendo à Seca",
        descricao: "Entenda como a sazonalidade modifica a vida no Cerrado.",
        icone: "☀️",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "estacao-seca",
            nome: "Estação Seca",
            tipo: "Conhecimento",
            icone: "☀️",
            raridade: "Conhecimento"
        },
        perguntas: [
            {
                pergunta: "A queda de folhas durante a estação seca pode representar uma estratégia para:",
                alternativas: [
                    "Reduzir perda de água em determinadas espécies",
                    "Aumentar obrigatoriamente a transpiração",
                    "Eliminar raízes profundas",
                    "Impedir qualquer floração"
                ],
                correta: 0,
                explicacao: "A redução da superfície foliar pode diminuir a perda de água."
            },
            {
                pergunta: "A sazonalidade afeta animais porque modifica:",
                alternativas: [
                    "Disponibilidade de água e alimento",
                    "Somente a cor do céu",
                    "A gravidade local",
                    "A rotação do planeta"
                ],
                correta: 0,
                explicacao: "Recursos variam ao longo das estações, alterando comportamento e deslocamentos."
            },
            {
                pergunta: "Uma espécie adaptada à seca ainda pode ser ameaçada por mudanças climáticas porque:",
                alternativas: [
                    "Alterações extremas na duração e intensidade da seca podem ultrapassar limites fisiológicos e ecológicos",
                    "Adaptação significa resistência infinita",
                    "Toda mudança climática aumenta automaticamente a sobrevivência",
                    "Espécies adaptadas não dependem de água"
                ],
                correta: 0,
                explicacao: "Adaptações funcionam dentro de determinados limites ambientais."
            }
        ]
    },
    {
        id: "quiz-estacao-chuvosa",
        artigoId: "estacao-chuvosa",
        titulo: "O Retorno das Chuvas",
        descricao: "Um desafio sobre os ciclos ecológicos ligados à chuva.",
        icone: "🌧️",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "estacao-chuvosa",
            nome: "Estação Chuvosa",
            tipo: "Conhecimento",
            icone: "🌧️",
            raridade: "Conhecimento"
        },
        perguntas: [
            {
                pergunta: "O aumento de brotos, flores, frutos e insetos durante períodos chuvosos pode:",
                alternativas: [
                    "Criar pulsos de recursos utilizados por diversas espécies",
                    "Reduzir obrigatoriamente todas as interações ecológicas",
                    "Eliminar a reprodução animal",
                    "Tornar a água irrelevante"
                ],
                correta: 0,
                explicacao: "Períodos de maior produtividade podem concentrar alimento e favorecer ciclos reprodutivos."
            },
            {
                pergunta: "Sincronizar reprodução com a estação chuvosa pode ser vantajoso quando:",
                alternativas: [
                    "Há maior disponibilidade de alimento e água para adultos ou filhotes",
                    "A chuva elimina toda vegetação",
                    "Não existe variação de recursos",
                    "Todos os predadores desaparecem"
                ],
                correta: 0,
                explicacao: "A reprodução pode coincidir com momentos de maior disponibilidade de recursos."
            },
            {
                pergunta: "A alternância entre seca e chuva deve ser entendida como:",
                alternativas: [
                    "Parte estruturante da dinâmica ecológica de muitas áreas do Cerrado",
                    "Um fenômeno sem efeito sobre organismos",
                    "Uma característica exclusiva dos oceanos",
                    "Um processo recente sem relação com adaptações"
                ],
                correta: 0,
                explicacao: "A sazonalidade influencia ciclos ecológicos, comportamento e fenologia."
            }
        ]
    },
    {
        id: "quiz-berco-das-aguas",
        artigoId: "berco-das-aguas",
        titulo: "Berço das Águas",
        descricao: "Relacione solo, vegetação e água em um desafio avançado.",
        icone: "💦",
        dificuldade: "hard",
        xp: 80,
        descoberta: {
            id: "berco-das-aguas",
            nome: "Berço das Águas",
            tipo: "Conhecimento",
            icone: "💦",
            raridade: "Conhecimento Raro"
        },
        perguntas: [
            {
                pergunta: "Uma área de recarga perde vegetação nativa e passa a apresentar forte compactação do solo. Qual consequência hidrológica é mais coerente?",
                alternativas: [
                    "Pode ocorrer redução da infiltração e aumento do escoamento superficial, alterando a alimentação de reservas subterrâneas",
                    "A compactação aumenta automaticamente a infiltração porque fecha os poros do solo",
                    "A retirada vegetal não interfere na dinâmica hídrica quando continua chovendo",
                    "O único efeito possível é aumento permanente da vazão de nascentes em todas as estações"
                ],
                correta: 0,
                explicacao: "Compactação reduz espaços para entrada da água e pode alterar recarga subterrânea e escoamento."
            },
            {
                pergunta: "Por que a proteção de uma nascente não deve se limitar ao pequeno ponto onde a água emerge?",
                alternativas: [
                    "Porque sua manutenção depende também das áreas de infiltração, do solo e da vegetação que participam do sistema hídrico",
                    "Porque a água da nascente é produzida somente pelas plantas próximas",
                    "Porque toda água subterrânea está isolada da superfície",
                    "Porque as bacias hidrográficas não possuem relação com o relevo"
                ],
                correta: 0,
                explicacao: "Nascentes fazem parte de sistemas maiores que incluem áreas de recarga e fluxo subterrâneo."
            },
            {
                pergunta: "A expressão 'berço das águas' é melhor compreendida como referência:",
                alternativas: [
                    "À contribuição do Cerrado para cabeceiras, nascentes e sistemas hidrográficos importantes",
                    "À presença de um único grande lago responsável por todos os rios brasileiros",
                    "À ausência de estação seca no bioma",
                    "À existência de água superficial abundante e constante em toda a paisagem"
                ],
                correta: 0,
                explicacao: "O Cerrado possui papel estratégico na origem e alimentação de importantes sistemas hídricos."
            }
        ]
    },
    {
        id: "quiz-desmatamento",
        artigoId: "desmatamento",
        titulo: "Quando o Cerrado Desaparece",
        descricao: "Analise os efeitos ecológicos da perda de vegetação.",
        icone: "🪵",
        dificuldade: "hard",
        xp: 80,
        descoberta: {
            id: "desmatamento-cerrado",
            nome: "Impactos do Desmatamento",
            tipo: "Conhecimento",
            icone: "🪵",
            raridade: "Conhecimento Raro"
        },
        perguntas: [
            {
                pergunta: "Uma paisagem de Cerrado perde grande parte de sua cobertura nativa, mas mantém pequenos fragmentos isolados. Qual interpretação é mais completa?",
                alternativas: [
                    "A perda de área e o isolamento podem atuar juntos, reduzindo habitat disponível e dificultando deslocamento e fluxo gênico de algumas espécies",
                    "A manutenção de qualquer fragmento, independentemente de tamanho e conexão, garante a conservação integral da biodiversidade original",
                    "O isolamento aumenta obrigatoriamente a diversidade porque impede qualquer interação entre populações",
                    "A quantidade de habitat não possui relação com a persistência de espécies"
                ],
                correta: 0,
                explicacao: "Perda e fragmentação do habitat são processos relacionados e podem produzir efeitos combinados."
            },
            {
                pergunta: "Por que a remoção da vegetação pode afetar também os recursos hídricos?",
                alternativas: [
                    "Porque cobertura vegetal, raízes e características do solo influenciam infiltração, erosão e escoamento",
                    "Porque árvores são a única fonte de água existente no planeta",
                    "Porque solos sem vegetação deixam de interagir com chuva",
                    "Porque retirar árvores sempre aumenta a recarga subterrânea"
                ],
                correta: 0,
                explicacao: "Vegetação e solo participam da regulação dos fluxos de água na paisagem."
            },
            {
                pergunta: "Qual estratégia aborda melhor a conservação em uma paisagem produtiva?",
                alternativas: [
                    "Planejar uso do solo preservando áreas nativas, conectividade, recursos hídricos e cumprimento das regras ambientais",
                    "Concentrar toda conservação em uma única árvore isolada",
                    "Eliminar corredores para aumentar o isolamento",
                    "Considerar apenas produtividade e ignorar funções ecológicas"
                ],
                correta: 0,
                explicacao: "Planejamento territorial pode integrar produção e conservação."
            }
        ]
    },
    {
        id: "quiz-fragmentacao",
        artigoId: "fragmentacao",
        titulo: "Paisagens em Pedaços",
        descricao: "Um desafio sobre isolamento e conectividade ecológica.",
        icone: "🧩",
        dificuldade: "hard",
        xp: 80,
        descoberta: {
            id: "fragmentacao-habitat",
            nome: "Fragmentação de Habitat",
            tipo: "Conhecimento",
            icone: "🧩",
            raridade: "Conhecimento Raro"
        },
        perguntas: [
            {
                pergunta: "Dois fragmentos possuem a mesma área total de vegetação, mas um deles está conectado a outros remanescentes e o outro está completamente isolado. Qual conclusão é mais adequada?",
                alternativas: [
                    "A conectividade pode favorecer deslocamento e fluxo gênico, portanto a configuração espacial também importa, não apenas a área total",
                    "Os dois fragmentos necessariamente possuem função ecológica idêntica porque têm a mesma área",
                    "O fragmento isolado sempre terá maior diversidade por não receber indivíduos externos",
                    "Conectividade só é relevante para plantas e nunca para animais"
                ],
                correta: 0,
                explicacao: "A configuração da paisagem influencia movimentos, recolonização e intercâmbio genético."
            },
            {
                pergunta: "O chamado efeito de borda ocorre porque:",
                alternativas: [
                    "As condições ambientais próximas aos limites de um fragmento podem diferir das condições do interior",
                    "Toda borda apresenta exatamente o mesmo microclima do interior",
                    "Somente o tamanho da área muda, sem alterar condições ambientais",
                    "Fragmentos não possuem limites ecológicos"
                ],
                correta: 0,
                explicacao: "Luz, vento, temperatura e umidade podem mudar nas bordas."
            },
            {
                pergunta: "Uma espécie que necessita de grandes territórios provavelmente será especialmente sensível a:",
                alternativas: [
                    "Perda de área contínua e isolamento de fragmentos",
                    "Aumento de conectividade",
                    "Restauração de corredores",
                    "Ampliação de habitat disponível"
                ],
                correta: 0,
                explicacao: "Espécies de grande área de vida podem não conseguir manter populações em fragmentos pequenos."
            }
        ]
    },
    {
        id: "quiz-corredores-ecologicos",
        artigoId: "corredores-ecologicos",
        titulo: "Caminhos para a Vida",
        descricao: "Teste seu entendimento sobre conectividade ecológica.",
        icone: "🌿",
        dificuldade: "hard",
        xp: 80,
        descoberta: {
            id: "corredores-ecologicos",
            nome: "Corredores Ecológicos",
            tipo: "Conhecimento",
            icone: "🌿",
            raridade: "Conhecimento Raro"
        },
        perguntas: [
            {
                pergunta: "Um corredor ecológico conecta dois fragmentos, mas atravessa uma área com forte iluminação, ruído e presença humana. Qual interpretação é mais correta?",
                alternativas: [
                    "A existência física do corredor não garante uso igual por todas as espécies; sua qualidade ambiental também influencia a funcionalidade",
                    "Qualquer faixa de vegetação funciona perfeitamente para todas as espécies",
                    "Corredores só precisam existir no mapa para cumprirem sua função",
                    "A qualidade do habitat é irrelevante para deslocamento animal"
                ],
                correta: 0,
                explicacao: "Estrutura, largura, qualidade e contexto do corredor influenciam seu uso."
            },
            {
                pergunta: "Conectividade pode contribuir para a persistência populacional porque:",
                alternativas: [
                    "Permite deslocamentos, recolonização e intercâmbio genético entre áreas",
                    "Impede qualquer movimento entre populações",
                    "Elimina toda competição ecológica",
                    "Garante que todas as espécies tenham a mesma abundância"
                ],
                correta: 0,
                explicacao: "Movimento entre áreas pode reduzir alguns efeitos do isolamento."
            },
            {
                pergunta: "Qual cenário representa melhor uma estratégia de conectividade?",
                alternativas: [
                    "Restaurar vegetação entre remanescentes e proteger faixas naturais associadas a cursos d'água",
                    "Aumentar distâncias entre fragmentos",
                    "Remover vegetação das margens dos rios",
                    "Criar barreiras impermeáveis entre unidades de conservação"
                ],
                correta: 0,
                explicacao: "Restauração e proteção de corredores naturais podem reconectar a paisagem."
            }
        ]
    },
    {
        id: "quiz-especies-ameacadas",
        artigoId: "especies-ameacadas",
        titulo: "Quando uma Espécie Está em Risco",
        descricao: "Analise os fatores que podem levar populações ao declínio.",
        icone: "⚠️",
        dificuldade: "hard",
        xp: 80,
        descoberta: {
            id: "especies-ameacadas",
            nome: "Espécies Ameaçadas",
            tipo: "Conhecimento",
            icone: "⚠️",
            raridade: "Conhecimento Raro"
        },
        perguntas: [
            {
                pergunta: "Uma espécie ainda ocorre em vários locais, mas suas populações diminuem rapidamente e seus habitats estão sendo convertidos. Qual interpretação é mais adequada?",
                alternativas: [
                    "Distribuição relativamente ampla não impede que a espécie esteja ameaçada se houver declínio populacional e perda de habitat",
                    "Uma espécie só pode ser ameaçada quando restar um único indivíduo",
                    "A perda de habitat não é relevante enquanto existirem registros antigos",
                    "A ameaça depende exclusivamente do tamanho corporal"
                ],
                correta: 0,
                explicacao: "Avaliações de risco consideram vários critérios, incluindo tendência populacional e perda de habitat."
            },
            {
                pergunta: "Por que grandes predadores podem ser especialmente vulneráveis à fragmentação?",
                alternativas: [
                    "Frequentemente necessitam de áreas extensas e populações de presas suficientes",
                    "Porque nunca se deslocam",
                    "Porque dependem exclusivamente de uma única árvore",
                    "Porque vivem somente em ambientes urbanos"
                ],
                correta: 0,
                explicacao: "Grandes áreas de vida aumentam a dependência de paisagens extensas e conectadas."
            },
            {
                pergunta: "Qual conjunto representa uma estratégia de conservação mais completa?",
                alternativas: [
                    "Proteger habitat, reduzir ameaças, manter conectividade e monitorar populações",
                    "Proteger apenas indivíduos isolados sem considerar habitat",
                    "Ignorar dados científicos",
                    "Substituir populações naturais por imagens educativas"
                ],
                correta: 0,
                explicacao: "Conservação efetiva integra habitat, redução de ameaças e acompanhamento científico."
            }
        ]
    },
    {
        id: "quiz-unidades-conservacao",
        artigoId: "unidades-conservacao",
        titulo: "Territórios Protegidos",
        descricao: "Teste seu conhecimento sobre áreas protegidas.",
        icone: "🏞️",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "unidades-conservacao",
            nome: "Unidades de Conservação",
            tipo: "Conhecimento",
            icone: "🏞️",
            raridade: "Conhecimento"
        },
        perguntas: [
            {
                pergunta: "Por que existem diferentes categorias de unidades de conservação?",
                alternativas: [
                    "Porque objetivos de proteção e formas permitidas de uso podem variar",
                    "Porque todas possuem exatamente as mesmas regras",
                    "Porque somente parques protegem biodiversidade",
                    "Porque áreas protegidas não possuem objetivos definidos"
                ],
                correta: 0,
                explicacao: "As categorias atendem a diferentes objetivos de conservação e uso."
            },
            {
                pergunta: "Uma unidade de conservação isolada em uma paisagem muito degradada pode ter limitações porque:",
                alternativas: [
                    "Processos ecológicos e deslocamentos também dependem da paisagem ao redor",
                    "Áreas protegidas nunca interagem com seu entorno",
                    "Nenhum animal atravessa seus limites",
                    "A conectividade só importa fora de áreas protegidas"
                ],
                correta: 0,
                explicacao: "Conservação também depende da matriz da paisagem e de conexões com outros habitats."
            },
            {
                pergunta: "Além de conservar biodiversidade, áreas protegidas podem apoiar:",
                alternativas: [
                    "Pesquisa e educação ambiental",
                    "Somente mineração intensiva",
                    "Eliminação da vegetação",
                    "Caça irrestrita"
                ],
                correta: 0,
                explicacao: "Pesquisa, monitoramento, visitação e educação podem fazer parte de seus objetivos."
            }
        ]
    },
    {
        id: "quiz-polinizadores",
        artigoId: "polinizadores",
        titulo: "Mensageiros das Flores",
        descricao: "Entenda a relação entre flores e animais polinizadores.",
        icone: "🐝",
        dificuldade: "dificil",
        xp: 55,
        descoberta: {
            id: "polinizacao",
            nome: "Polinização",
            tipo: "Conhecimento",
            icone: "🐝",
            raridade: "Conhecimento"
        },
        perguntas: [
            {
                pergunta: "Se uma planta depende principalmente de um grupo específico de polinizadores, a redução desses animais pode:",
                alternativas: [
                    "Diminuir o sucesso reprodutivo da planta",
                    "Aumentar obrigatoriamente a produção de sementes",
                    "Eliminar a necessidade de flores",
                    "Transformar polinização em dispersão"
                ],
                correta: 0,
                explicacao: "Menos visitas eficientes podem reduzir a transferência de pólen."
            },
            {
                pergunta: "A diversidade de formas e cores das flores pode estar relacionada:",
                alternativas: [
                    "A diferentes estratégias de atração e interação com polinizadores",
                    "À ausência de seleção natural",
                    "Somente à decoração da paisagem",
                    "À inexistência de reprodução"
                ],
                correta: 0,
                explicacao: "Características florais podem estar associadas aos animais que realizam visitas."
            },
            {
                pergunta: "Qual alternativa diferencia corretamente polinização de dispersão de sementes?",
                alternativas: [
                    "Polinização envolve transferência de pólen; dispersão envolve deslocamento de sementes",
                    "São exatamente o mesmo processo",
                    "Polinização ocorre somente depois da germinação",
                    "Dispersão acontece apenas por vento"
                ],
                correta: 0,
                explicacao: "São etapas distintas do ciclo reprodutivo vegetal."
            }
        ]
    },
    {
        id: "quiz-sementes",
        artigoId: "sementes",
        titulo: "A Grande Viagem",
        descricao: "Teste seu entendimento sobre dispersão de sementes.",
        icone: "🌱",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "dispersao-sementes",
            nome: "Dispersão de Sementes",
            tipo: "Conhecimento",
            icone: "🌱",
            raridade: "Conhecimento"
        },
        perguntas: [
            {
                pergunta: "Uma vantagem da dispersão é:",
                alternativas: [
                    "Reduzir a concentração de sementes ao redor da planta-mãe",
                    "Garantir que todas germinem no mesmo ponto",
                    "Impedir colonização de novas áreas",
                    "Eliminar interação com animais"
                ],
                correta: 0,
                explicacao: "O transporte pode reduzir competição local e permitir chegada a novos locais."
            },
            {
                pergunta: "Qual grupo pode atuar como dispersor?",
                alternativas: [
                    "Animais",
                    "Apenas rochas",
                    "Somente fungos",
                    "Apenas bactérias"
                ],
                correta: 0,
                explicacao: "Muitos animais carregam ou ingerem sementes."
            },
            {
                pergunta: "Sementes com estruturas semelhantes a asas normalmente apresentam adaptação à dispersão por:",
                alternativas: [
                    "Vento",
                    "Peixes",
                    "Fogo apenas",
                    "Subsolo"
                ],
                correta: 0,
                explicacao: "Estruturas leves podem aumentar o transporte pelo vento."
            }
        ]
    },
    {
        id: "quiz-agua",
        artigoId: "agua",
        titulo: "Protegendo Cada Gota",
        descricao: "Relacione vegetação, solo, erosão e água.",
        icone: "💧",
        dificuldade: "hard",
        xp: 80,
        descoberta: {
            id: "protecao-agua",
            nome: "Proteção das Águas",
            tipo: "Conhecimento",
            icone: "💧",
            raridade: "Conhecimento Raro"
        },
        perguntas: [
            {
                pergunta: "Após a remoção de vegetação próxima a um córrego, aumenta a entrada de sedimentos no canal. Qual sequência causal explica melhor o fenômeno?",
                alternativas: [
                    "Maior exposição do solo pode aumentar erosão; partículas são transportadas pelo escoamento e podem provocar assoreamento",
                    "A retirada vegetal transforma imediatamente sedimentos em água",
                    "A erosão diminui sempre que o solo fica exposto",
                    "Assoreamento ocorre apenas em ambientes marinhos"
                ],
                correta: 0,
                explicacao: "Vegetação protege o solo e reduz o transporte de sedimentos para os cursos d'água."
            },
            {
                pergunta: "Por que a conservação da vegetação em áreas de recarga pode influenciar nascentes distantes?",
                alternativas: [
                    "Porque infiltração e fluxos subterrâneos conectam diferentes partes da paisagem",
                    "Porque toda água percorre somente a superfície",
                    "Porque nascentes são independentes da chuva",
                    "Porque raízes transportam diretamente toda a água até rios distantes"
                ],
                correta: 0,
                explicacao: "A água infiltrada pode alimentar sistemas subterrâneos e emergir posteriormente em nascentes."
            },
            {
                pergunta: "Qual estratégia é mais coerente para proteger recursos hídricos?",
                alternativas: [
                    "Combinar proteção de nascentes, vegetação ripária, solos e áreas de recarga",
                    "Cuidar apenas do ponto exato onde o rio é visível",
                    "Remover cobertura vegetal para acelerar escoamento",
                    "Desconsiderar atividades realizadas nas partes altas da bacia"
                ],
                correta: 0,
                explicacao: "A água deve ser manejada considerando toda a bacia e seus processos conectados."
            }
        ]
    },
    {
        id: "quiz-consumo-consciente",
        artigoId: "consumo-consciente",
        titulo: "Escolhas que Deixam Pegadas",
        descricao: "Um desafio sobre consumo, recursos e responsabilidade ambiental.",
        icone: "♻️",
        dificuldade: "medio",
        xp: 40,
        descoberta: {
            id: "consumo-consciente",
            nome: "Consumo Consciente",
            tipo: "Conhecimento",
            icone: "♻️",
            raridade: "Conhecimento"
        },
        perguntas: [
            {
                pergunta: "Qual ação geralmente vem antes da reciclagem em uma estratégia de redução de impactos?",
                alternativas: [
                    "Reduzir o consumo desnecessário",
                    "Aumentar o descarte",
                    "Comprar produtos para jogar fora",
                    "Misturar todos os resíduos"
                ],
                correta: 0,
                explicacao: "Evitar geração desnecessária de resíduos costuma ser mais eficiente que tratar resíduos depois."
            },
            {
                pergunta: "Consumo consciente significa:",
                alternativas: [
                    "Considerar necessidade, origem, uso e descarte dos produtos",
                    "Nunca utilizar nenhum recurso",
                    "Comprar sempre o maior número possível de produtos",
                    "Ignorar impactos da produção"
                ],
                correta: 0,
                explicacao: "O conceito envolve avaliar consequências ao longo do ciclo de consumo."
            },
            {
                pergunta: "Por que ações individuais e coletivas são complementares?",
                alternativas: [
                    "Há impactos que dependem de escolhas pessoais e outros que exigem empresas, governos e políticas públicas",
                    "Somente indivíduos podem resolver qualquer problema ambiental",
                    "Somente governos possuem responsabilidade",
                    "Hábitos pessoais nunca influenciam demanda e desperdício"
                ],
                correta: 0,
                explicacao: "Problemas ambientais complexos exigem ações em várias escalas."
            }
        ]
    },
    {
        id: "quiz-guardiao-do-cerrado",
        artigoId: "guardiao-do-cerrado",
        titulo: "Prova Final do Guardião",
        descricao: "Mostre que você compreendeu o que significa proteger o Cerrado.",
        icone: "🛡️",
        dificuldade: "hard",
        xp: 100,
        descoberta: {
            id: "guardiao-cerrado",
            nome: "Guardião do Cerrado",
            tipo: "Conhecimento",
            icone: "🛡️",
            raridade: "Lendária"
        },
        perguntas: [
            {
                pergunta: "Um estudante deseja ajudar na conservação do Cerrado, mas mora em uma grande cidade. Qual interpretação melhor representa o conceito de ser um Guardião?",
                alternativas: [
                    "A conservação também envolve aprender, consumir com responsabilidade, compartilhar informação confiável e apoiar decisões que protejam o bioma",
                    "Somente pessoas que vivem fisicamente dentro de uma unidade de conservação podem contribuir",
                    "A única ação ambiental válida é trabalhar profissionalmente como biólogo",
                    "Conhecimento e comportamento cotidiano não possuem relação com conservação"
                ],
                correta: 0,
                explicacao: "Participação ambiental ocorre de muitas formas e não depende de profissão ou local de residência."
            },
            {
                pergunta: "Ao encontrar nas redes sociais uma informação alarmante sobre o Cerrado sem fonte identificável, qual atitude é mais coerente com educação ambiental responsável?",
                alternativas: [
                    "Verificar fontes confiáveis antes de compartilhar e distinguir evidência científica de afirmações sem sustentação",
                    "Compartilhar imediatamente porque mensagens alarmantes sempre ajudam a conservação",
                    "Ignorar qualquer informação científica por ser complexa",
                    "Modificar os dados para tornar a publicação mais convincente"
                ],
                correta: 0,
                explicacao: "Conservação também depende da circulação de informações corretas e verificáveis."
            },
            {
                pergunta: "Qual princípio resume melhor a jornada proposta pelo Guardiões do Cerrado?",
                alternativas: [
                    "Conhecer relações ecológicas permite compreender por que proteger espécies isoladas não basta sem conservar processos, habitats e conexões",
                    "Conservação consiste apenas em memorizar nomes de animais",
                    "Uma espécie carismática pode substituir toda a biodiversidade do ecossistema",
                    "O Cerrado pode ser protegido sem considerar água, solo, cultura ou sociedade"
                ],
                correta: 0,
                explicacao: "A conservação depende de uma visão integrada dos organismos, processos ecológicos e sociedade."
            }
        ]
    }
];

window.quizzes = quizzes;

window.buscarQuizPorId = function(id) {
    return quizzes.find(quiz => quiz.id === id);
};

window.buscarQuizPorArtigo = function(artigoId) {
    return quizzes.find(quiz => quiz.artigoId === artigoId);
};

window.buscarQuizzesPorDificuldade = function(dificuldade) {
    if (dificuldade === "todos") {
        return quizzes;
    }

    return quizzes.filter(
        quiz => quiz.dificuldade === dificuldade
    );
};

window.pesquisarQuizzes = function(texto) {
    const pesquisa = String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

    if (!pesquisa) {
        return quizzes;
    }

    return quizzes.filter(quiz => {
        const conteudo = `
            ${quiz.titulo}
            ${quiz.descricao}
            ${quiz.dificuldade}
        `
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

        return conteudo.includes(pesquisa);
    });
};

window.obterTotalQuizzes = function() {
    return quizzes.length;
};

window.obterTotalPerguntas = function() {
    return quizzes.reduce(
        (total, quiz) => total + quiz.perguntas.length,
        0
    );
};