// 3. Crie uma página web que possua dois campos, um do tipo textarea, outro do tipo text e um 
// botão de enviar, considerando: --> ok

// a. A página deve simular um chat, onde possibilite o envio de uma mensagem de forma 
// que a mensagem digitada no campo do tipo text, ao clicar no botão enviar, deve 
// aparecer no campo do tipo textarea (sem apagar o conteúdo do campo textarea
// adicionando uma linha a mais a cada inserção); --> ok

// b. O campo textarea deve ter uma largura e altura definida de forma a exibir 
// aproximadamente as últimas 10 linhas e, caso possua mais linhas apareça uma barra 
// de scroll para visualizar todas as mensagens que excedam este limite; --> ok

// c. Se o usuário digitar a mensagem e apertar a tecla ‘enter’, a mensagem deve ser 
// enviada como se o usuário tivesse apertado o botão enviar; --> ok

// d. O campo textarea deve receber as mensagens e automaticamente fazer um scroll até 
// a última mensagem permitindo que a última mensagem seja sempre visualizada 
// (utilizar o scrollTop para isso); --> ok

// e. Adicionar um botão para poder ‘limpar’ o conteúdo do campo textarea que ao ser 
// clicado apague o conteúdo do campo textarea. --> ok

const myForm = document.querySelector('#myForm');
const textarea = document.querySelector('#textarea');
const text = document.querySelector('#texto');
const button = document.querySelector('#button');
const clear = document.querySelector('#clear');

document.querySelector('#button').addEventListener('click', event => {
    event.preventDefault();
    if (text.value === '') {
        return false;
    }
    textValue = text.value;
    textarea.innerHTML += textValue + '\n';
    textarea.scrollTop = textarea.scrollHeight;
    text.value = '';

})

document.querySelector('#texto').addEventListener('keypress', event => {
    if (event.key === "Enter") {
        event.preventDefault();
        textarea.scrollTop = textarea.scrollHeight;
        button.click();
    }
})

document.querySelector('#clear').addEventListener('click', () => {
    textarea.innerHTML = '';
});