//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

  // Atribuição de variável 'numeroSecreto' - ela receberá o valor que receberá a função 'gerarNumeroAleatorio'

function exibirNumeroNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};
  // Todo lugar em que estiver escrito 'tag' será substituído por 'h1' ou 'p'
    // 'tag' - Indica o tipo de elemento HTML que você quer encontrar (por exemplo, h1 para um título ou p para um parágrafo)

  // 'texto' - É o texto que você quer colocar dentro desse elemento

function inicio() {
  exibirNumeroNaTela('h1', 'Jogo do número secreto');
  exibirNumeroNaTela('p', 'Escolha um número entre 1 e 10:');
};

inicio();

let palavraTentativa;

function verificarChute() {
    let chute = document.querySelector('input').value;

    console.log(chute == numeroSecreto);
    if(chute == numeroSecreto) {
      exibirNumeroNaTela('h1', 'Acertou!');
      palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      exibirNumeroNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if(chute < numeroSecreto) {
        exibirNumeroNaTela('p', `O número secreto é maior que ${chute}.`);
      } else {
        exibirNumeroNaTela('p', `O número secreto é menor que ${chute}.`);
      };
      exibirNumeroNaTela('h1', 'Errou!');
      tentativas++
      limparCampo();
    };
};

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
};

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosEscolhidos = listaDeNumerosSorteados.length;
  // length - é usado para obter a quantidade de elementos em uma *lista/array*
// Neste caso, a variável "quantidadeDeElementosEscolhidos" está recebendo o comprimento da lista "listaDeNumerosSorteados"

  if(quantidadeDeElementosEscolhidos == numeroLimite) {
  listaDeNumerosSorteados = [];
  // SE a lista estiver cheia (igual a quantidade suportada pela lista) ela esvaziará
  };
  if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    // push - empurra um item ao final da lista / ao contrário do comando "pop" - tira o último elemento da lista

    console.log(listaDeNumerosSorteados);
    console.log(`Numero Secreto = ${numeroEscolhido}`);
    return numeroEscolhido;

    // return - Irá retornar o valor gerado pelo 'Math.random' à função 'gerarNumeroAleatorio'
  };
  // Irá verificar se o mesmo número foi sorteado consecutivamente.
};

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  limparCampo();
  inicio();
  document.getElementById('reiniciar').setAttribute('disabled', true);
};