const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
};

pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
    (obj) => {
        const nome = document.createElement("h1")
        nome.innerHTML = obj.nome;

        document.body.appendChild(nome);

        const imagem = document.createElement("img");
        imagem.src = obj.imagem;
        imagem.alt = `foto de ${obj.nome}`

        document.body.appendChild(imagem);

        const no_botafogo_desde = document.createElement("p");
        no_botafogo_desde.innerHTML = `Joga no botafogo desde: ${obj.no_botafogo_desde}`
        document.body.appendChild(no_botafogo_desde);
    
        const nascimento = document.createElement("h2");
        nascimento.innerHTML = `Data de nascimento: ${obj.nascimento}`
        document.body.appendChild(nascimento);
    
        const naturalidade = document.createElement("h3");
        naturalidade.innerHTML = `Naturalidade: ${obj.naturalidade}`
        document.body.appendChild(naturalidade);
        
        const descri = document.createElement("p")
        descri.innerHTML = obj.detalhes;
        document.body.appendChild(descri);

    } 
);
