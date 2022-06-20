// 3. Utilizando asfunções do exercício 1 e 2, crie uma função que multiplique dois valoresinteiros
// positivos, de forma que:
// a. Não se deve utilizar estrutura de looping (for, while, do ...);
// b. Não se deve utilizar Math ou funções de terceiros;
// c. Não se deve utilizar operações de soma e subtração (‘+’ ou ‘-‘), isto é, se desejar 
// somar ou subtrair, utilizar as funções criadas nos exercícios 1 e 2;
// d. Caso seja impossível realizar soma ou subtração (capturar o erro se existir), deve-se 
// emitir um erro (throw) do tipo `[multiply] Impossible to multiply ${num1} * ${num2}`
// e. Dica: utilizar chamada de função recursiva.

const myForm = document.querySelector("#myForm");
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const erroCapturado = document.getElementById("erroCapturado");
const button = document.getElementById("button");

let num1Value, num2Value, result;


function sumIntergers(num1Value, num2Value) {
    console.log(num1Value, num2Value);
    if (num1Value === parseInt(num1Value) && num2Value === parseInt(num2Value)) {
        return num1Value + num2Value;
    } else {
        throw `[sum] Impossible to sum ${num1} + ${num2}`;
    }
}

function subtract(num1Value, num2Value) {
    console.log(~num2Value)
    if (num1Value < num2Value) {
        throw `[subtract] Impossible to subtract ${num1Value} - ${num2Value}`;
    } else {
        return sumIntergers(num1Value, sumIntergers(~num2Value, 1));

    }
}

function multiply(num1Value, count) {

    if (num1Value >= 0 && count >= 0) {
        if (num1Value === 0) {
            return 0;
        } else if (count > 0) {
            count = subtract(count, 1);
            result = sumIntergers(result, num1Value);
            return multiply(num1Value, count);
        } else {
            return result;
        }
    } else {
        throw `[multiply] Impossible to multiply ${num1Value} * ${num2Value}`;
    }
}


button.addEventListener("click", function (event) {
    num1Value = parseFloat(num1.value);
    num2Value = parseFloat(num2.value);
    result = 0;
    let count = num2Value;

    try {
        return erroCapturado.innerHTML = multiply(num1Value, count);
    }
    catch (error) {
        erroCapturado.innerHTML = error;
        console.log(error);
    }
    event.preventDefault();
    num1.value = "";
    num2.value = "";
});
