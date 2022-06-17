// Estenda o exercício 1 e exiba o resultado após o clique no botão:
// a. Se houver erro, mostre o erro ‘capturado’ no formulário;
// b. Se não houver erro:
// i. mostre os dados com um label e valor a cada linha;
// ii. mostre o resultado do objeto em formato string (JSON.stringify);
// iii. mostre no console o objeto resultante

const myForm = document.getElementById("myForm");
const nome = document.getElementById("nome");
const data = document.getElementById("aniversario");
const peso = document.getElementById("pesos");
const altura = document.getElementById("altura");
const genero = document.getElementById("genero");
const botao = document.getElementById("botao");

let nomeLabel = document.getElementById("nomeLabel");
let aniverLabel = document.getElementById("aniverLabel");
let pesoLabel = document.getElementById("pesoLabel");
let alturaLabel = document.getElementById("alturaLabel");
let generoLabel = document.getElementById("generoLabel");
let erro = document.getElementById("erroCapturado");
let usuario = {};

erro.hidden = true;

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
        console.log(JSON.stringify(usuario));
        nomeLabel.innerHTML = `Nome: ${usuario.nome}`;
        aniverLabel.innerHTML = `Aniversário: ${usuario.data}`;
        pesoLabel.innerHTML = `Peso: ${usuario.peso}`;
        alturaLabel.innerHTML = `Altura: ${usuario.altura}`;
        generoLabel.innerHTML = `Gênero: ${usuario.genero}`;
      
        console.log(usuario);

    } catch (error) {
        erro.innerHTML = error;
        console.log(error);
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
