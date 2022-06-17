// 4. Crie uma página web que possua um formulário com 2 campos, um do tipo textarea e um 
// botão, de forma que: --> ok
// a. A área de texto deve permitir ao usuário inserir um texto que posteriormente será 
// convertido em um objeto;
// b. Ao clicar no botão deverá:
// i. Exibir um erro caso não seja possível converter o texto em um objeto 
// JavaScript (JSON.parse), capturando o erro por meio da estrutura ‘try...catch’;
// ii. Caso seja possível a conversão:
// 1. Exibir uma mensagem ‘Parsable JSON string!’;
// 2. Mostrar no console o objeto.

const myForm = document.getElementById("myForm");
const texto = document.getElementById("areaText");
const botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    try {
        const obj = JSON.parse(texto.value);
        console.log(obj);
        alert("Parsable JSON string!");
    } catch (error) {
        console.log(error);
        alert("Not parsable JSON string!");
    }
});


//OBS: para ser possível a conversão, o texto deve estar no formato JSON, 
//ou seja, {"a":1,"b":2}; 


