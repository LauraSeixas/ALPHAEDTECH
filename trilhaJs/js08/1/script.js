// 1. Crie uma página web que peça ao usuário que preencha 5 dados de usuário (‘Nome’,’Data
//     de Nascimento’,’Peso’,’Altura’ e ‘Gênero’) por meio de um formulário, sendo armazenado 
//     em um objeto JavaScript ‘user’ após clique de um botão, de forma que: --> ok

//     a. O campo do ‘Nome’ é do tipo string e será armazenado no formato string;

//     b. A ‘Data de Nascimento’ deve ser inserida pelo usuário através de 3 campos (‘dia’, 
//     ‘mês’ e ‘ano’) de forma que a seleção de não pode ser de data inexistente ou superior 
//     à data atual, sendo armazenada no formato Date; --> tratar só o ano

//     c. O ‘Peso’ e ‘Altura’ embora seja inserido no formato string deve ser armazenado no 
//     formato numérico, de forma que o peso (kg) é numérico de ponto flutuante e a altura
//     (cm) em um numérico inteiro;

//     d. O ‘Gênero’ deve ser capturado por meio de um campo do tipo select e armazenado 
//     em formato string;

//     e. O objeto Javascript deve conter os seguintes atributos:
//     i. name: que armazenará o nome do usuário (formato string);
//     ii. birthDate: que armazenará a data de nascimento (formato Date);
//     iii. weight: que armazenará o peso em quilogramas (formato numérico float);
//     iv. height: que armazenará a altura em centímetros (formato numérico int);
//     v. gender: que armazenará o gênero (formato string)

const myForm = document.getElementById("myForm");
const nome = document.getElementById("nome");
const data = document.getElementById("aniversario");
const peso = document.getElementById("pesos");
const altura = document.getElementById("altura");
const genero = document.getElementById("genero");
const botao = document.getElementById("botao");

let usuario = {};

botao.addEventListener("click", function (event) {

    event.preventDefault();
    if (validarData(data.value)) {
        return alert("Data inválida");
    }  

    if (nome.value == "" || data.value == "" || peso.value == "" || altura.value == "" || genero.value == "") {
        alert("Preencha todos os campos!");
    } else {
        usuario.nome = nome.value;
        usuario.data = new Date(data.value.replaceAll("-", "/"));
        usuario.peso = parseFloat(peso.value);
        usuario.altura = parseInt(altura.value);
        usuario.genero = genero.value;
    }

});

function validarData(data) {
    let dataAtual = new Date();
    data = new Date(data)

    if (data > dataAtual) {
        return true;
    } else {
        return false;
    }
}

