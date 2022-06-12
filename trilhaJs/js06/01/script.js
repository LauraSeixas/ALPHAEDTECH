// Crie uma página web que ‘arme uma bomba’ (imagem de uma bomba) que 
// ‘exploda’ em 10 segundos, considerando:
// a. Utilize o setTimeout para ‘armar a bomba’ (bomba com pavil aceso);
// b. Caso o usuário clique na bomba, utilize o clearTimeout para 
// desarmar a bomba (bomba com pavil apagado);
// c. Caso a bomba não seja desarmada, ao terminar o tempo, a bomba 
// deve explodir e um som de explosão deve ser tocado

const mySection = document.querySelector("section"); //puxei minha seção
const buttonStartBomb = document.getElementById("startBomb"); //puxei meu botão start
const audio = new Audio("../audio/explosion-01.ogg");
const audioTic = new Audio("../audio/ES_Egg Timer Tic Toc.mp3");

let buttonStopBomb = document.getElementById("bombPum"); //puxei a minha imagem de bomba
let textButton = document.getElementById("aviso"); //puxei meu h4

let bombSetTimeOut;


buttonStopBomb.hidden = true; //escondi meu botão bomba

buttonStartBomb.addEventListener("click", armarBomba); 

function armarBomba(){
    bombSetTimeOut = setTimeout (explodiu, 6000);
    buttonStopBomb.hidden = false; //coloquei meu botão bomba para aparecer quando clicar no botão
    aviso.innerHTML = "6 SEGUNDOS ATÉ EXPLODIR!!!! <br/> CLIQUE NA BOMBA PARA PARAR A EXPLOSÃO <br/> CORREEEEEEEEEE"
    audioTic.play();
    buttonStartBomb.hidden = true;  
   
}

function explodiu(){
    aviso.innerHTML = "EXPLODIUUUUU!!!!!"; 
    audioTic.pause();
    audio.play();
    buttonStopBomb.removeEventListener("click", pararBomb); 

}

buttonStopBomb.addEventListener("click", pararBomb); 

function pararBomb(){
    buttonStopBomb.hidden = true;
    buttonStartBomb.hidden = true;
    aviso.innerHTML = "VOCÊ ESTÁ SALVO!!!!!";
    clearTimeout(bombSetTimeOut);
    audioTic.pause();
}
