'use strict';
// Selecting Elements
const scoreP1El = document.getElementById('score--p');
const scoreCompEl = document.getElementById('score--c');
const playHand = document.querySelector('.hand--player');
const compHand = document.querySelector('.hand--computer');
const btnRock = document.getElementById('rockForm');
const btnPaper = document.getElementById('paperForm');
const btnScissors = document.getElementById('scissorsForm');
const btnRestart = document.getElementById('restartForm');
const announceWin = document.querySelector('.name-winner');
const handChoice = ['Rock', 'Paper', 'Scissors'];
//Starting Conditions
let scores, activePlayer, playing, scorePlayer, scoreComp;
const init = function () {
  playing = true;
  scorePlayer = 0;
  scoreComp = 0;
  scoreP1El.textContent = 0;
  scoreCompEl.textContent = 0;
  playHand.classList.add('hidden');
  compHand.classList.add('hidden');
  announceWin.textContent = 'Make a Selection!';
};
init();
//Hand symbol Generator
const numGenerator = function (arr) {
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
};
//Function below added July28 as part of refactoring code
const deterWinner = function () {
  if (scorePlayer === 5) {
    announceWin.textContent = 'You Win the Game!';
    playing = false;
  } else if (scoreComp === 5) {
    announceWin.textContent = 'You Lose the Game!';
    playing = false;
  }
};
//Button-clicking magic
btnRock.addEventListener('click', function () {
  if (playing) {
    playHand.classList.remove('hidden');
    playHand.src = 'rock.png';
    const computerResult = numGenerator(handChoice);
    console.log(computerResult); //way to provide comparison as I build
    compHand.classList.remove('hidden');
    compHand.src = `${computerResult}.png`;
    if (computerResult === 'Rock') {
      announceWin.textContent = 'Its a Tie!';
    } else if (computerResult === 'Paper') {
      announceWin.textContent = 'Paper Beats Rock!';
      scoreComp += 1;
      scoreCompEl.textContent = scoreComp;
    } else if (computerResult === 'Scissors') {
      announceWin.textContent = 'Rock Beats Scissors!';
      scorePlayer += 1;
      scoreP1El.textContent = scorePlayer;
    }
    deterWinner(); // this function was added during refactoring.
  }
});
btnPaper.addEventListener('click', function () {
  if (playing) {
    playHand.classList.remove('hidden');
    playHand.src = 'paper.png';
    const computerResult = numGenerator(handChoice);
    console.log(computerResult);
    compHand.classList.remove('hidden');
    compHand.src = `${computerResult}.png`;
    if (computerResult === 'Paper') {
      announceWin.textContent = 'Its a Tie!';
    } else if (computerResult === 'Rock') {
      announceWin.textContent = 'Paper Beats Rock!';
      scorePlayer += 1;
      scoreP1El.textContent = scorePlayer;
    } else if (computerResult === 'Scissors') {
      announceWin.textContent = 'Scissors Beats Paper!';
      scoreComp += 1;
      scoreCompEl.textContent = scoreComp;
    }
    deterWinner();
  }
});
btnScissors.addEventListener('click', function () {
  if (playing) {
    playHand.classList.remove('hidden');
    playHand.src = 'Scissors.png';
    const computerResult = numGenerator(handChoice);
    console.log(computerResult);
    compHand.classList.remove('hidden');
    compHand.src = `${computerResult}.png`;
    if (computerResult === 'Scissors') {
      announceWin.textContent = 'Its a Tie!';
    } else if (computerResult === 'Paper') {
      announceWin.textContent = 'Scissors beats Paper!';
      scorePlayer += 1;
      scoreP1El.textContent = scorePlayer;
    } else if (computerResult === 'Rock') {
      announceWin.textContent = 'Rock Beats Scissors!';
      scoreComp += 1;
      scoreCompEl.textContent = scoreComp;
    }
    deterWinner(); //refactored
  }
});
btnRestart.addEventListener('click', init);
