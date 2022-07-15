// Input: n/a | Output: str
// 
// randomly returns a string of either 'rock', 'paper', 
// or 'scissors' (equal chance for each)

function computerPlay() {
    const PLAYS = ['rock', 'paper', 'scissors'];

    // generate a random whole number from 0 to 2 inclusive
    const randNum = Math.floor((Math.random() * 3));
    const result = PLAYS[randNum];
    return result;
}

// Input: 
//      playerSelection (str) : 'rock', 'paper', or 'scissors'
//      computerSelection (str) : 'rock', 'paper', or 'scissors'
// Output: a string declaring the outcome of the round

function playRound(playerSelection) {
    // make input strings case insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

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

    // edge case: playerSelection is not rock, paper, or scissors
    if (message === ""){
        message = "Error! Must enter 'rock', 'paper', or 'scissors'";
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
    }
}

// Input: n/a
// Output: n/a
// 
// plays a five round game
// user given prompts to participate

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerPlay = '';
    let computerMove = '';
    let result = '';


    // log game results 
    console.log(playerScore > computerScore ? "You win!" : playerScore < computerScore ? "You lose!" : "The game is a tie!");
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    playerMove = button.id;
    console.log(playerMove);
    button.addEventListener('click', () => {playRound(playerMove)});
});

//game();


