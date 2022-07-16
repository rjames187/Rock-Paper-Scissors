// Input: n/a | Output: str
// 
// randomly returns a string of either 'rock', 'paper', 
//      or 'scissors' (equal chance for each)

function computerPlay() {
    const PLAYS = ['rock', 'paper', 'scissors'];

    // generate a random whole number from 0 to 2 inclusive
    const randNum = Math.floor((Math.random() * 3));
    const result = PLAYS[randNum];
    return result;
}

// Input: 
//      playerSelection (str) : 'rock', 'paper', or 'scissors'
// Output: n/a
// 
// Takes a player move along with a randomly generated computer move, calculates
//      a round outcome, adjusts score accordingly, checks if either player has 
//      5 points, and ends game if so

function playRound(playerSelection) {
    computerSelection = computerPlay();
    console.log(playerSelection);

    let message = "";

    // case: tie
    if (playerSelection === computerSelection) {
        message = "It's a tie!";
    }

    // cases for player plays rock
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'paper':
                message = "You lose! Paper beats rock!";
                break;
            
            case 'scissors':
                message = "You win! Rock beats scissors!";
                break;
        }
    }

    // cases for player plays paper
    if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'scissors':
                message = "You lose! Scissors beats paper!";
                break;
            
            case 'rock':
                message = "You win! Paper beats rock!";
                break;
        }
    }

    // cases for player plays scissors
    if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                message = "You lose! Rock beats scissors!";
                break;
            
            case 'paper':
                message = "You win! Scissors beats paper!";
                break;
        }
    }

    const display = document.querySelector(".message-display");
    display.textContent = message;

    const pscore = document.getElementById("player");
    const cscore = document.getElementById("computer");

    if (message.includes("win")) {
        pscore.textContent = `${1 + +pscore.textContent}`;
    } else {
        cscore.textContent = `${1 + +cscore.textContent}`;
    }

    if (pscore.textContent === '5' || cscore.textContent === '5') {
        const buttonGroup = document.querySelector('.buttons');
        buttonGroup.remove();

        const playAgain = document.createElement('button');
        playAgain.textContent = 'Play Again';
        playAgain.addEventListener('click', () => {
            document.location.reload(true);
        });

        const controlPanel = document.querySelector('.control-panel');
        controlPanel.appendChild(playAgain);

        const overMessage = (+pscore.textContent > +cscore.textContent) ? 
            " The game is over. You win!" : (+pscore.textContent < +cscore.textContent) ?
            " The game is over. You lose!" : "The game is over. It's a tie!";
        
        display.textContent += overMessage;
    }
}

// rock, paper, and scissors button event listeners
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    let playerMove = button.id;
    button.addEventListener('click', () => {playRound(playerMove)});
}



