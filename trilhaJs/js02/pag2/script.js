/* Crie uma página web que possibilite a comparação do tamanho de duas
‘strings’ e após clicar no botão comparar, mostre o resultado se o tamanho
da primeira string é maior, menor ou igual à segunda string.*/


const form = document.getElementById("myForm");

let text = "";


function comparation() {
    let a = document.getElementById("a").value;
    let lengthA = a.length;
    let b = document.getElementById("b").value;
    let lengthB = b.length;

    if (lengthA > lengthB) {
        text = a + " tem mais letra do que " + b;
    } else if (lengthB > lengthA) {
        text = b + " tem mais letra do que " + a;
    } else {
        text = "possuem a mesma quantidade de letras";
    }
    return text
}

form.addEventListener('submit', function (event) {
    comparation();
    event.preventDefault();
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("result").innerHTML = text;
    return console.log(text);
});
