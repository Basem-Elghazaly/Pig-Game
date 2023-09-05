/*===============================================================
=================================================================
=================== The project =================================
=================================================================
- Start playing from 0 for each players
- Player 1 will start
- Roll dice to have a random number between 1 and 6
- If the number is not (1). The score will add to current
- Else, clear the current score and dice would be (1). 
- player 2 would play
- If player press HOLD, the current would be added to main score
- Then it's the other player's turn 
- If the main score >= 100, Player win and appear btn again
- If I pressed again btn, Both scores would be 0
=================================================================
=================================================================
=================================================================
=================================================================
*/

'use strict'

/////// Selecting elements
const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1");

const dice = document.querySelector(".dice");
const newGame = document.querySelector(".btn--new");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");

const current1 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");

const player1 = document.querySelector(".player--0")
const player2 = document.querySelector(".player--1")

score1.textContent = 0;
score2.textContent = 0;
///////////
// let turn = "player1";

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
dice.classList.add("hidden");

function switchPlayers() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle("player--active")
    player2.classList.toggle("player--active")
};
roll.addEventListener("click", random);
// hold.addEventListener("click", hold());
function random() {
    dice.classList.remove("hidden");

    let random = Math.ceil(Math.random() * 6)
    dice.src = `dice-${random}.png`;
    if (random != 1) {
        currentScore += random;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // current1.textContent = currentScore;
    } else {
        switchPlayers()
    }
}

hold.addEventListener("click", holdScores);
function holdScores() {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        roll.disabled = true;
        hold.disabled = true;
    } else {

        switchPlayers()
    }

}

newGame.addEventListener("click", init);


function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    roll.disabled = false;
    hold.disabled = false;
    dice.classList.add("hidden");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    player1.classList.add("player--active")
    player2.classList.remove("player--active")
}


