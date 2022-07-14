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
                break;
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
                break;
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
                break;
        }
    }

    // edge case: playerSelection is not rock, paper, or scissors
    return "Error! Must enter 'rock', 'paper', or 'scissors'";
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

    // play round five times
    for (i = 0; i < 5; i++) {
        // gather player and computer choices
        playerPlay = prompt('Please choose rock, paper, or scissors!', 'rock');
        computerMove = computerPlay();
        result = playRound(playerPlay, computerMove);

        // edit scores
        if (result.includes('win')) {
            playerScore ++;
        } else if (result.includes('lose')) {
            computerScore ++;
        }

        // log round results including current scores
        console.log(result);
        console.log(`The player has ${playerScore} points and the computer has ${computerScore} points`);
    }

    // log game results 
    console.log(playerScore > computerScore ? "You win!" : playerScore < computerScore ? "You lose!" : "The game is a tie!");
}

game();


