// Crie uma página web que possibilite:
// Ao clicar em um botão ‘sortear’ exiba um resultado informando se no sorteio exibe uma pessoa conforme o censo IBGE disponível na referência;
// Verificar se a pessoa é um ‘homem’ ou ‘mulher’;
// Verificar se a pessoa é idosa ou não.
// Observação: o resultado deve obedecer a proporção entre homens e mulheres e idosos em sua análise.

const formD = document.getElementById("myFormD");
const button = document.getElementById("button");
const resultado = document.getElementById("result");
button.addEventListener("click", (e) => clicar(e));

function clicar(e) {
  e.preventDefault();
  const numero = Math.random() * 101;
  console.log(numero.toFixed(1));
  if (numero.toFixed(1) < 8.6 && numero.toFixed(1) >= 0) {
    resultado.innerHTML = `Parabéns, você é uma senhorinha`;
  } else if (numero.toFixed(1) >= 8.6 && numero.toFixed(1) < 16.7) {
    resultado.innerHTML = `Parabéns, você é um senhor`;
  } else if (numero.toFixed(1) >= 16.7 && numero.toFixed(1) < 56.9) {
    resultado.innerHTML = `Parabéns, você é um senhor xovem, que escuta kpop`;
  } else {
    resultado.innerHTML = `Parabéns, você é uma senhorita xovem, que escuta kpop`;
  }
}
// M = 51.7% H = 48.3% 16.7% são idosos ->
// mulheres jovens = 43.0661% homens jovens = 40.2339%, 8.0661% de idosos homens e 8.6339% de mulheres
