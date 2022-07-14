// Input: n/a | Output: str
// randomly returns a string of either 'rock', 'paper', 
// or 'scissors' (equal chance for each)

function computerPlay() {
    const PLAYS = ['rock', 'paper', 'scissors'];

    // generate a random whole number from 0 to 2 inclusive
    const randNum = Math.floor((Math.random() * 3));

    return PLAYS[randNum];
}

// Input: 
//      playerSelection (str) : 'rock', 'paper', or 'scissors'
//      computerSelection (str) : 'rock', 'paper', or 'scissors'
// Output: a string declaring the outcome of the round

function playRound(playerSelection, computerSelection) {
    // make input strings case insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // case: tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    // cases for player plays rock
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'paper':
                return "You lose! Paper beats rock!";
                break;
            
            case 'scissors':
                return "You win! Rock beats scissors!";
        }
    }

    // cases for player plays paper
    if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'scissors':
                return "You lose! Scissors beats paper!";
                break;
            
            case 'rock':
                return "You win! Paper beats rock!";
        }
    }

    // cases for player plays scissors
    if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                return "You lose! Rock beats scissors!";
                break;
            
            case 'paper':
                return "You win! Scissors beats paper!";
        }
    }

    return "Error! Must enter 'rock', 'paper', or 'scissors'";
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


