// Input: n/a | Output: str
// randomly returns a string of either 'rock', 'paper', 
// or 'scissors' (equal chance for each)

function computerPlay() {
    const PLAYS = ['rock', 'paper', 'scissors'];

    // generate a random whole number from 0 to 2 inclusive
    const randNum = Math.floor((Math.random() * 3));

    return PLAYS[randNum];
}

console.log(computerPlay());

