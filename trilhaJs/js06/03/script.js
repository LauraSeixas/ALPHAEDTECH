const audio = new Audio("../audio/darthvader_optimism.wav");
const alarmButton = document.querySelector("button");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const time = document.getElementById("time");

let totalTimer, porcentagem, timerInterval, minutesValue, secondsValue, currentTime;

alarmButton.addEventListener("click", contagem);

function contagem() {
  minutesValue = parseInt(minutes.value);
  secondsValue = parseInt(seconds.value);
  time.innerHTML = `${minutesValue}:${secondsValue}`;
  totalTimer = minutesValue * 60 + secondsValue;
  porcentagem = totalTimer * 0.05;
  currentTime = 0;
  alarmButton.innerHTML = "Desativar Alarme!";
  alarmButton.removeEventListener("click", contagem);
  alarmButton.addEventListener("click", desativarAlarme);
  timerInterval = setInterval(contadorAlarme, 1000);
  console.log(currentTime);
}


function desativarAlarme() {
  alarmButton.innerHTML = "Ativar Alarme!";
  clearInterval(timerInterval);
  alarmButton.removeEventListener("click", desativarAlarme);
  alarmButton.addEventListener("click", contagem);
  audio.pause();
}

function contadorAlarme() {
  if (currentTime === totalTimer) {
    audio.play();
    time.innerHTML = "00:00";
  }else {
  secondsValue--;
  currentTime++;

  if (totalTimer - currentTime <= porcentagem) {
    time.style.color = "red";
  }

  if (secondsValue <= 0) {
    if (minutesValue == 0 && secondsValue == 0) {
      currentTime = 0;
      time.style.color = "lightskyblue";
      clearInterval(timerInterval);
      audio.play(); 
      clearInterval(timerInterval);
    } else {
      minutesValue--;
      secondsValue = 59;
    }
  }
  }
  time.innerHTML = `${minutesValue}:${secondsValue}`;
}