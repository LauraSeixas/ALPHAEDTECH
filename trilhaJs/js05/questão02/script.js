// Utilize a estrutura ‘switch’ e crie uma página web que contenha um formulário que 
// possibilite:
// a. O usuário selecionar uma data por meio de um formulário HTML do tipo date;
// b. Após clicar em um botão exibir informações, exibir em linhas separadas:
// i. Dia no formato numérico;
// ii. Mês no formato numérico;
// iii. Ano no formato numérico;
// iv. Dia da semana em português (segunda, terça, quarta, ...);
// v. Mês em português (janeiro, fevereiro, março, ...);
// vi. Valor da data em milissegundos (timestapm).

const form = document.getElementById("myForm");
let date = document.getElementById("date");
let result = "";

function linkSwitch(dateInfo) {

    result += dateInfo.getUTCDate() + "<br/>";
    result += dateInfo.getUTCMonth() + 1 + "<br/>";
    result += dateInfo.getUTCFullYear() + "<br/>";
    result += new Date(dateInfo).getTime() + "<br/>";

    
    let weekDay = dateInfo.getDay();
    let month = dateInfo.getMonth();

    switch (weekDay) {

        case 0:
            result += "Domingo" + "<br/>";
            break;
        case 1:
            result += "Segunda" + "<br/>";
            break;
        case 2:
            result += "Terça" + "<br/>";
            break;
        case 3:
            result += "Quarta" + "<br/>";
            break;
        case 4:
            result += "Quinta" + "<br/>";
            break;
        case 5:
            result += "Sexta" + "<br/>";
            break;
        case 6:
            result += "Sábado" + "<br/>";
    }


    switch (month) {
        case 0:
            result += "Janeiro" + "<br/>";
            break;
        case 1:
            result += "Fevereiro" + "<br/>";
            break;
        case 2:
            result += "Março" + "<br/>";
            break;
        case 3:
            result += "Abril" + "<br/>";
            break;
        case 4:
            result += "Maio" + "<br/>";
            break;
        case 5:
            result += "Junho" + "<br/>";
            break;
        case 6:
            result += "Julho" + "<br/>";
            break;
        case 7:
            result += "Agosto" + "<br/>";
            break;
        case 8:
            result += "Setembro" + "<br/>";
            break;
        case 9:
            result += "Outubro" + "<br/>";
            break;
        case 10:
            result += "Novembro" + "<br/>";
            break;
        case 11:
            result += "Dezembro" + "<br/>";
     } 
}


form.addEventListener("submit", function (event) {
    date = new Date(date.value);
    linkSwitch(date);
    event.preventDefault();
    date.value = "";
    document.getElementById("result").innerHTML = result;
    return console.log(result);
});