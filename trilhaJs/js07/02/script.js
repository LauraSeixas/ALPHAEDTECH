// Crie uma página web que contenha um formulário que contenha um campo do tipo CEP
// (input type text), considerando --> ok

// a. Capturar o evento de input para não permitir ao usuário a inserção de um caractere 
// que não seja numérico; --> ok

// b. Ao digitar o CEP, capturar o evento de keyup para poder preencher o campo até o 
// limite de tamanho de um CEP não permitindo mais números do que o permitido e 
// adicionando, se necessário o ‘hífen’ natural de um CEP, isto é, a medida que o usuário 

// digita um número, o campo de CEP deve conter o valor do CEP (incluindo o hífen).

// c. Se o usuário apertar a tecla ‘backspace’ (keydown) ele deve apagar o último número 
// inserido.


const form = document.getElementById("myForm");
const input = document.querySelector("input");
const cepContent = document.getElementById("cepContent")
let regexp = new RegExp(/^[0-9]{0,8}$/);
let x;

document.querySelector("input").addEventListener("keypress", event => {
    let cepInput = event.target.value;
    
    cepInput += event.key;
    x = cepInput.match(/(\d{5})(\d{3})/);
    
    if (cepInput.match(regexp) === null) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    if(x !== null) {
        cepContent.innerHTML = x[1] + "-" + x[2];
        cepInput = x[1] + '-' + x[2];
    } else{
        console.log("não sei o que fazer");
        cepContent.innerHTML = cepInput;
    }
    
});

// event.target.value - value of input before new key was pressed
// event.key - string value of the key that was pressed


document.querySelector("input").addEventListener("keydown", event => {
    if (event.key === "Backspace") {
        let cepInput = event.target.value;
        cepInput = cepInput.slice(0, -1);
        cepContent.innerHTML = cepInput;
    }
   
});
