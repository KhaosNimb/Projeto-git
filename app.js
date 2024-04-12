let listaNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um numero de 1 a 10');
}

exibirMensagemInicial();

function verificarChute () {
    let chute = document.querySelector('input').value;
   if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
        exibirTextoNaTela('p','O número secreto é maior');
    }
    tentativas++;
    limparCampo();
   } 
} 
    
function gerarNumAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeNumerosNaLista = listaNumerosSorteados.length;
    
   if (quantidadeDeNumerosNaLista == numeroLimite) {
    listaNumerosSorteados = [];
   }

   if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
   }

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}