
const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
};


const exibe_jogadores = (jogadores) => {
    const container = document.getElementById('atletas-container');
    container.innerHTML = ''; 

    if (jogadores.length === 0) {
        container.innerHTML = '<p>Nenhum jogador encontrado nesta categoria.</p>';
        return;
    }

    jogadores.forEach((jogador) => {
  
        const jogadorDiv = document.createElement('div');
        jogadorDiv.classList.add('player');

        const nome = document.createElement("h2");
        nome.innerHTML = jogador.nome;
        jogadorDiv.appendChild(nome);

        const imagem = document.createElement("img");
        imagem.src = jogador.imagem;
        imagem.alt = `Foto de ${jogador.nome}`;
        jogadorDiv.appendChild(imagem);

        const descricao = document.createElement("p");
        descricao.innerHTML = jogador.detalhes;
        jogadorDiv.appendChild(descricao);

        container.appendChild(jogadorDiv);
    });
};

const buscarJogadores = (filtro) => {
    let url = '';

    switch (filtro) {
        case 'masculino':
            url = 'https://botafogo-atletas.mange.li/2024-1/masculino';
            break;
        case 'feminino':
            url = 'https://botafogo-atletas.mange.li/2024-1/feminino';
            break;
        case 'all':
            url = 'https://botafogo-atletas.mange.li/2024-1/all';
            break;
        default:
            return;
    }

    pega_json(url).then((dados) => {
        exibe_jogadores(dados);
    });
};

document.getElementById('btn-todos').addEventListener('click', () => buscarJogadores('all'));
document.getElementById('btn-masculino').addEventListener('click', () => buscarJogadores('masculino'));
document.getElementById('btn-feminino').addEventListener('click', () => buscarJogadores('feminino'));

buscarJogadores('all');
