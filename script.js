'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

// create a function for .message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // when there is no input or falsy value, run
  if (!guess) {
    // document.querySelector('.message').textContent =
    //   'please insert a number 😒';
    displayMessage('please insert a number 😒');

    // when the players wins the game
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number💃🏾';
    displayMessage('Correct Number💃🏾');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high🫢' : 'Too Low🥺';
      displayMessage(guess > secretNumber ? 'Too high🫢' : 'Too Low🥺');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game😭';
      displayMessage('You lost the game😭');

      document.querySelector('.score').textContent = 0;
    }
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
