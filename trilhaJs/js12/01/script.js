

const numberSelected = document.getElementById('fatorialAndEuler');

const buttonFatorial = document.getElementById('calculateFatorial');
const buttonEuler = document.getElementById('calculateEuler');

let result = document.getElementById('result');
let fatorialResult = 1;
let eulerResult = 0;
let numberSelectedBigIntValue;

// 1. Crie uma função que calcule o fatorial de um número  
function fatorial(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * fatorial(num - 1);
    }
}
buttonFatorial.addEventListener('click', () => {
    numberSelectedBigIntValue = parseInt(numberSelected.value);
    fatorialResult = fatorial(numberSelectedBigIntValue);
    result.innerHTML = `O fatorial de ${numberSelectedBigIntValue} é ${fatorialResult}!`;
});

// calcule o número de Euler de forma aproximada por meio da série que o representa.
function euler(n) {
    return (1 + 1/n)**n
 }
buttonEuler.addEventListener('click', () => {

    numberSelectedBigIntValue = parseInt(numberSelected.value);
    eulerResult = euler(numberSelectedBigIntValue);
    result.innerHTML = `O número de Euler de ${numberSelectedBigIntValue} é ${eulerResult}!`;
    console.log(euler(numberSelectedBigIntValue));

});
