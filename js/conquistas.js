(function () {
    const CHAVE_CONQUISTAS = "guardioesConquistas";

    const conquistas = [
        {
            id: "primeiro-passo",
            nome: "Primeiro passo",
            descricao: "Conclua seu primeiro artigo.",
            icone: "🌱",
            categoria: "biblioteca",
            verificar: function (progresso) {
                return progresso.artigos.length >= 1;
            }
        },
        {
            id: "leitor-curioso",
            nome: "Leitor curioso",
            descricao: "Conclua 3 artigos da Biblioteca.",
            icone: "📚",
            categoria: "biblioteca",
            verificar: function (progresso) {
                return progresso.artigos.length >= 3;
            }
        },
        {
            id: "colecionador-iniciante",
            nome: "Colecionador iniciante",
            descricao: "Descubra 3 cartas no Cerradex.",
            icone: "🃏",
            categoria: "cerradex",
            verificar: function (progresso) {
                return progresso.cartas.length >= 3;
            }
        },
        {
            id: "explorador-fauna",
            nome: "Explorador da fauna",
            descricao: "Descubra 3 animais do Cerrado.",
            icone: "🐾",
            categoria: "cerradex",
            verificar: function (progresso, especies) {
                const faunaDescoberta = especies.filter(function (especie) {
                    return (
                        especie.categoria === "fauna" &&
                        progresso.cartas.includes(especie.id)
                    );
                });

                return faunaDescoberta.length >= 3;
            }
        },
        {
            id: "explorador-flora",
            nome: "Explorador da flora",
            descricao: "Descubra 3 plantas do Cerrado.",
            icone: "🌿",
            categoria: "cerradex",
            verificar: function (progresso, especies) {
                const floraDescoberta = especies.filter(function (especie) {
                    return (
                        especie.categoria === "flora" &&
                        progresso.cartas.includes(especie.id)
                    );
                });

                return floraDescoberta.length >= 3;
            }
        },
        {
            id: "guardiao-dedicado",
            nome: "Guardião dedicado",
            descricao: "Alcance uma sequência de 3 dias.",
            icone: "🔥",
            categoria: "sequencia",
            verificar: function (progresso) {
                return progresso.sequencia >= 3;
            }
        },
        {
            id: "guardiao-experiente",
            nome: "Guardião experiente",
            descricao: "Acumule 500 pontos de experiência.",
            icone: "⭐",
            categoria: "experiencia",
            verificar: function (progresso) {
                return progresso.xp >= 500;
            }
        },
        {
            id: "mestre-cerradex",
            nome: "Mestre do Cerradex",
            descricao: "Descubra todas as cartas disponíveis.",
            icone: "🏆",
            categoria: "cerradex",
            verificar: function (progresso, especies) {
                if (especies.length === 0) {
                    return false;
                }

                const cartasValidas = especies.filter(function (especie) {
                    return progresso.cartas.includes(especie.id);
                });

                return cartasValidas.length >= especies.length;
            }
        }
    ];

    function progressoPadrao() {
        return {
            xp: 0,
            artigos: [],
            cartas: [],
            sequencia: 0
        };
    }

    function normalizarProgresso(progresso) {
        const dados = progresso || progressoPadrao();

        return {
            xp: Number(dados.xp) || 0,
            artigos: Array.isArray(dados.artigos)
                ? dados.artigos
                : [],
            cartas: Array.isArray(dados.cartas)
                ? dados.cartas
                : [],
            sequencia: Number(dados.sequencia) || 0
        };
    }

    function obterProgressoAtual() {
        try {
            if (typeof window.obterProgresso === "function") {
                return normalizarProgresso(
                    window.obterProgresso()
                );
            }

            if (typeof obterProgresso === "function") {
                return normalizarProgresso(
                    obterProgresso()
                );
            }
        } catch {
            return progressoPadrao();
        }

        return progressoPadrao();
    }

    function obterEspecies() {
        return Array.isArray(window.especies)
            ? window.especies
            : [];
    }

    function obterConquistasSalvas() {
        try {
            const dados = JSON.parse(
                localStorage.getItem(CHAVE_CONQUISTAS)
            );

            return Array.isArray(dados)
                ? dados
                : [];
        } catch {
            return [];
        }
    }

    function salvarConquistas(ids) {
        const listaSemRepeticao = [...new Set(ids)];

        localStorage.setItem(
            CHAVE_CONQUISTAS,
            JSON.stringify(listaSemRepeticao)
        );
    }

    function conquistaFoiAlcancada(
        conquista,
        progresso,
        especies
    ) {
        try {
            return Boolean(
                conquista.verificar(progresso, especies)
            );
        } catch {
            return false;
        }
    }

    function verificarConquistas() {
        const progresso = obterProgressoAtual();
        const especies = obterEspecies();
        const salvas = obterConquistasSalvas();
        const novasConquistas = [];

        conquistas.forEach(function (conquista) {
            const desbloqueada = conquistaFoiAlcancada(
                conquista,
                progresso,
                especies
            );

            if (
                desbloqueada &&
                !salvas.includes(conquista.id)
            ) {
                salvas.push(conquista.id);
                novasConquistas.push(conquista);
            }
        });

        if (novasConquistas.length > 0) {
            salvarConquistas(salvas);

            novasConquistas.forEach(function (conquista) {
                window.dispatchEvent(
                    new CustomEvent(
                        "conquistaDesbloqueada",
                        {
                            detail: conquista
                        }
                    )
                );
            });
        }

        return novasConquistas;
    }

    function listarConquistas() {
        const progresso = obterProgressoAtual();
        const especies = obterEspecies();
        const salvas = obterConquistasSalvas();

        return conquistas.map(function (conquista) {
            const alcancadaAgora = conquistaFoiAlcancada(
                conquista,
                progresso,
                especies
            );

            return {
                id: conquista.id,
                nome: conquista.nome,
                descricao: conquista.descricao,
                icone: conquista.icone,
                categoria: conquista.categoria,
                desbloqueada:
                    alcancadaAgora ||
                    salvas.includes(conquista.id)
            };
        });
    }

    function obterConquistasDesbloqueadas() {
        return listarConquistas().filter(
            function (conquista) {
                return conquista.desbloqueada;
            }
        );
    }

    function obterConquistaPorId(id) {
        return listarConquistas().find(
            function (conquista) {
                return conquista.id === id;
            }
        ) || null;
    }

    function contarConquistas() {
        const lista = listarConquistas();

        return {
            desbloqueadas: lista.filter(
                function (conquista) {
                    return conquista.desbloqueada;
                }
            ).length,
            total: lista.length
        };
    }

    function limparConquistas() {
        localStorage.removeItem(CHAVE_CONQUISTAS);
    }

    window.sistemaConquistas = {
        listar: listarConquistas,
        verificar: verificarConquistas,
        desbloqueadas: obterConquistasDesbloqueadas,
        obterPorId: obterConquistaPorId,
        contar: contarConquistas,
        limpar: limparConquistas
    };

    verificarConquistas();
})();