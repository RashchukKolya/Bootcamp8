'use strict'

const time = document.querySelector('.js-time');
const start = document.querySelector('.js-start');
const lap = document.querySelector('.js-take-lap');
const reset = document.querySelector('.js-reset');
const addLap = document.querySelector('.js-laps');

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};

function getFormattedTime(time){
  let milliseconds = Math.floor(time / 100 % 10);
  let seconds = Math.floor(time / 1000 % 60);
  let minutes = Math.floor(time / 1000 / 60 % 60);
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}.${milliseconds}`;
}

function timerStart() {
  if(timer.startTime === null){
    timer.startTime = Date.now();
  } else {
    timer.startTime = Date.now() - timer.deltaTime;
  }
  start.textContent = "Pause";
  start.removeEventListener('click', timerStart);
  start.addEventListener('click', timerPause);
  function timerRefresh(){
    let currentTime = Date.now();
    timer.deltaTime = currentTime - timer.startTime;
    time.textContent = getFormattedTime(timer.deltaTime);
  }
  timer.id = setInterval(timerRefresh, 100);
  reset.addEventListener('click', timerReset);
}
start.addEventListener('click', timerStart);

function timerPause() {
  clearInterval(timer.id);
  start.removeEventListener('click', timerPause);
  start.textContent = 'Continue';
  start.addEventListener('click', timerStart);
}

function timerReset() {
  timer.startTime = null;
  timer.deltaTime = null;
  time.textContent = "00:00:0";
  timerPause();
  addLap.innerHTML = '';
  start.textContent = 'Start';
}
reset.addEventListener('click', timerReset)

function addLapList() {
  let lapTime = document.createElement('li');
  lapTime.textContent = getFormattedTime(timer.deltaTime);
  addLap.append(lapTime);
}
lap.addEventListener('click', addLapList);