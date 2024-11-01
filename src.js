const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

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

const roundOutcome = document.querySelector('#round-outcome');
const currentPlayerScore = document.querySelector('.player').firstElementChild;
const currentComputerScore = document.querySelector('.computer').firstElementChild;
const gameOutcome = document.querySelector('#game-outcome');
const gameButtons = Array.from(document.querySelectorAll('button'));
const newGameButton = document.createElement('button');
const container = document.querySelector('.container');
newGameButton.classList.add('new-game');
newGameButton.textContent = 'Play again';


    function playRound(playerChoice, computerChoice) {
        if (playerChoice === ROCK && computerChoice === SCISSORS
            || playerChoice === PAPER && computerChoice === ROCK
            || playerChoice === SCISSORS && computerChoice === PAPER) {
            playerScore++;
            roundOutcome.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        }

        if (computerChoice === ROCK && playerChoice === SCISSORS
            || computerChoice === PAPER && playerChoice === ROCK
            || computerChoice === SCISSORS && playerChoice === PAPER) {
            computerScore++;
           roundOutcome.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        }

        if (playerChoice === computerChoice) {
            roundOutcome.textContent = 'It\'s a tie.'
        }

        updateScore();
    }

    gameButtons.forEach((button) => button.addEventListener('click', function(event) {
          if (playerScore < 5 && computerScore < 5) playRound(event.target.textContent, getComputerChoice());
    }));

    newGameButton.addEventListener('click', startNewGame);

function displayGameResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        gameOutcome.textContent = 'Game over. Congratulations, you win!';
    } else if (computerScore > playerScore) {
       gameOutcome.textContent = 'Game over. The computer won, you lose!';
    }
}

function updateScore() {
    currentPlayerScore.textContent = playerScore;
    currentComputerScore.textContent = computerScore;
    if (computerScore >= 5 || playerScore >= 5) {
        roundOutcome.textContent = '';
        roundOutcome.remove();
        container.appendChild(newGameButton);
        displayGameResult(playerScore, computerScore);
    }
}

function startNewGame() {
    container.removeChild(newGameButton);
    container.insertBefore(roundOutcome, gameOutcome);
    gameOutcome.textContent = '';
    currentPlayerScore.textContent = '0';
    currentComputerScore.textContent = '0';
    playerScore = 0;
    computerScore = 0;
}