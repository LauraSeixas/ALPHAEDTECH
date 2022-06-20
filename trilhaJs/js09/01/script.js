// 1. Crie uma função em JavaScript que permita a soma de dois números inteiros positivos. Caso 
// não seja possível a soma, emitir um erro (throw) do tipo `[sum] Impossible to sum ${num1} 
// + ${num2}` (‘template string’ no qual num1 é o primeiro parâmetro e num2 é o segundo 
// parâmetro);
const myForm = document.querySelector("#myForm");
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const erroCapturado = document.getElementById("erroCapturado");
const button = document.getElementById("button");
let num1Value, num2Value;


function sumIntergers(num1Value, num2Value) {

    if (num1Value >= 0 && num2Value >= 0 && num1Value === parseInt(num1Value) && num2Value === parseInt(num2Value)) {
        return num1Value + num2Value;
    } else {
        throw `[sum] Impossible to sum ${num1Value} + ${num2Value}`;
    }

}



button.addEventListener("click", function (event) {
    num1Value = parseFloat(num1.value);
    num2Value = parseFloat(num2.value);

    try {
        return erroCapturado.innerHTML = sumIntergers(num1Value, num2Value);
    }
    catch (error) {
        erroCapturado.innerHTML = error;
        console.log(error);
    }

    event.preventDefault();

    num1.value = "";
    num2.value = "";
});

