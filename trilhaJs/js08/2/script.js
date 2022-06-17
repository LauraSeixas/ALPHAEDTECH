// 2. Estenda o exercício anterior agora ‘capturando’ e ‘emitindo’ erros (‘throw’), de forma que:

// a. Emitir erro de ‘Field “name” is invalid!’ se o nome estiver sem valor preenchido ou 
// tenha tamanho inferior a 5 caracteres;

// b. Emitir erro ‘Field “birthDate” is invalid!’ se a data de nascimento for superior a data 
// atual ou se a data for impossível (inválida);

// c. Emitir erro ‘Field “weight” is invalid!’, se não for do tipo numérico;

// d. Emitir erro ‘Field “height” is invalid!’, se não for do tipo numérico e não for inteiro;

// e. Emitir erro ‘Field “gender” is invalid!’, caso não seja um dos gêneros possíveis 
// determinados por você no formulário

const myForm = document.getElementById("myForm");
const nome = document.getElementById("nome");
const data = document.getElementById("aniversario");
const peso = document.getElementById("pesos");
const altura = document.getElementById("altura");
const genero = document.getElementById("genero");
const botao = document.getElementById("botao");

let usuario = {};

function acheErros() {
    if (nome.value.length < 5) {
        throw new Error("tamanho inferior a 5 caracteres");
    }
    if (validarData(data.value)) {
        throw new Error("ano superior ao ano atual");
    }
    if (peso.value === "") {
        throw new Error("peso inválido");
    }
    if (!Number.isInteger(parseFloat(altura.value))) {
        throw new Error("altura inválida ou não é um inteiro");
    }
    if (genero.value === "") {
        throw new Error("escolha um gênero");
    }
}

botao.addEventListener("click", function (event) {
    try {
        event.preventDefault();
       
        acheErros();

        usuario.nome = nome.value;
        usuario.data = new Date(data.value.replaceAll("-", "/"));
        usuario.peso = parseFloat(peso.value);
        usuario.altura = parseInt(altura.value);
        usuario.genero = genero.value;
        console.log(usuario);
    } catch (error) {
        return (error);
    }
    console.log(usuario);
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


