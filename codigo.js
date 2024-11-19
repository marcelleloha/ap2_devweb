import { hex_sha256 } from './sha256-min.mjs';

function configuraBotao(botao) {
  botao.style.display = 'flex';
  botao.style.border = '1px solid #ccc';
  botao.style.justifyContent = 'center';
  botao.style.alignItems = 'center';
  botao.style.padding = '0.8em 1.2em';
  botao.style.marginTop = '1em';
}

const testaSenha = (senha) => {
  const senhaCorreta = 'LIBERTADORES';
  if (hex_sha256(senha) === hex_sha256(senhaCorreta)) {
    sessionStorage.setItem('auth', 'true');
    window.location.href = 'detalhes.html';  // Redireciona para a página de detalhes
  } else {
    alert('Senha incorreta!');
  }
};

const configuraEntrada = () => {
  sessionStorage.setItem('screen', 'login');
  document.body.innerHTML = '';

  const container = document.createElement('div');
  container.id = 'container-entrada';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.flexDirection = 'column';

  const titulo = document.createElement('h1');
  titulo.innerHTML = 'Bem-vindo!';
  titulo.style.margin = '0';

  const texto = document.createElement('p');
  texto.innerHTML = 'Criado com objetivos exclusivamente didáticos para a disciplina Desenvolvimento Web do Ibmec Rio.';
  texto.style.fontSize = '1em';
  texto.style.marginBottom = '1em';

  const inputSenha = document.createElement('input');
  inputSenha.id = 'input-senha';
  inputSenha.placeholder = 'Digite a senha';
  inputSenha.type = 'password';
  inputSenha.style.padding = '0.5em';
  inputSenha.style.marginBottom = '1em';

  const senhaCorretaDisplay = document.createElement('p');
  senhaCorretaDisplay.innerHTML = `Senha correta: <strong>LIBERTADORES</strong>`;
  senhaCorretaDisplay.style.fontSize = '1.2em';
  senhaCorretaDisplay.style.marginBottom = '1em';
  senhaCorretaDisplay.style.color = 'pink';

  const botaoLogin = document.createElement('button');
  botaoLogin.innerHTML = 'Entrar';
  botaoLogin.onclick = () => testaSenha(inputSenha.value);

  container.appendChild(titulo);
  container.appendChild(texto);
  container.appendChild(inputSenha);
  container.appendChild(senhaCorretaDisplay);
  container.appendChild(botaoLogin);

  document.body.appendChild(container);
};

configuraEntrada();
