// 4. Utilizando as funções do exercício 1, 2 e 3, crie uma função que exponencie dois valores
// inteiros positivos, de forma que:
// a. Não se deve utilizar estrutura de looping (for, while, do ...);
// b. Não se deve utilizar Math ou funções de terceiros;
// c. Não se deve utilizar operações de soma, subtração e multiplicação (‘+’ ou ‘-‘ ou ‘*’),
// isto é, se desejar somar ou subtrair ou multiplicar, utilizar as funções criadas nos
// exercícios 1, 2 e 3;
// d. Caso seja impossível realizar soma ou subtração (capturar o erro se existir), deve-se
// emitir um erro (throw) do tipo `[multiply] Impossible to multiply ${num1} * ${num2}`
// e. Dica: utilizar chamada de função recursiva.

const myForm = document.querySelector("#myForm");
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const erroCapturado = document.getElementById("erroCapturado");
const button = document.getElementById("button");

let num1Value, num2Value, result, multiResult, myCount;

function sumIntergers(num1Value, num2Value) {
  if (num1Value === parseInt(num1Value) && num2Value === parseInt(num2Value)) {
    return num1Value + num2Value;
  } else {
    throw `[sum] Impossible to sum ${num1} + ${num2}`;
  }
}

function subtract(num1Value, num2Value) {
  if (num1Value < num2Value) {
    throw `[subtract] Impossible to subtract ${num1Value} - ${num2Value}`;
  } else {
    return sumIntergers(num1Value, sumIntergers(~num2Value, 1));
  }
}

function multiply(num1Value, count) {
  if (num1Value >= 0 && count >= 0) {
    console.log("multiResult", multiResult, "count", count, "num1Value", num1Value);
    if (num1Value === 0) {
      return 0;
    } else if (count > 0) {
      count = subtract(count, 1);
      multiResult = sumIntergers(multiResult, num1Value);
      return multiply(num1Value, count);
    } else {
      return multiResult;
    }
  } else {
    throw `[multiply] Impossible to multiply ${num1Value} * ${num2Value}`;
  }
}

function exponencie(num1Value, num2Value) {
  
  if (num1Value >= 0 && num2Value >= 0) {
    if (num2Value === 1) {
      return num1Value;
    } else if (myCount < num2Value) {
      console.log("else if", num1Value, num2Value);
      myCount = sumIntergers(myCount, 1);
      console.log("myCount", myCount);
      console.log("num1Value", num1Value, "result", result);
      multiResult = 0;
      result = multiply(result, num1Value);
      console.log("result", result);
      return exponencie(num1Value, num2Value);
    }else if (myCount === num2Value) {
      return result
    }
  }else {
    throw `[exponencie] Impossible to exponencie ${num1Value} ^ ${num2Value}`;
  }
}

button.addEventListener("click", function (event) {
  num1Value = parseFloat(num1.value);
  num2Value = parseFloat(num2.value);
  multiResult = 0;
  result = 1;
  myCount = 0

  try {
    return (erroCapturado.innerHTML = exponencie(num1Value, num2Value));
  } catch (error) {
    erroCapturado.innerHTML = error;
    console.log(error);
  }
  event.preventDefault();
  num1.value = "";
  num2.value = "";
});
