
const artigosBiblioteca = [
    {
        id: "lobo-guara",
        titulo: "Lobo-guará: o símbolo do Cerrado",
        categoria: "Fauna",
        icone: "fa-paw",
        resumo: "Conheça o maior canídeo da América do Sul e descubra sua importância para o equilíbrio do Cerrado.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "tamandua-bandeira",
        titulo: "Tamanduá-bandeira: o gigante comedor de formigas",
        categoria: "Fauna",
        icone: "fa-paw",
        resumo: "Descubra como o tamanduá-bandeira vive, se alimenta e ajuda a controlar populações de insetos.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "onca-pintada",
        titulo: "Onça-pintada: a grande predadora",
        categoria: "Fauna",
        icone: "fa-paw",
        resumo: "Conheça uma das maiores predadoras das Américas e sua função na cadeia alimentar.",
        tempo: "6 min",
        xp: 25
    },
    {
        id: "tatu-canastra",
        titulo: "Tatu-canastra: o engenheiro do Cerrado",
        categoria: "Fauna",
        icone: "fa-paw",
        resumo: "Entenda por que as grandes tocas desse animal beneficiam várias outras espécies.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "seriema",
        titulo: "Seriema: a voz dos campos",
        categoria: "Fauna",
        icone: "fa-dove",
        resumo: "Descubra por que o canto da seriema é tão marcante nas paisagens abertas do Cerrado.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "ema",
        titulo: "Ema: a gigante das planícies",
        categoria: "Fauna",
        icone: "fa-feather",
        resumo: "Conheça uma das maiores aves da América do Sul e seus curiosos hábitos.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "arara-caninde",
        titulo: "Arara-canindé: cores sobre o Cerrado",
        categoria: "Fauna",
        icone: "fa-dove",
        resumo: "Saiba como essa ave colorida se alimenta, se reproduz e espalha sementes pela natureza.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "veado-campeiro",
        titulo: "Veado-campeiro: corredor dos campos",
        categoria: "Fauna",
        icone: "fa-paw",
        resumo: "Conheça o mamífero que vive principalmente nas áreas abertas do Cerrado.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "anta",
        titulo: "Anta: jardineira das florestas",
        categoria: "Fauna",
        icone: "fa-paw",
        resumo: "Entenda por que a anta é considerada uma importante dispersora de sementes.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "macaco-prego",
        titulo: "Macaco-prego: inteligência entre as árvores",
        categoria: "Fauna",
        icone: "fa-paw",
        resumo: "Descubra como os macacos-prego utilizam inteligência e ferramentas para sobreviver.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "raposa-do-campo",
        titulo: "Raposa-do-campo: pequena caçadora do Cerrado",
        categoria: "Fauna",
        icone: "fa-paw",
        resumo: "Conheça esse pequeno canídeo brasileiro especializado em viver nas paisagens do Cerrado.",
        tempo: "4 min",
        xp: 20
    },
    {
        id: "gato-palheiro",
        titulo: "Gato-palheiro: felino dos campos",
        categoria: "Fauna",
        icone: "fa-cat",
        resumo: "Descubra os hábitos discretos de um dos felinos menos conhecidos do Cerrado.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "coruja-buraqueira",
        titulo: "Coruja-buraqueira: sentinela do chão",
        categoria: "Fauna",
        icone: "fa-feather-pointed",
        resumo: "Conheça a pequena coruja que utiliza buracos no solo como abrigo.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "tucano-toco",
        titulo: "Tucano-toco: o grande bico do Cerrado",
        categoria: "Fauna",
        icone: "fa-dove",
        resumo: "Entenda como o tucano-toco contribui para espalhar sementes por grandes distâncias.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "sucuri",
        titulo: "Sucuri: gigante das águas",
        categoria: "Fauna",
        icone: "fa-water",
        resumo: "Conheça uma das maiores serpentes do mundo e seu papel nos ambientes aquáticos.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "ipe-amarelo",
        titulo: "Ipê-amarelo: ouro entre as árvores",
        categoria: "Flora",
        icone: "fa-seedling",
        resumo: "Descubra como o ipê-amarelo transforma a paisagem durante a estação seca.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "pequi",
        titulo: "Pequi: sabor e tradição do Cerrado",
        categoria: "Flora",
        icone: "fa-apple-whole",
        resumo: "Conheça um dos frutos mais famosos do Cerrado e sua importância cultural.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "barbatimao",
        titulo: "Barbatimão: uma planta tradicional",
        categoria: "Flora",
        icone: "fa-leaf",
        resumo: "Conheça uma árvore típica do Cerrado utilizada tradicionalmente por diferentes comunidades.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "buriti",
        titulo: "Buriti: a palmeira das veredas",
        categoria: "Flora",
        icone: "fa-tree",
        resumo: "Descubra por que a presença do buriti costuma indicar locais ricos em água.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "cagaita",
        titulo: "Cagaita: pequena fruta do Cerrado",
        categoria: "Flora",
        icone: "fa-apple-whole",
        resumo: "Conheça a cagaita, fruto nativo consumido por animais e pessoas.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "araticum",
        titulo: "Araticum: doce nativo do Cerrado",
        categoria: "Flora",
        icone: "fa-leaf",
        resumo: "Descubra as características e curiosidades de um dos frutos tradicionais do bioma.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "baru",
        titulo: "Baru: a castanha do Cerrado",
        categoria: "Flora",
        icone: "fa-seedling",
        resumo: "Saiba por que o baru ganhou espaço na alimentação e na geração de renda sustentável.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "mangaba",
        titulo: "Mangaba: fruta de sabor marcante",
        categoria: "Flora",
        icone: "fa-apple-whole",
        resumo: "Conheça a mangabeira e sua relação com as comunidades tradicionais brasileiras.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "lobeira",
        titulo: "Lobeira: a fruta preferida do lobo-guará?",
        categoria: "Flora",
        icone: "fa-apple-whole",
        resumo: "Descubra a curiosa relação entre a lobeira e o lobo-guará.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "sucupira",
        titulo: "Sucupira: resistência do Cerrado",
        categoria: "Flora",
        icone: "fa-tree",
        resumo: "Conheça uma árvore adaptada às condições desafiadoras do ambiente do Cerrado.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "copaiba",
        titulo: "Copaíba: a árvore do óleo",
        categoria: "Flora",
        icone: "fa-tree",
        resumo: "Entenda como essa árvore produz um óleo utilizado tradicionalmente por diferentes povos.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "jatoba",
        titulo: "Jatobá: gigante de frutos duros",
        categoria: "Flora",
        icone: "fa-tree",
        resumo: "Conheça as características do jatobá e sua importância para animais e pessoas.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "murici",
        titulo: "Murici: pequeno fruto, grande importância",
        categoria: "Flora",
        icone: "fa-apple-whole",
        resumo: "Descubra como o murici faz parte da alimentação da fauna e das populações locais.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "sempre-viva",
        titulo: "Sempre-vivas: flores que parecem não envelhecer",
        categoria: "Flora",
        icone: "fa-spa",
        resumo: "Conheça plantas famosas por conservar a aparência mesmo depois de secas.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "canela-de-ema",
        titulo: "Canela-de-ema: sobrevivente do fogo",
        categoria: "Flora",
        icone: "fa-seedling",
        resumo: "Descubra como essa planta consegue sobreviver em condições extremas do Cerrado.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "o-que-e-cerrado",
        titulo: "O que é o Cerrado?",
        categoria: "Ecossistema",
        icone: "fa-earth-americas",
        resumo: "Conheça as principais características do segundo maior bioma brasileiro.",
        tempo: "6 min",
        xp: 25
    },
    {
        id: "veredas",
        titulo: "Veredas: caminhos de água no Cerrado",
        categoria: "Ecossistema",
        icone: "fa-droplet",
        resumo: "Descubra como as veredas ajudam a conservar água e abrigam inúmeras espécies.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "mata-de-galeria",
        titulo: "Matas de galeria: florestas junto aos rios",
        categoria: "Ecossistema",
        icone: "fa-tree",
        resumo: "Conheça as formações florestais que acompanham rios e córregos pelo Cerrado.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "campo-limpo",
        titulo: "Campo limpo: um oceano de gramíneas",
        categoria: "Ecossistema",
        icone: "fa-wheat-awn",
        resumo: "Descubra por que uma paisagem quase sem árvores também possui enorme biodiversidade.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "campo-sujo",
        titulo: "Campo sujo: entre gramíneas e arbustos",
        categoria: "Ecossistema",
        icone: "fa-leaf",
        resumo: "Entenda como essa formação mistura plantas baixas, arbustos e pequenas árvores.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "cerradao",
        titulo: "Cerradão: a floresta do Cerrado",
        categoria: "Ecossistema",
        icone: "fa-tree",
        resumo: "Conheça uma formação mais densa e arborizada encontrada dentro do próprio bioma.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "fogo-no-cerrado",
        titulo: "Fogo no Cerrado: inimigo ou parte da natureza?",
        categoria: "Ecossistema",
        icone: "fa-fire",
        resumo: "Entenda a diferença entre incêndios destrutivos e a presença natural do fogo no bioma.",
        tempo: "7 min",
        xp: 30
    },
    {
        id: "estacao-seca",
        titulo: "A estação seca do Cerrado",
        categoria: "Ecossistema",
        icone: "fa-sun",
        resumo: "Descubra como animais e plantas sobrevivem durante meses com pouca chuva.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "estacao-chuvosa",
        titulo: "Quando as chuvas voltam ao Cerrado",
        categoria: "Ecossistema",
        icone: "fa-cloud-rain",
        resumo: "Veja como a chegada das chuvas transforma rapidamente a paisagem.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "berco-das-aguas",
        titulo: "Cerrado: o berço das águas",
        categoria: "Ecossistema",
        icone: "fa-water",
        resumo: "Entenda por que o Cerrado possui enorme importância para grandes bacias hidrográficas brasileiras.",
        tempo: "6 min",
        xp: 25
    },
    {
        id: "desmatamento",
        titulo: "Desmatamento: quando o Cerrado desaparece",
        categoria: "Conservação",
        icone: "fa-tree",
        resumo: "Conheça algumas das principais causas e consequências da perda da vegetação nativa.",
        tempo: "6 min",
        xp: 25
    },
    {
        id: "fragmentacao",
        titulo: "Fragmentação de habitats",
        categoria: "Conservação",
        icone: "fa-puzzle-piece",
        resumo: "Entenda o que acontece quando áreas naturais ficam isoladas umas das outras.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "corredores-ecologicos",
        titulo: "Corredores ecológicos: caminhos para a vida",
        categoria: "Conservação",
        icone: "fa-route",
        resumo: "Descubra como conectar áreas preservadas pode ajudar animais e plantas.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "especies-ameacadas",
        titulo: "Espécies ameaçadas do Cerrado",
        categoria: "Conservação",
        icone: "fa-triangle-exclamation",
        resumo: "Conheça algumas espécies que enfrentam risco devido às mudanças no ambiente.",
        tempo: "6 min",
        xp: 25
    },
    {
        id: "unidades-conservacao",
        titulo: "Unidades de conservação",
        categoria: "Conservação",
        icone: "fa-mountain-sun",
        resumo: "Entenda como parques e outras áreas protegidas ajudam a preservar o Cerrado.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "polinizadores",
        titulo: "Polinizadores: pequenos trabalhadores da natureza",
        categoria: "Conservação",
        icone: "fa-bug",
        resumo: "Descubra como abelhas, aves e outros animais ajudam plantas a se reproduzir.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "sementes",
        titulo: "A viagem das sementes",
        categoria: "Conservação",
        icone: "fa-seedling",
        resumo: "Veja como vento, água e animais espalham sementes por diferentes regiões.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "agua",
        titulo: "Por que proteger a água do Cerrado?",
        categoria: "Conservação",
        icone: "fa-droplet",
        resumo: "Conheça a relação entre vegetação nativa, nascentes e disponibilidade de água.",
        tempo: "5 min",
        xp: 20
    },
    {
        id: "consumo-consciente",
        titulo: "Consumo consciente e preservação",
        categoria: "Conservação",
        icone: "fa-recycle",
        resumo: "Descubra pequenas escolhas do cotidiano que podem diminuir impactos ambientais.",
        tempo: "4 min",
        xp: 15
    },
    {
        id: "guardiao-do-cerrado",
        titulo: "Como se tornar um Guardião do Cerrado",
        categoria: "Conservação",
        icone: "fa-shield-halved",
        resumo: "Conheça atitudes simples para aprender, ensinar e ajudar a proteger esse importante bioma.",
        tempo: "5 min",
        xp: 30
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const areaArtigos = document.getElementById("artigos");
    const pesquisa = document.getElementById("pesquisa");
    const botoesCategorias = document.querySelectorAll(".categorias button");
    const quantidadeResultados = document.getElementById("quantidadeResultados");

    let categoriaAtual = "Todos";

    function normalizarTexto(texto) {
        return String(texto)
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    function obterArtigosConcluidos() {
        try {
            if (typeof obterProgresso === "function") {
                const progresso = obterProgresso();

                if (progresso && Array.isArray(progresso.artigos)) {
                    return progresso.artigos;
                }
            }
        } catch (erro) {
            console.log("Não foi possível ler o progresso.");
        }

        try {
            const progresso = JSON.parse(
                localStorage.getItem("progresso")
            ) || {};

            return Array.isArray(progresso.artigos)
                ? progresso.artigos
                : [];
        } catch (erro) {
            return [];
        }
    }

    function artigoEstaConcluido(id) {
        const concluidos = obterArtigosConcluidos();
        return concluidos.includes(id);
    }

    function criarCardArtigo(artigo) {
        const card = document.createElement("article");
        const concluido = artigoEstaConcluido(artigo.id);

        card.className = "artigo-card";

        if (concluido) {
            card.classList.add("concluido");
        }

        card.innerHTML = `
            <div class="artigo-imagem">

                <span class="artigo-icone">
                    <i class="fa-solid ${artigo.icone}" aria-hidden="true"></i>
                </span>

                <span class="artigo-categoria">
                    ${artigo.categoria}
                </span>

                ${
                    concluido
                        ? `
                            <span class="selo-concluido">
                                <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
                                Concluído
                            </span>
                        `
                        : ""
                }

            </div>

            <div class="artigo-conteudo">

                <h3>${artigo.titulo}</h3>

                <p>${artigo.resumo}</p>

                <div class="artigo-informacoes">

                    <span>
                        <i class="fa-solid fa-clock" aria-hidden="true"></i>
                        ${artigo.tempo}
                    </span>

                    <span>
                        <i class="fa-solid fa-star" aria-hidden="true"></i>
                        +${artigo.xp} XP
                    </span>

                </div>

                <a
                    href="artigo.html?id=${artigo.id}"
                    class="botao-artigo"
                >
                    ${concluido ? "Ler novamente" : "Ler artigo"}

                    <span>
                        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </span>
                </a>

            </div>
        `;

        return card;
    }

    function filtrarArtigos() {
        const termo = pesquisa
            ? normalizarTexto(pesquisa.value)
            : "";

        return artigosBiblioteca.filter(artigo => {
            const categoriaCorreta =
                categoriaAtual === "Todos" ||
                artigo.categoria === categoriaAtual;

            const conteudo = normalizarTexto(
                `${artigo.titulo} ${artigo.resumo} ${artigo.categoria}`
            );

            const pesquisaCorreta = conteudo.includes(termo);

            return categoriaCorreta && pesquisaCorreta;
        });
    }

    function renderizarArtigos() {
        if (!areaArtigos) {
            console.error("Elemento #artigos não encontrado.");
            return;
        }

        const artigos = filtrarArtigos();

        areaArtigos.innerHTML = "";

        if (quantidadeResultados) {
            quantidadeResultados.textContent =
                artigos.length === 1
                    ? "1 artigo encontrado"
                    : `${artigos.length} artigos encontrados`;
        }

        if (artigos.length === 0) {
            areaArtigos.innerHTML = `
                <div class="biblioteca-vazia">

                    <span>
                        <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                    </span>

                    <h3>Nenhum artigo encontrado</h3>

                    <p>
                        Tente pesquisar outro assunto
                        ou escolher outra categoria.
                    </p>

                </div>
            `;

            return;
        }

        artigos.forEach(artigo => {
            const card = criarCardArtigo(artigo);
            areaArtigos.appendChild(card);
        });
    }

    function configurarPesquisa() {
        if (!pesquisa) {
            return;
        }

        pesquisa.addEventListener("input", renderizarArtigos);
    }

    function configurarCategorias() {
        botoesCategorias.forEach(botao => {
            botao.addEventListener("click", () => {
                botoesCategorias.forEach(outroBotao => {
                    outroBotao.classList.remove("ativo");
                });

                botao.classList.add("ativo");

                categoriaAtual = botao.dataset.categoria || "Todos";

                renderizarArtigos();
            });
        });
    }

    configurarPesquisa();
    configurarCategorias();
    renderizarArtigos();

    console.log(
        "Biblioteca carregada:",
        artigosBiblioteca.length,
        "artigos."
    );
});
