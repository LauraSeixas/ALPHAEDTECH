/* Crie uma página web que contenha um formulário 
que possibilite a comparação de dois ‘números’ 
e após clicar no botão comparar, 
apareça o resultado se o primeiro número é maior, 
menor ou igual ao segundo número;*/


const form = document.getElementById("myForm");

let text = "";

function comparation() {

    let a = document.getElementById("a").value;
    a = parseInt(a);
    let b = document.getElementById("b").value;
    b = parseInt(b);

    if (a > b) {
        text = a + " é maior que " + b;
    } else if (b > a) {
        text = b + " é maior que " + a;
    } else {
        text = "os números são iguais";
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
