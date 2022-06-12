// Substitua o setTimeout do exercício anterior, aumente o tempo para 
// 60 segundos e adicione um setInterval que mostra os segundos - ok
// decrementando de 1 em 1 segundo até a explosão - ok
// caso não seja desarmada, considerando:
// a. A cada ‘tick’ de tempo decrescente, adicione um som de 
// ‘tick’ curto para demonstrar que o tempo está acabando;
// b. Se o usuário clicar na bomba, utilizar o clearInterval para 
// desarmar a bomba;
// c. Se o usuário não clicar na bomba, a bomba deve explodir 
// (som de explosão) e a contagem deve parar - ok

const mySection = document.querySelector("section"); //puxei minha seção
const myCounter = document.getElementById("counter");
const audioTic = new Audio("../audio/ES_Egg Timer Tic Toc.mp3");
const audio = new Audio("../audio/explosion-01.ogg");

let imDone = document.getElementById("imDone"); //puxei a minha imagem de bomba
let crazyGuy = document.getElementById("crazy");
let purpurina = document.getElementById("purpurina");
let textButton = document.getElementById("aviso"); //puxei meu h4
let time = 60;

let bombSetTimeOut = setTimeout (explodiu, 60000);
let decrementTimer = setInterval(timer, 1000);
purpurina.hidden = true;
imDone.hidden = true;

function timer(){
    audioTic.play();
    myCounter.innerHTML=--time;
    if(time===0){
        clearInterval(decrementTimer);
        explodiu();
    }   
}


function explodiu(){
    clearInterval(decrementTimer)
    audioTic.pause();
    audio.play();
    imDone.hidden = false;
    crazyGuy.hidden = true;
    myCounter.hidden = true;
    aviso.innerHTML = "EXPLODIUUUUU!!!!!"; 
    imDone.removeEventListener("click", pararBomb); 
}


crazyGuy.addEventListener("click", pararBomb); 

function pararBomb(){
    audioTic.pause();
    audio.pause();
    imDone.hidden = true;
    crazyGuy.hidden = true;
    purpurina.hidden = false;
    aviso.innerHTML = "VOCÊ ESTÁ SALVO!!!!!";
    clearInterval(decrementTimer);
    clearTimeout(bombSetTimeOut);
    
}
