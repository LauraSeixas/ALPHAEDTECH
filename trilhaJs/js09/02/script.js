// 2. Utilizando a função do exercício 1, crie uma função em JavaScript  
// que permita a subtração de dois números inteiros positivos, considerando:
// a. O primeiro número é maior ou igual ao segundo número;
// b. Não se deve utilizar estrutura de looping (for, while, do ...);
// c. Não se deve utilizar Math ou funções de terceiros;
// d. Não se deve utilizar operações de soma e subtração (‘+’ ou ‘-‘), isto é, 
// se desejar somar, utilizar a função de soma criada no exercício 1;
// e. Caso seja impossível realizar subtração (capturar o erro se existir), 
// deve-se emitir um erro (throw) do tipo `[subtract] Impossible to subtract ${num1} - ${num2}`;
// f. Dica: utilizar chamada de função recursiva.

const myForm = document.querySelector("#myForm");
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const erroCapturado = document.getElementById("erroCapturado");
const button = document.getElementById("button");

let num1Value, num2Value;

function sumIntergers(num1Value, num2Value) {
    console.log(num1Value, num2Value);
    if (num1Value === parseInt(num1Value) && num2Value === parseInt(num2Value)) {
        return num1Value + num2Value;
    } else {
        throw `[subtract] Impossible to subtract ${num1Value} - ${num2Value}`;
    }

}

function subtract (num1Value, num2Value){
    console.log(~num2Value)
    if (num1Value < num2Value) {
        throw `[subtract] Impossible to subtract ${num1Value} - ${num2Value}`;
    } else {
        return sumIntergers(num1Value, sumIntergers(~num2Value, 1));
        
    }
}


button.addEventListener("click", function (event) {
    num1Value = parseFloat(num1.value);
    num2Value = parseFloat(num2.value);

    try {
        return erroCapturado.innerHTML = subtract(num1Value, num2Value);
    }
    catch (error) {
        erroCapturado.innerHTML = error;
        console.log(error);
    }

    event.preventDefault();

    num1.value = "";
    num2.value = "";
});
