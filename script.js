'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number 🥇';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log((document.querySelector('.guess').value = 23));

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

function checker() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // When there is no Number !!

    displayMessage('🔢 No Number ');
  } else if (guess === secretNumber) {
    // When there it is correct Number !!
    displayMessage('Correct Number 🎉');
    displayScore(score);
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉');
      score--;
      displayScore(score);
    } else {
      document.querySelector('body').style.backgroundColor = '#B22222 ';
      displayMessage('You Loose 😒');
      displayScore(0);
    }
  }
}

document.querySelector('.check').addEventListener('click', function () {
  checker();
});

document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Enter') {
    checker();
  }
});

function again() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
}

document.querySelector('.again').addEventListener('click', function () {
  again();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    again();
  }
});

// Coding Challenge #1:

/*Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)*/
