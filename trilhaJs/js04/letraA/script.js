// Crie uma página web que contenha um formulário que possibilite:
// A inserção pelo usuário de um valor (input type ‘text’) de peso;
// A inserção pelo usuário de um valor (input type ‘text’) de altura;
// Clicar em um botão (input type ‘button’) de calcular;
// Após clicar no botão de calcular exiba o valor do Índice de Massa Corporal calculado;
// Informe também, após clicar no botão calcular, conforme referência desta atividade 
// para o Índice de Massa Corporal, a classificação do IMC.
// Observação: verificar se os dados colocados são numéricos usando o ‘isNaN()’ e, 
// caso não sejam numéricos, informe ao usuário que os valores inseridos não são válidos.

// Crie uma página web que possibilite:
// A inserção de um valor numérico não inteiro;
// Clicar em um botão que ao ser clicado exiba a informação do menor número inteiro do valor inserido pelo usuário e a
// informação do maior número inteiro do valor inserido pelo usuário.
// Observação: verificar se o valor inserido pelo usuário é do tipo numérico e, caso contrário, mostre ao usuário uma mensagem de erro.
const formA = document.getElementById("myFormA");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
let result = "";

function calculatorIMC() {
    let pesoValue = peso.value;
    let alturaValue = altura.value;
    let imc = pesoValue / (alturaValue*alturaValue)

    if (pesoValue.includes(",")) {
        pesoValue = parseFloat(pesoValue.replace(",", "."));
    } else {
        pesoValue = parseFloat(pesoValue);
    }

    if (alturaValue.includes(",")) {
        alturaValue = parseFloat(alturaValue.replace(",", "."));
    } else {
        alturaValue = parseFloat(alturaValue);
    }

    if (isNaN(pesoValue) || isNaN(alturaValue)) {

        result = "Isso não é um Número, tente Novamente";

    } else if (imc < 18.5) {

        result = imc.toFixed(1) + " - Abaixo do peso";

    } else if (imc >= 18.5 && imc <= 24.9) {

        result = imc.toFixed(1) + " - Peso normal";

    } else if (imc >= 25 && imc <= 29.9) {

        result = imc.toFixed(1) + " - Sobrepeso";

    } else if (imc > 30){

        result = imc.toFixed(1) + " - Obesidade";
    }
    return result;
}

formA.addEventListener("submit", function (event) {
    calculatorIMC();
    event.preventDefault();
    peso.value = "";
    altura.value = "";
    document.getElementById("result").innerHTML = result;
    return console.log(result);
});




