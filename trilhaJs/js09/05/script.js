// 5. Utilizando as funções dos exercícios 1, 2 e 3, crie uma função exiba o valor inteiro da divisão 
// de dois valores inteiros positivos, de forma que:
// a. Não se deve utilizar estrutura de looping (for, while, do ...);
// b. Não se deve utilizar Math ou funções de terceiros;
// c. Não se deve utilizar operações de soma, subtração e multiplicação (‘+’ ou ‘-‘ ou ‘*’), 
// isto é, se desejar somar ou subtrair ou multiplicar, utilizar as funções criadas nos 
// exercícios 1, 2 e 3;
// d. Caso seja impossível realizar soma ou subtração (capturar o erro se existir), deve-se 
// emitir um erro (throw) do tipo `[divide] Impossible to divice ${num1} / ${num2}`, ou 
// caso o denominador seja zero, `[divide] Division by zero`.
// e. Dica: utilizar chamada de função recursiva.


const myForm = document.querySelector("#myForm");
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const erroCapturado = document.getElementById("erroCapturado");
const button = document.getElementById("button");

let num1Value, num2Value, result, count;


function sumIntergers(num1Value, num2Value) {
    if (num1Value === parseInt(num1Value) && num2Value === parseInt(num2Value)) {
        return num1Value + num2Value;
    } else {
        throw `[sum] Impossible to sum ${num1}  + ${num2}`;
    }
}

function subtract(num1Value, num2Value) {
    if (num1Value < num2Value) {
        throw `[subtract] Impossible to subtract ${num1Value} - ${num2Value}`;
    } else {
        return sumIntergers(num1Value, sumIntergers(~num2Value, 1));

    }
}


function division(count, num2Value) {
    console.log(num1Value, num2Value)
    if (num1Value > 0 && num2Value > 0) {
      
        if (count >= num2Value) {
            result = sumIntergers(result, 1);
            console.log(result)
            count = subtract (count, num2Value)
            return division(count, num2Value);
        } else if (count < num2Value && count > 0) {
            return `O quociente é: ${result} e o resto é: ${count}`;
        } else {
            return result;
        }
    } else {
        throw `[divide] Impossible to divice ${num1} / ${num2} or [divide] Division by zero`;
    }
}


button.addEventListener("click", function (event) {
    num1Value = parseFloat(num1.value);
    num2Value = parseFloat(num2.value);
    count = num1Value;
    result = 0;

    try {
        return erroCapturado.innerHTML = division(count, num2Value);
    }
    catch (error) {
        erroCapturado.innerHTML = error;
        console.log(error);
    }
    event.preventDefault();
    num1.value = "";
    num2.value = "";
});
