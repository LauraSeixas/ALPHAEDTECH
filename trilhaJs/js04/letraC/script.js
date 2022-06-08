// Crie uma página web que possibilite:
// A inserção de um valor numérico não inteiro;
// Clicar em um botão que ao ser clicado exiba a informação do menor número inteiro do valor inserido pelo usuário e a
// informação do maior número inteiro do valor inserido pelo usuário.
// Observação: verificar se o valor inserido pelo usuário é do tipo numérico e, caso contrário, mostre ao usuário uma mensagem de erro.
const formC = document.getElementById("myFormC");
const n1 = document.getElementById("n1");
let result = "";

function calculatorNaoInteiros() {
  let n1Value = n1.value;

  if (n1Value.includes(",")) {
    n1Value = parseFloat(n1Value.replace(",", "."));
  } else {
    n1Value = parseFloat(n1Value);
  }

  if (isNaN(n1Value)) {
    result = "Isso não é um Número";
  } else if (Number.isInteger(n1Value)) {
    result = "Isso é um Número inteiro, tente Novamente";
  } else {
    result =
      "O Menor número inteiro é " +
      Math.floor(n1Value) +
      "\ne o Maior número inteiro é " +
      Math.ceil(n1Value);
  }
  return result;
}

formC.addEventListener("submit", function (event) {
  calculatorNaoInteiros();
  event.preventDefault();
  n1.value = "";
  document.getElementById("result").innerHTML = result;
  return console.log(result);
});
