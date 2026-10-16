const especies = [
    {
        id: "lobo-guara",
        nome: "Lobo-guará",
        nomeCientifico: "Chrysocyon brachyurus",
        categoria: "fauna",
        raridade: "Rara",
        icone: "🐺",
        imagem: "assets/imagens/animais/lobo-guara.jpg",
        descricao: "O maior canídeo da América do Sul e um dos símbolos mais conhecidos do Cerrado.",
        habitat: "Campos, savanas, cerrados e outras paisagens abertas.",
        alimentacao: "Frutos, insetos e pequenos vertebrados.",
        importancia: "Ajuda no equilíbrio das cadeias alimentares e na dispersão de sementes.",
        curiosidade: "Suas pernas longas facilitam a caminhada entre gramíneas altas.",
        artigoId: "lobo-guara",
        artigo: "artigo.html?id=lobo-guara",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "lobo-guara",
            quizId: "quiz-lobo-guara"
        }
    },
    {
        id: "tamandua-bandeira",
        nome: "Tamanduá-bandeira",
        nomeCientifico: "Myrmecophaga tridactyla",
        categoria: "fauna",
        raridade: "Rara",
        icone: "🐾",
        imagem: "assets/imagens/animais/tamandua.jpg",
        descricao: "Um grande mamífero de focinho alongado e língua especializada na captura de insetos.",
        habitat: "Campos, savanas, cerrados e áreas florestadas.",
        alimentacao: "Principalmente formigas e cupins.",
        importancia: "Participa do controle natural de populações de insetos.",
        curiosidade: "O tamanduá-bandeira não possui dentes.",
        artigoId: "tamandua-bandeira",
        artigo: "artigo.html?id=tamandua-bandeira",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "tamandua-bandeira",
            quizId: "quiz-tamandua-bandeira"
        }
    },
    {
        id: "onca-pintada",
        nome: "Onça-pintada",
        nomeCientifico: "Panthera onca",
        categoria: "fauna",
        raridade: "Lendária",
        icone: "🐆",
        imagem: "assets/imagens/animais/onca-pintada.jpg",
        descricao: "O maior felino das Américas e um poderoso predador de topo.",
        habitat: "Matas, cerrados e regiões próximas a rios com boa disponibilidade de presas.",
        alimentacao: "Mamíferos, répteis e outros animais.",
        importancia: "Ajuda a regular populações e manter o equilíbrio das redes alimentares.",
        curiosidade: "Cada onça possui um padrão único de manchas.",
        artigoId: "onca-pintada",
        artigo: "artigo.html?id=onca-pintada",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "onca-pintada",
            quizId: "quiz-onca-pintada"
        }
    },
    {
        id: "tatu-canastra",
        nome: "Tatu-canastra",
        nomeCientifico: "Priodontes maximus",
        categoria: "fauna",
        raridade: "Rara",
        icone: "🐾",
        imagem: "assets/imagens/animais/tatu-canastra.jpg",
        descricao: "O maior tatu existente e um importante engenheiro do ecossistema.",
        habitat: "Cerrados, campos e outras áreas com solos adequados para escavação.",
        alimentacao: "Principalmente formigas e cupins.",
        importancia: "Suas grandes tocas podem servir de abrigo para várias outras espécies.",
        curiosidade: "Suas garras dianteiras são extremamente desenvolvidas.",
        artigoId: "tatu-canastra",
        artigo: "artigo.html?id=tatu-canastra",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "tatu-canastra",
            quizId: "quiz-tatu-canastra"
        }
    },
    {
        id: "seriema",
        nome: "Seriema",
        nomeCientifico: "Cariama cristata",
        categoria: "fauna",
        raridade: "Comum",
        icone: "🐦",
        imagem: "assets/imagens/animais/seriema.jpg",
        descricao: "Ave terrestre conhecida pelo canto forte que ecoa pelos campos.",
        habitat: "Campos, cerrados e outras paisagens abertas.",
        alimentacao: "Insetos, pequenos vertebrados, sementes e outros recursos.",
        importancia: "Participa do controle de pequenos animais e das cadeias alimentares.",
        curiosidade: "Seu canto pode ser ouvido a grandes distâncias.",
        artigoId: "seriema",
        artigo: "artigo.html?id=seriema",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "seriema",
            quizId: "quiz-seriema"
        }
    },
    {
        id: "ema",
        nome: "Ema",
        nomeCientifico: "Rhea americana",
        categoria: "fauna",
        raridade: "Incomum",
        icone: "🪶",
        imagem: "assets/imagens/animais/ema.jpg",
        descricao: "Uma das maiores aves da América do Sul, adaptada à vida em ambientes abertos.",
        habitat: "Campos, savanas e cerrados.",
        alimentacao: "Plantas, sementes, frutos, insetos e pequenos animais.",
        importancia: "Participa da dispersão de sementes e das redes alimentares.",
        curiosidade: "Não voa, mas consegue correr rapidamente.",
        artigoId: "ema",
        artigo: "artigo.html?id=ema",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "ema",
            quizId: "quiz-ema"
        }
    },
    {
        id: "arara-caninde",
        nome: "Arara-canindé",
        nomeCientifico: "Ara ararauna",
        categoria: "fauna",
        raridade: "Incomum",
        icone: "🦜",
        imagem: "assets/imagens/animais/arara-caninde.jpg",
        descricao: "Grande ave azul e amarela que percorre extensas áreas em busca de alimento.",
        habitat: "Matas, cerrados, palmeirais e regiões próximas à água.",
        alimentacao: "Frutos, sementes e castanhas.",
        importancia: "Pode participar da dispersão de sementes.",
        curiosidade: "Seu poderoso bico consegue quebrar sementes bastante resistentes.",
        artigoId: "arara-caninde",
        artigo: "artigo.html?id=arara-caninde",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "arara-caninde",
            quizId: "quiz-arara-caninde"
        }
    },
    {
        id: "veado-campeiro",
        nome: "Veado-campeiro",
        nomeCientifico: "Ozotoceros bezoarticus",
        categoria: "fauna",
        raridade: "Rara",
        icone: "🦌",
        imagem: "assets/imagens/animais/veado-campeiro.jpg",
        descricao: "Cervídeo esguio e veloz adaptado às grandes áreas abertas.",
        habitat: "Campos, savanas e outras formações abertas.",
        alimentacao: "Gramíneas, folhas, brotos e outras partes de plantas.",
        importancia: "Atua como herbívoro e participa das cadeias alimentares.",
        curiosidade: "Os machos adultos podem apresentar galhadas.",
        artigoId: "veado-campeiro",
        artigo: "artigo.html?id=veado-campeiro",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "veado-campeiro",
            quizId: "quiz-veado-campeiro"
        }
    },
    {
        id: "anta",
        nome: "Anta",
        nomeCientifico: "Tapirus terrestris",
        categoria: "fauna",
        raridade: "Rara",
        icone: "🐾",
        imagem: "assets/imagens/animais/anta.jpg",
        descricao: "O maior mamífero terrestre nativo da América do Sul.",
        habitat: "Matas, cerrados e ambientes próximos à água.",
        alimentacao: "Folhas, brotos, frutos e outras partes vegetais.",
        importancia: "Transporta sementes e contribui para a regeneração da vegetação.",
        curiosidade: "É uma excelente nadadora.",
        artigoId: "anta",
        artigo: "artigo.html?id=anta",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "anta",
            quizId: "quiz-anta"
        }
    },
    {
        id: "macaco-prego",
        nome: "Macaco-prego",
        nomeCientifico: "Sapajus libidinosus",
        categoria: "fauna",
        raridade: "Incomum",
        icone: "🐒",
        imagem: "assets/imagens/animais/macaco-prego.jpg",
        descricao: "Primata inteligente conhecido pela habilidade de manipular objetos e resolver problemas.",
        habitat: "Matas e outras formações arborizadas do Cerrado.",
        alimentacao: "Frutos, sementes, invertebrados e pequenos animais.",
        importancia: "Participa da dispersão de sementes e de diversas interações ecológicas.",
        curiosidade: "Algumas populações utilizam pedras como ferramentas.",
        artigoId: "macaco-prego",
        artigo: "artigo.html?id=macaco-prego",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "macaco-prego",
            quizId: "quiz-macaco-prego"
        }
    },
    {
        id: "raposa-do-campo",
        nome: "Raposa-do-campo",
        nomeCientifico: "Lycalopex vetulus",
        categoria: "fauna",
        raridade: "Incomum",
        icone: "🦊",
        imagem: "assets/imagens/animais/raposa-do-campo.jpg",
        descricao: "Pequeno canídeo brasileiro fortemente associado às paisagens abertas.",
        habitat: "Campos, savanas e cerrados.",
        alimentacao: "Insetos, pequenos vertebrados e frutos.",
        importancia: "Ajuda no controle de pequenos animais e pode dispersar sementes.",
        curiosidade: "É bem menor que o lobo-guará.",
        artigoId: "raposa-do-campo",
        artigo: "artigo.html?id=raposa-do-campo",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "raposa-do-campo",
            quizId: "quiz-raposa-do-campo"
        }
    },
    {
        id: "gato-palheiro",
        nome: "Gato-palheiro",
        nomeCientifico: "Leopardus munoai",
        categoria: "fauna",
        raridade: "Rara",
        icone: "🐈",
        imagem: "assets/imagens/animais/gato-palheiro.jpg",
        descricao: "Pequeno felino selvagem associado principalmente aos ambientes campestres.",
        habitat: "Campos e outras formações abertas.",
        alimentacao: "Roedores, aves e outros pequenos vertebrados.",
        importancia: "Ajuda a regular populações de pequenas presas.",
        curiosidade: "Seu comportamento discreto torna sua observação difícil.",
        artigoId: "gato-palheiro",
        artigo: "artigo.html?id=gato-palheiro",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "gato-palheiro",
            quizId: "quiz-gato-palheiro"
        }
    },
    {
        id: "coruja-buraqueira",
        nome: "Coruja-buraqueira",
        nomeCientifico: "Athene cunicularia",
        categoria: "fauna",
        raridade: "Comum",
        icone: "🦉",
        imagem: "assets/imagens/animais/coruja-buraqueira.jpg",
        descricao: "Pequena coruja terrestre que utiliza cavidades no solo como abrigo.",
        habitat: "Campos, cerrados, pastagens e outras áreas abertas.",
        alimentacao: "Insetos e pequenos vertebrados.",
        importancia: "Ajuda no controle de insetos e pequenos animais.",
        curiosidade: "Pode ser observada ativa durante o dia.",
        artigoId: "coruja-buraqueira",
        artigo: "artigo.html?id=coruja-buraqueira",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "coruja-buraqueira",
            quizId: "quiz-coruja-buraqueira"
        }
    },
    {
        id: "tucano-toco",
        nome: "Tucano-toco",
        nomeCientifico: "Ramphastos toco",
        categoria: "fauna",
        raridade: "Incomum",
        icone: "🐦",
        imagem: "assets/imagens/animais/tucano-toco.jpg",
        descricao: "O maior dos tucanos, facilmente reconhecido pelo enorme bico alaranjado.",
        habitat: "Cerrados, matas, bordas de florestas e áreas arborizadas.",
        alimentacao: "Principalmente frutos, além de outros recursos.",
        importancia: "Pode transportar sementes por diferentes regiões.",
        curiosidade: "Apesar do tamanho, seu bico é relativamente leve.",
        artigoId: "tucano-toco",
        artigo: "artigo.html?id=tucano-toco",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "tucano-toco",
            quizId: "quiz-tucano-toco"
        }
    },
    {
        id: "sucuri",
        nome: "Sucuri",
        nomeCientifico: "Eunectes murinus",
        categoria: "fauna",
        raridade: "Rara",
        icone: "🐍",
        imagem: "assets/imagens/animais/sucuri.jpg",
        descricao: "Grande serpente sul-americana fortemente associada a ambientes aquáticos.",
        habitat: "Rios, lagos, brejos e áreas inundáveis.",
        alimentacao: "Diversos vertebrados.",
        importancia: "Como predadora, participa da regulação de populações de outros animais.",
        curiosidade: "É uma excelente nadadora.",
        artigoId: "sucuri",
        artigo: "artigo.html?id=sucuri",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "sucuri",
            quizId: "quiz-sucuri"
        }
    },
    {
        id: "cachorro-do-mato",
        nome: "Cachorro-do-mato",
        nomeCientifico: "Cerdocyon thous",
        categoria: "fauna",
        raridade: "Comum",
        icone: "🐕",
        imagem: "assets/imagens/animais/cachorro-do-mato.jpg",
        descricao: "Canídeo de hábitos flexíveis encontrado em diferentes ambientes brasileiros.",
        habitat: "Cerrados, campos, bordas de mata e outras paisagens.",
        alimentacao: "Frutos, insetos, pequenos vertebrados e outros recursos.",
        importancia: "Participa das redes alimentares e também pode dispersar sementes.",
        curiosidade: "Possui dieta bastante variada.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 2
        }
    },
    {
        id: "quati",
        nome: "Quati",
        nomeCientifico: "Nasua nasua",
        categoria: "fauna",
        raridade: "Comum",
        icone: "🐾",
        imagem: "assets/imagens/animais/quati.jpg",
        descricao: "Mamífero de focinho comprido conhecido por seu comportamento curioso.",
        habitat: "Matas, cerrados e outras regiões arborizadas.",
        alimentacao: "Frutos, insetos, ovos e pequenos animais.",
        importancia: "Participa da dispersão de sementes e das cadeias alimentares.",
        curiosidade: "As fêmeas podem formar grupos sociais numerosos.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 3
        }
    },
    {
        id: "tatu-peba",
        nome: "Tatu-peba",
        nomeCientifico: "Euphractus sexcinctus",
        categoria: "fauna",
        raridade: "Comum",
        icone: "🐾",
        imagem: "assets/imagens/animais/tatu-peba.jpg",
        descricao: "Tatu de hábitos terrestres encontrado em diversas paisagens abertas.",
        habitat: "Campos, cerrados e áreas abertas.",
        alimentacao: "Insetos, raízes, frutos e pequenos organismos.",
        importancia: "Suas escavações movimentam o solo e criam pequenos abrigos.",
        curiosidade: "É conhecido também como tatu-de-seis-cintas.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 4
        }
    },
    {
        id: "jararaca-do-cerrado",
        nome: "Jararaca-do-cerrado",
        nomeCientifico: "Bothrops moojeni",
        categoria: "fauna",
        raridade: "Incomum",
        icone: "🐍",
        imagem: "assets/imagens/animais/jararaca-cerrado.jpg",
        descricao: "Serpente encontrada em regiões do Brasil Central.",
        habitat: "Cerrados, áreas próximas à água e outros ambientes naturais.",
        alimentacao: "Pequenos vertebrados.",
        importancia: "Atua como predadora e integra as cadeias alimentares.",
        curiosidade: "Como outras serpentes, exerce papel importante no controle de pequenas presas.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 5
        }
    },
    {
        id: "papagaio-galego",
        nome: "Papagaio-galego",
        nomeCientifico: "Alipiopsitta xanthops",
        categoria: "fauna",
        raridade: "Rara",
        icone: "🦜",
        imagem: "assets/imagens/animais/papagaio-galego.jpg",
        descricao: "Papagaio brasileiro associado principalmente às regiões de Cerrado.",
        habitat: "Cerrados, áreas arborizadas e palmeirais.",
        alimentacao: "Frutos, sementes e outras partes vegetais.",
        importancia: "Participa das relações entre plantas e animais.",
        curiosidade: "Possui áreas amarelas bastante características na cabeça.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 6
        }
    },
    {
        id: "urubu-rei",
        nome: "Urubu-rei",
        nomeCientifico: "Sarcoramphus papa",
        categoria: "fauna",
        raridade: "Rara",
        icone: "🦅",
        imagem: "assets/imagens/animais/urubu-rei.jpg",
        descricao: "Grande ave necrófaga de aparência marcante.",
        habitat: "Florestas, cerrados e grandes paisagens naturais.",
        alimentacao: "Principalmente carcaças de animais.",
        importancia: "Ajuda na remoção de matéria orgânica e reciclagem de nutrientes.",
        curiosidade: "Possui cabeça bastante colorida quando adulto.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 7
        }
    },
    {
        id: "jaguatirica",
        nome: "Jaguatirica",
        nomeCientifico: "Leopardus pardalis",
        categoria: "fauna",
        raridade: "Rara",
        icone: "🐆",
        imagem: "assets/imagens/animais/jaguatirica.jpg",
        descricao: "Felino de médio porte com pelagem marcada por manchas e faixas.",
        habitat: "Matas, cerrados e outras áreas com cobertura vegetal.",
        alimentacao: "Pequenos e médios vertebrados.",
        importancia: "Atua como predadora e ajuda a regular populações de presas.",
        curiosidade: "Possui hábitos predominantemente noturnos.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 8
        }
    },
    {
        id: "queixada",
        nome: "Queixada",
        nomeCientifico: "Tayassu pecari",
        categoria: "fauna",
        raridade: "Incomum",
        icone: "🐗",
        imagem: "assets/imagens/animais/queixada.jpg",
        descricao: "Mamífero social que pode formar grandes grupos.",
        habitat: "Matas, cerrados e outras paisagens naturais.",
        alimentacao: "Frutos, sementes, raízes e outros recursos vegetais.",
        importancia: "Movimenta sementes e influencia a estrutura da vegetação.",
        curiosidade: "Pode se deslocar em grupos numerosos.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 9
        }
    },
    {
        id: "harpia",
        nome: "Harpia",
        nomeCientifico: "Harpia harpyja",
        categoria: "fauna",
        raridade: "Lendária",
        icone: "🦅",
        imagem: "assets/imagens/animais/harpia.jpg",
        descricao: "Uma das maiores aves de rapina das Américas.",
        habitat: "Grandes áreas florestadas, inclusive formações florestais associadas ao Cerrado.",
        alimentacao: "Principalmente vertebrados arborícolas.",
        importancia: "É uma grande predadora das florestas onde ocorre.",
        curiosidade: "Possui garras extremamente poderosas.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 10
        }
    },
    {
        id: "puma",
        nome: "Onça-parda",
        nomeCientifico: "Puma concolor",
        categoria: "fauna",
        raridade: "Lendária",
        icone: "🐈",
        imagem: "assets/imagens/animais/onca-parda.jpg",
        descricao: "Grande felino com enorme capacidade de adaptação a diferentes ambientes.",
        habitat: "Cerrados, campos, florestas e regiões montanhosas.",
        alimentacao: "Mamíferos e outros vertebrados.",
        importancia: "Predadora importante para o equilíbrio das redes alimentares.",
        curiosidade: "É uma das espécies de mamíferos com maior distribuição nas Américas.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 12
        }
    },
    {
        id: "ipe-amarelo",
        nome: "Ipê-amarelo",
        nomeCientifico: "Handroanthus spp.",
        categoria: "flora",
        raridade: "Incomum",
        icone: "🌼",
        imagem: "assets/imagens/plantas/ipe.jpg",
        descricao: "Árvore famosa pela intensa floração amarela.",
        habitat: "Diferentes formações naturais brasileiras, incluindo o Cerrado.",
        alimentacao: "Produz seu próprio alimento por fotossíntese.",
        importancia: "Suas flores fornecem recursos para polinizadores.",
        curiosidade: "A floração pode acontecer quando a árvore está quase sem folhas.",
        artigoId: "ipe-amarelo",
        artigo: "artigo.html?id=ipe-amarelo",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "ipe-amarelo",
            quizId: "quiz-ipe-amarelo"
        }
    },
    {
        id: "pequi",
        nome: "Pequi",
        nomeCientifico: "Caryocar brasiliense",
        categoria: "flora",
        raridade: "Comum",
        icone: "🟡",
        imagem: "assets/imagens/plantas/pequi.jpg",
        descricao: "Fruto marcante da cultura e culinária do Cerrado.",
        habitat: "Formações naturais do Cerrado.",
        alimentacao: "O pequizeiro realiza fotossíntese.",
        importancia: "Possui valor ecológico, cultural e econômico.",
        curiosidade: "Seu caroço possui numerosos pequenos espinhos.",
        artigoId: "pequi",
        artigo: "artigo.html?id=pequi",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "pequi",
            quizId: "quiz-pequi"
        }
    },
    {
        id: "barbatimao",
        nome: "Barbatimão",
        nomeCientifico: "Stryphnodendron adstringens",
        categoria: "flora",
        raridade: "Incomum",
        icone: "🌿",
        imagem: "assets/imagens/plantas/barbatimao.jpg",
        descricao: "Árvore do Cerrado conhecida também por conhecimentos tradicionais.",
        habitat: "Cerrados e outras formações abertas.",
        alimentacao: "Realiza fotossíntese e absorve água e minerais pelas raízes.",
        importancia: "Faz parte da diversidade vegetal e possui valor cultural.",
        curiosidade: "Sua casca apresenta elevada concentração de taninos.",
        artigoId: "barbatimao",
        artigo: "artigo.html?id=barbatimao",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "barbatimao",
            quizId: "quiz-barbatimao"
        }
    },
    {
        id: "buriti",
        nome: "Buriti",
        nomeCientifico: "Mauritia flexuosa",
        categoria: "flora",
        raridade: "Incomum",
        icone: "🌴",
        imagem: "assets/imagens/plantas/buriti.jpg",
        descricao: "Grande palmeira característica das veredas.",
        habitat: "Veredas, brejos e áreas úmidas.",
        alimentacao: "Produz seu próprio alimento por fotossíntese.",
        importancia: "Oferece alimento e abrigo e está ligado a ambientes ricos em água.",
        curiosidade: "Sua presença costuma indicar solos bastante úmidos.",
        artigoId: "buriti",
        artigo: "artigo.html?id=buriti",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "buriti",
            quizId: "quiz-buriti"
        }
    },
    {
        id: "cagaita",
        nome: "Cagaita",
        nomeCientifico: "Eugenia dysenterica",
        categoria: "flora",
        raridade: "Comum",
        icone: "🍈",
        imagem: "assets/imagens/plantas/cagaita.jpg",
        descricao: "Fruto nativo produzido pela cagaiteira.",
        habitat: "Formações típicas do Cerrado.",
        alimentacao: "A planta produz alimento por fotossíntese.",
        importancia: "Seus frutos alimentam animais e podem ser utilizados por pessoas.",
        curiosidade: "É utilizada no preparo de sucos, doces e outros produtos.",
        artigoId: "cagaita",
        artigo: "artigo.html?id=cagaita",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "cagaita",
            quizId: "quiz-cagaita"
        }
    },
    {
        id: "araticum",
        nome: "Araticum",
        nomeCientifico: "Annona crassiflora",
        categoria: "flora",
        raridade: "Comum",
        icone: "🍃",
        imagem: "assets/imagens/plantas/araticum.jpg",
        descricao: "Fruto aromático e tradicional do Cerrado.",
        habitat: "Campos e cerrados.",
        alimentacao: "Realiza fotossíntese.",
        importancia: "Serve de alimento à fauna e possui valor cultural.",
        curiosidade: "Sua polpa possui aroma e sabor bastante marcantes.",
        artigoId: "araticum",
        artigo: "artigo.html?id=araticum",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "araticum",
            quizId: "quiz-araticum"
        }
    },
    {
        id: "baru",
        nome: "Baru",
        nomeCientifico: "Dipteryx alata",
        categoria: "flora",
        raridade: "Incomum",
        icone: "🌰",
        imagem: "assets/imagens/plantas/baru.jpg",
        descricao: "Árvore nativa cujo fruto abriga a famosa castanha de baru.",
        habitat: "Diferentes regiões do Cerrado.",
        alimentacao: "Produz alimento por fotossíntese.",
        importancia: "Pode unir conservação ambiental e geração de renda sustentável.",
        curiosidade: "A parte conhecida como castanha é a semente do fruto.",
        artigoId: "baru",
        artigo: "artigo.html?id=baru",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "baru",
            quizId: "quiz-baru"
        }
    },
    {
        id: "mangaba",
        nome: "Mangaba",
        nomeCientifico: "Hancornia speciosa",
        categoria: "flora",
        raridade: "Comum",
        icone: "🍈",
        imagem: "assets/imagens/plantas/mangaba.jpg",
        descricao: "Fruto brasileiro produzido pela mangabeira.",
        habitat: "Cerrados e outras formações naturais abertas.",
        alimentacao: "A planta realiza fotossíntese.",
        importancia: "Possui importância ecológica, cultural e econômica.",
        curiosidade: "Sua polpa é bastante macia quando o fruto está maduro.",
        artigoId: "mangaba",
        artigo: "artigo.html?id=mangaba",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "mangaba",
            quizId: "quiz-mangaba"
        }
    },
    {
        id: "lobeira",
        nome: "Lobeira",
        nomeCientifico: "Solanum lycocarpum",
        categoria: "flora",
        raridade: "Comum",
        icone: "🍏",
        imagem: "assets/imagens/plantas/lobeira.jpg",
        descricao: "Planta famosa pela relação de seus frutos com o lobo-guará.",
        habitat: "Áreas abertas e formações do Cerrado.",
        alimentacao: "Produz seu próprio alimento por fotossíntese.",
        importancia: "Seus frutos participam das relações entre plantas e animais.",
        curiosidade: "É também conhecida como fruta-do-lobo.",
        artigoId: "lobeira",
        artigo: "artigo.html?id=lobeira",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "lobeira",
            quizId: "quiz-lobeira"
        }
    },
    {
        id: "sucupira",
        nome: "Sucupira",
        nomeCientifico: "Pterodon emarginatus",
        categoria: "flora",
        raridade: "Incomum",
        icone: "🌳",
        imagem: "assets/imagens/plantas/sucupira.jpg",
        descricao: "Árvore nativa adaptada às condições sazonais do Cerrado.",
        habitat: "Diferentes formações do Cerrado.",
        alimentacao: "Produz matéria orgânica por fotossíntese.",
        importancia: "Participa da estrutura da vegetação e oferece recursos a outros organismos.",
        curiosidade: "O nome popular sucupira pode ser usado para mais de uma espécie.",
        artigoId: "sucupira",
        artigo: "artigo.html?id=sucupira",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "sucupira",
            quizId: "quiz-sucupira"
        }
    },
    {
        id: "copaiba",
        nome: "Copaíba",
        nomeCientifico: "Copaifera spp.",
        categoria: "flora",
        raridade: "Incomum",
        icone: "🌳",
        imagem: "assets/imagens/plantas/copaiba.jpg",
        descricao: "Árvore conhecida pela produção de óleo-resina em seu tronco.",
        habitat: "Diferentes formações brasileiras, incluindo áreas de Cerrado.",
        alimentacao: "Realiza fotossíntese.",
        importancia: "Possui importância ecológica, cultural e econômica.",
        curiosidade: "O nome copaíba representa diferentes espécies do gênero Copaifera.",
        artigoId: "copaiba",
        artigo: "artigo.html?id=copaiba",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "copaiba",
            quizId: "quiz-copaiba"
        }
    },
    {
        id: "jatoba",
        nome: "Jatobá",
        nomeCientifico: "Hymenaea stigonocarpa",
        categoria: "flora",
        raridade: "Incomum",
        icone: "🌳",
        imagem: "assets/imagens/plantas/jatoba.jpg",
        descricao: "Árvore conhecida pelos frutos de casca bastante resistente.",
        habitat: "Cerrados e outras formações naturais.",
        alimentacao: "Produz alimento pela fotossíntese.",
        importancia: "Oferece recursos alimentares para diversos animais.",
        curiosidade: "Seus frutos possuem uma casca externa muito dura.",
        artigoId: "jatoba",
        artigo: "artigo.html?id=jatoba",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "jatoba",
            quizId: "quiz-jatoba"
        }
    },
    {
        id: "murici",
        nome: "Murici",
        nomeCientifico: "Byrsonima spp.",
        categoria: "flora",
        raridade: "Comum",
        icone: "🟠",
        imagem: "assets/imagens/plantas/murici.jpg",
        descricao: "Nome dado a diferentes plantas que produzem pequenos frutos aromáticos.",
        habitat: "Áreas abertas e outras formações do Cerrado.",
        alimentacao: "Realiza fotossíntese.",
        importancia: "Seus frutos alimentam animais e ajudam nas interações de dispersão.",
        curiosidade: "Várias espécies diferentes são chamadas popularmente de murici.",
        artigoId: "murici",
        artigo: "artigo.html?id=murici",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "murici",
            quizId: "quiz-murici"
        }
    },
    {
        id: "sempre-viva",
        nome: "Sempre-viva",
        nomeCientifico: "Eriocaulaceae",
        categoria: "flora",
        raridade: "Rara",
        icone: "🌾",
        imagem: "assets/imagens/plantas/sempre-viva.jpg",
        descricao: "Plantas conhecidas pela aparência duradoura de suas estruturas florais secas.",
        habitat: "Campos e ambientes de altitude do Cerrado.",
        alimentacao: "Produzem alimento por fotossíntese.",
        importancia: "Compõem a diversidade vegetal e participam de relações com polinizadores.",
        curiosidade: "Algumas mantêm sua forma e aparência por muito tempo após secarem.",
        artigoId: "sempre-viva",
        artigo: "artigo.html?id=sempre-viva",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "sempre-viva",
            quizId: "quiz-sempre-viva"
        }
    },
    {
        id: "canela-de-ema",
        nome: "Canela-de-ema",
        nomeCientifico: "Vellozia spp.",
        categoria: "flora",
        raridade: "Rara",
        icone: "🌱",
        imagem: "assets/imagens/plantas/canela-de-ema.jpg",
        descricao: "Planta de aparência peculiar encontrada em ambientes abertos do Cerrado.",
        habitat: "Campos, áreas rochosas e formações abertas.",
        alimentacao: "Produz alimento por fotossíntese.",
        importancia: "Representa as diversas adaptações da flora a ambientes sazonais.",
        curiosidade: "Algumas espécies apresentam grande capacidade de rebrote.",
        artigoId: "canela-de-ema",
        artigo: "artigo.html?id=canela-de-ema",
        desbloqueio: {
            tipo: "artigoQuiz",
            artigoId: "canela-de-ema",
            quizId: "quiz-canela-de-ema"
        }
    },
    {
        id: "pau-terra",
        nome: "Pau-terra",
        nomeCientifico: "Qualea grandiflora",
        categoria: "flora",
        raridade: "Comum",
        icone: "🌳",
        imagem: "assets/imagens/plantas/pau-terra.jpg",
        descricao: "Árvore bastante característica das paisagens do Cerrado.",
        habitat: "Cerrado típico e outras formações savânicas.",
        alimentacao: "Realiza fotossíntese.",
        importancia: "Participa da estrutura da vegetação e fornece recursos para animais.",
        curiosidade: "Apresenta características típicas de árvores adaptadas ao Cerrado.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 2
        }
    },
    {
        id: "mama-cadela",
        nome: "Mama-cadela",
        nomeCientifico: "Brosimum gaudichaudii",
        categoria: "flora",
        raridade: "Incomum",
        icone: "🍊",
        imagem: "assets/imagens/plantas/mama-cadela.jpg",
        descricao: "Planta nativa de porte variável encontrada em formações do Cerrado.",
        habitat: "Cerrados e áreas abertas.",
        alimentacao: "Produz seu próprio alimento por fotossíntese.",
        importancia: "Seus frutos podem fazer parte da alimentação da fauna.",
        curiosidade: "Seu nome popular chama bastante atenção entre as plantas do Cerrado.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 3
        }
    },
    {
        id: "pacari",
        nome: "Pacari",
        nomeCientifico: "Lafoensia pacari",
        categoria: "flora",
        raridade: "Incomum",
        icone: "🌳",
        imagem: "assets/imagens/plantas/pacari.jpg",
        descricao: "Árvore nativa encontrada em diferentes ambientes do Cerrado.",
        habitat: "Cerrados, campos e formações associadas.",
        alimentacao: "Realiza fotossíntese.",
        importancia: "Integra a diversidade vegetal e fornece recursos para organismos.",
        curiosidade: "Também é conhecida por diferentes nomes populares regionais.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 4
        }
    },
    {
        id: "gabiroba",
        nome: "Gabiroba",
        nomeCientifico: "Campomanesia adamantium",
        categoria: "flora",
        raridade: "Comum",
        icone: "🍈",
        imagem: "assets/imagens/plantas/gabiroba.jpg",
        descricao: "Planta do Cerrado conhecida por seus pequenos frutos aromáticos.",
        habitat: "Campos e cerrados.",
        alimentacao: "Produz alimento por fotossíntese.",
        importancia: "Os frutos são consumidos pela fauna e por pessoas.",
        curiosidade: "A gabiroba pode ser usada na preparação de doces, bebidas e outros alimentos.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 5
        }
    },
    {
        id: "pimenta-de-macaco",
        nome: "Pimenta-de-macaco",
        nomeCientifico: "Xylopia aromatica",
        categoria: "flora",
        raridade: "Incomum",
        icone: "🌿",
        imagem: "assets/imagens/plantas/pimenta-de-macaco.jpg",
        descricao: "Espécie vegetal encontrada em formações do Cerrado.",
        habitat: "Savanas e outras áreas naturais do Cerrado.",
        alimentacao: "Realiza fotossíntese.",
        importancia: "Participa da diversidade e estrutura vegetal.",
        curiosidade: "Suas estruturas possuem aroma característico.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 6
        }
    },
    {
        id: "lixeira",
        nome: "Lixeira",
        nomeCientifico: "Curatella americana",
        categoria: "flora",
        raridade: "Comum",
        icone: "🌳",
        imagem: "assets/imagens/plantas/lixeira.jpg",
        descricao: "Árvore conhecida pela textura áspera de suas folhas.",
        habitat: "Savanas e formações abertas do Cerrado.",
        alimentacao: "Produz alimento pela fotossíntese.",
        importancia: "Integra a vegetação e oferece recursos para diferentes organismos.",
        curiosidade: "Suas folhas ásperas inspiraram o nome popular lixeira.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 7
        }
    },
    {
        id: "pau-santo",
        nome: "Pau-santo",
        nomeCientifico: "Kielmeyera coriacea",
        categoria: "flora",
        raridade: "Rara",
        icone: "🌸",
        imagem: "assets/imagens/plantas/pau-santo.jpg",
        descricao: "Árvore característica de paisagens do Cerrado.",
        habitat: "Cerrados e ambientes savânicos.",
        alimentacao: "Produz alimento por fotossíntese.",
        importancia: "Faz parte da diversidade vegetal e das relações com polinizadores.",
        curiosidade: "Suas flores chamam atenção na vegetação do Cerrado.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 8
        }
    },
    {
        id: "chuveirinho-do-cerrado",
        nome: "Chuveirinho-do-cerrado",
        nomeCientifico: "Paepalanthus spp.",
        categoria: "flora",
        raridade: "Rara",
        icone: "🌼",
        imagem: "assets/imagens/plantas/chuveirinho-cerrado.jpg",
        descricao: "Pequena planta de aparência delicada encontrada em campos do Cerrado.",
        habitat: "Campos naturais e regiões abertas.",
        alimentacao: "Realiza fotossíntese.",
        importancia: "Contribui para a enorme diversidade de plantas herbáceas do bioma.",
        curiosidade: "Seu formato delicado lembra pequenos chuveiros naturais.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 9
        }
    },
    {
        id: "arnica-do-cerrado",
        nome: "Arnica-do-cerrado",
        nomeCientifico: "Lychnophora ericoides",
        categoria: "flora",
        raridade: "Rara",
        icone: "🌿",
        imagem: "assets/imagens/plantas/arnica-cerrado.jpg",
        descricao: "Arbusto nativo associado principalmente a ambientes de Cerrado e campos rupestres.",
        habitat: "Campos, cerrados e áreas rochosas.",
        alimentacao: "Produz seu próprio alimento por fotossíntese.",
        importancia: "Integra comunidades vegetais especializadas e possui valor cultural.",
        curiosidade: "É conhecida tradicionalmente em diferentes regiões brasileiras.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 10
        }
    },
    {
        id: "caliandra-do-cerrado",
        nome: "Caliandra-do-cerrado",
        nomeCientifico: "Calliandra dysantha",
        categoria: "flora",
        raridade: "Lendária",
        icone: "🌺",
        imagem: "assets/imagens/plantas/caliandra-cerrado.jpg",
        descricao: "Arbusto de flores vistosas que parece carregar pequenos fogos de artifício vegetais.",
        habitat: "Campos e formações abertas do Cerrado.",
        alimentacao: "Realiza fotossíntese.",
        importancia: "Suas flores oferecem recursos para visitantes e polinizadores.",
        curiosidade: "Suas flores possuem numerosos estames que criam um aspecto muito marcante.",
        desbloqueio: {
            tipo: "nivel",
            nivel: 12
        }
    }
];

window.especies = especies;