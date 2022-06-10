// Utilize a estrutura ‘switch’ e crie uma página web que contenha um formulário que 
// possibilite:
// a. A inserção de um valor inteiro de 0 a 10;
// b. Clicar em um botão e exibir o valor de forma textual;


const form = document.getElementById("myForm");
let nInteiro = document.getElementById("nInteiro");
let result = "";

function numerosInteirosDeZeroAteDez(param) {
    switch (param) {
        case 0:
            result = "Zero";
            break;
        case 1:
            result = "Um";
            break;
        case 2:
            result = "Dois";
            break;
        case 3:
            result = "Três";
            break;
        case 4:
            result = "Quatro";
            break;
        case 5:
            result = "Cinco";
            break;
        case 6:
            result = "Seis";
            break;
        case 7:
            result = "Sete";
            break;
        case 8:
            result = "Oito";
            break;
        case 9:
            result = "Nove";
            break;
        case 10:
            result = "Dez";
            break;
        default:
            result = "Você não digitou um inteiro de zero à dez";
    }
}
form.addEventListener("submit", function (event) {
    let nInteiroValue = parseInt(nInteiro.value);
    numerosInteirosDeZeroAteDez(nInteiroValue);
    event.preventDefault();
    nInteiro.value = "";
    document.getElementById("result").innerHTML = result;
    return console.log(result);
});

