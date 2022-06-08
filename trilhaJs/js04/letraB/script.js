// Crie uma página web que possibilite:
// A inserção de um valor mínimo inteiro;
// A inserção de um valor máximo inteiro;
// Clicar em um botão de sortear que ao ser clicado, exiba um valor entre o mínimo e o máximo colocado pelo usuário;
// Observação: verificar se os dados colocados são inteiros numéricos usando o ‘isNaN()’ e ‘parseInt()’ e, caso não sejam numéricos,
// informe ao usuário que os valores inseridos não são numéricos inteiros. Verificar também se o valor mínimo é menor que o valor máximo
// e, caso não seja, exiba uma menagem de erro.

const formB = document.getElementById("myFormB");
const n1 = document.getElementById("n1Min");
const n2 = document.getElementById("n2Max");
let result = "";

function calculatorInteiros() {
  let n1MinValue = parseInt(n1.value);
  let n2MaxValue = parseInt(n2.value);

  if (n1MinValue > n2MaxValue) {
    result = "ordem inválida, tente Novamente";
  } else if (isNaN(n1MinValue) || isNaN(n2MaxValue)) {
    result = "Isso não é um Número, tente Novamente";
  } else if (n1.value == parseInt(n1.value) && n2.value == parseInt(n2.value)) {
    result =
      "O valor entre o mínimo e o máximo é: " +
      Math.round(Math.random() * (n1MinValue - n2MaxValue) + n2MaxValue);
  } else {
    result = "Isso não é um inteiro";
  }
  return result;
}

formB.addEventListener("submit", function (event) {
  calculatorInteiros();
  event.preventDefault();
  n1.value = "";
  n2.value = "";
  document.getElementById("result").innerHTML = result;
  return console.log(result);
});
