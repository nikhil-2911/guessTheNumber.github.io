'use strict';
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 19) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  if (!guess) {
    // div and any block use textContent to get inner text
    // for input use value
    displayMessage('⛔ No Number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('😄 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    let allTimeHigh = highscore.textContent;
    let presentScore = score.textContent;
    if (presentScore > allTimeHigh) {
      highscore.textContent = presentScore;
    }
  } else if (guess !== secretNumber) {
    if (score.textContent > 0) {
      if (guess > secretNumber) {
        displayMessage('↗️ Number Is Higher');
      } else {
        displayMessage('↘️ Number Is Lower');
      }
      score.textContent--;
    } else {
      displayMessage('😢 You lost the game');
    }
  }
  //   else if (guess > secretNumber) {
  //     if (score.textContent > 0) {
  //       message.textContent = 'Number Is Higher ↗️';
  //       score.textContent--;
  //     } else {
  //       message.textContent = '😢 You lost the game';
  //     }
  //   } else {
  //     if (score.textContent > 0) {
  //       message.textContent = '';
  //       score.textContent--;
  //     } else {
  //       message.textContent = '😢 You lost the game';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score.textContent = '20';
  secretNumber = Math.trunc(Math.random() * 19) + 1;
  displayMessage('Start guessing...');

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
