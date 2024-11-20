
 const exibeDetalhesJogador = (atleta) => {
    const container = document.getElementById('atleta-container');
    container.innerHTML = '';
        
    const pagina = document.createElement("div");
    pagina.classList.add("pagina");
        
    const foto = document.createElement("div");
    foto.classList.add("foto");
        
    const info = document.createElement("div");
    info.classList.add("info");
        
    const nome = document.createElement("h1");
    nome.innerHTML = atleta.nome;
    pagina.appendChild(nome);
        
    const imagem = document.createElement("img");
    imagem.src = atleta.imagem;
    foto.appendChild(imagem);
    pagina.appendChild(foto);
        
    const posicao = document.createElement("h3");
    posicao.innerHTML = `Posição: ${atleta.posicao}`;
    info.appendChild(posicao);
        
    const nJogos = document.createElement("h3");
    nJogos.innerHTML = `Número de jogos: ${atleta.n_jogos}`;
    info.appendChild(nJogos);
        
    if (atleta.altura !== "") {
        const altura = document.createElement("h3");
        altura.innerHTML = `Altura: ${atleta.altura}`;
        info.appendChild(altura);
        }
        
        const no_botafogo_desde = document.createElement("h3");
        no_botafogo_desde.innerHTML = `Joga no Botafogo desde: ${atleta.no_botafogo_desde}`;
        info.appendChild(no_botafogo_desde);
        
        const nascimento = document.createElement("h3");
        nascimento.innerHTML = `Data de nascimento: ${atleta.nascimento}`;
        info.appendChild(nascimento);
        
        const naturalidade = document.createElement("h3");
        naturalidade.innerHTML = `Naturalidade: ${atleta.naturalidade}`;
        info.appendChild(naturalidade);
        
        const descricao = document.createElement("p");
        descricao.innerHTML = atleta.detalhes;
        info.appendChild(descricao);
        
        pagina.appendChild(info);
        container.appendChild(pagina);
        
        const linkVoltar = document.createElement("a");
        linkVoltar.href = "index.html";
        linkVoltar.innerHTML = "Voltar à lista";
        container.appendChild(linkVoltar);
        };
        
        const obterIdJogador = () => {
            const params = new URLSearchParams(window.location.search);
            return parseInt(params.get("id"));
        };
        
        if (sessionStorage.getItem("auth") === 'true') {
            const id = obterIdJogador();
            if (id) {
                pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then((dados) => {
                    if (dados.id) {
                        exibeDetalhesJogador(dados);
                    } else {
                        document.body.innerHTML = "<h1>Falha ao carregar atleta!</h1> <a href='index.html'>Voltar</a>";
                    }
                });
            } else {
                buscarJogadores('all');
            }
        } else {
            document.body.innerHTML = "<h1>Você precisa estar logado.</h1> <a href='index.html'>Voltar</a>";
        }
        
        imagem.alt = `Foto de ${jogador.nome}`;
        jogadorDiv.appendChild(imagem);

        const descricao = document.createElement("p");
        descricao.innerHTML = jogador.detalhes;
        jogadorDiv.appendChild(descricao);

        container.appendChild(jogadorDiv);

