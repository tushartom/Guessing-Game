'use strict';
const body = document.body;
let score = 20;
let highScore = 0;
function randomNumberGenerator() {
  return Math.floor(Math.random() * 20);
}
let randomNumber = randomNumberGenerator();

const inputField = document.querySelector('.guess');

const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', checkValue);

function checkValue() {
  if (!inputField.value) {
    message.textContent = "No Number!";
  } else if (Number(inputField.value) === randomNumber) {
    message.textContent = "😎 Correct Answer!";
    body.style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (Number(inputField.value) < randomNumber) {
    message.textContent = "📉 Too low!";
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = "😒 You lost the game!";
      score = 0;
      document.querySelector('.score').textContent = score;
    }
    
  } else if (Number(inputField.value) > randomNumber) {
    message.textContent = "📈 Too high!";
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = "😒 You lost the game!";
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } 
}

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', () => {
  inputField.value = "";
  randomNumber = randomNumberGenerator();
  message.textContent = "Start guessing...";
  body.style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
})