const buttonPi = document.querySelector('#calculePi');
const inputNumero = document.querySelector('#valorPi');
const resultado = document.querySelector('#result');

//Crie uma função que calcule o valor do número PI, utilizando a série de Nilakantha, com uma 
//precisão de 100 casas após a vírgula

function calculePi(){
    let i = 1n;
    let x = 3n * (10n ** 1020n);
    let pi = x

    while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
    }
    return (pi / (10n ** 20n));
}

buttonPi.addEventListener('click', () => {
    resultado.innerHTML = calculePi();
    
});