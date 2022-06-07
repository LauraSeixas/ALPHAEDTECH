// 1. Utilizando o conhecimento obtido na aula anterior, crie novamente três arquivos 
// (“index.html”, “index.css” e “index.js”) e faça um formulário com dois campos e um botão 
// que, ao ser clicado, exiba conforme o HTML select selecionado a “soma”, “subtração”, 
// “multiplicação” e “divisão” dos campos tanto na página web quanto no console do 
// navegador. 
// a. Observação:
// i. Elemento1: “operando1”
// ii. Elemento2: “operando2”
// iii. HTML select: “operador” com a possibilidade de selecionar “soma”, 
// “subtração”, “multiplicação” e “divisão”
// iv. Botão: “calcular” ao ser clicado exibe o cálculo conforme operador 
// selecionado.
// v. O formulário deve estar bem formatado, com título e ser apresentado como 
// um “Card” (utilize seu conhecimento de ‘flexbox’ e CSS para isso)

const form = document.getElementById("myForm");
const operadores = document.getElementById("operadores");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
let result = "";

function calculator() {

    let operadorValue = operadores.value;
    let n1Value = parseFloat(n1.value);
    let n2Value = parseFloat(n2.value);

    if (operadorValue == "addition") {
        result = n1Value + n2Value;
    } else if (operadorValue == "subtraction") {
        result = n1Value - n2Value;
    } else if (operadorValue == "multiplication") {
        result = n1Value * n2Value;
    } else {
        result = n1Value / n2Value;
    }
    return result;
}
form.addEventListener("submit", function (event) {
    calculator();
    event.preventDefault();
    operadores.value = "";
    n1.value = "";
    n2.value = "";
    document.getElementById("result").innerHTML = result;
    return console.log(result);
});