/*Crie uma página web que peça ao usuário que digite 
a sua idade em 3 campos (DIA, MÊS e ANO), seu gênero 
e, após clicar em um botão de ‘verificar’ informe a 
quantidade de dias (aproximadamente) que faltam para 
a sua morte considerando a expectativa de morte fornecida 
pelo IBGE de 73,1 anos para homens e 80,1 anos para mulheres.*/


const form = document.getElementById("myForm");
const expObj = { woman: 80.1, man: 73.1 }; // atribuí a expectativa de vida aos gêneros
const hoje = Date.now(); //trouxe a data de hoje que já vem em milliseconds

let result = "";


function comparation() {
    let gender = document.querySelector('input[name="gender"]:checked').value; // busquei o gênero, woman or man
    let birthday = document.getElementById("date").value; //busquei a data colocada no input
    let aniver = new Date(birthday).getTime(); //transformei a data inserida em milliseconds
    let dif = (hoje - aniver) / (3.1556926 * 10 ** 10); // fiz a subtração e dividi para transformar milliseconds em years

    if (gender == "woman") {
        result = "você tem mais " + ((expObj.woman - dif) * 365).toFixed(1) + " dias de vida.";
    } else {
        result = "você tem mais " + ((expObj.man - dif) * 365).toFixed(1) + " dias de vida.";
    }
    return result
}

form.addEventListener('submit', function (event) {
    comparation();
    event.preventDefault();
    document.querySelector('input[name="gender"]:checked').value = "";
    document.getElementById("date").value = "";
    document.getElementById("result").innerHTML = result;
    return console.log(result);
});
