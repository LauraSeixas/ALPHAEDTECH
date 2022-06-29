const buttonNumPrimos = document.querySelector('#calculeNumerosPrimos');
const inputNumero = document.querySelector('#numerosPrimos');
const resultado = document.querySelector('#result');
//Crie uma função que encontre os números primos existentes entre 0 e 100000.

function calculeNumerosPrimos() {

    let numero = inputNumero.value;
    let numeroPrimo = [];
    if (numero > 100000 || numero < 0 || numero == ''|| parseInt(numero) != numero) {
        alert('O número deve ser menor que 100000, maior que 0 e um número inteiro');
    } else { 
    for (let i = 0; i <= numero; i++) {
        let contador = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                contador++;
            }
        }
        if (contador == 2) {
            numeroPrimo.push(i);
        }
    }
}
    resultado.innerHTML = numeroPrimo;
}

buttonNumPrimos.addEventListener('click', calculeNumerosPrimos);
