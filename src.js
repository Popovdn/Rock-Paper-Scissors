const ROCK = 'Rock'.toLowerCase();
const PAPER = 'Paper'.toLowerCase();
const SCISSORS = 'Scissors'.toLowerCase();

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let generateRandomNumber = Math.floor(Math.random() * 3);

    if (generateRandomNumber === 0) {
        return ROCK;
    } else if (generateRandomNumber === 1) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function getPlayerChoice() {
    return prompt('Rock, paper, scissors - choose!', '');
}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

if (playerChoice === null) {
    startNewGame();
}

function getNewChoices() {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
}

function playGame() {

    function playRound(playerChoice, computerChoice) {
        if (playerChoice.toLowerCase() === ROCK && computerChoice === SCISSORS
            || playerChoice.toLowerCase() === PAPER && computerChoice === ROCK
            || playerChoice.toLowerCase() === SCISSORS && computerChoice === PAPER) {
            playerScore++;
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        }

        if (computerChoice === ROCK && playerChoice.toLowerCase() === SCISSORS
            || computerChoice === PAPER && playerChoice.toLowerCase() === ROCK
            || computerChoice === SCISSORS && playerChoice.toLowerCase() === PAPER) {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        }

        if (playerChoice === computerChoice) {
            console.log('It\'s a tie!');
        }
    }

    playRound(playerChoice, computerChoice);
    getNewChoices();
    playRound(playerChoice, computerChoice);
    getNewChoices();
    playRound(playerChoice, computerChoice);
    getNewChoices();
    playRound(playerChoice, computerChoice);
    getNewChoices();
    playRound(playerChoice, computerChoice);
    displayScore(playerScore, computerScore);
    startNewGame();
}

playGame();

function displayScore(playerScore, computerScore) {
    if (playerScore > computerScore) {
        alert('Congratulations, you win!');
    } else if (computerScore > playerScore) {
        alert('Better luck next time. You lose!');
    } else {
        alert('It\'s a tie!');
    }
}

function startNewGame() {
    let newGameMessage = confirm('Wanna start a new game?');
    if (newGameMessage) {
        getNewChoices();
        playGame();
    } else {
        alert('Okay. Simply refresh the page when you want to play again!');
    }
}