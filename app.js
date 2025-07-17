let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber === 0 ? "Rock" : randomNumber === 1 ? "Paper" : "Scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?", "");
    return humanChoice;
}