function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?", "").toLowerCase();
    return humanChoice;
}

function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice) {

        if (
            (computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")
        ) {
            computerScore++;
            console.log(
                `You lose! ${computerChoice.replace(computerChoice[0],
                    computerChoice[0].toUpperCase()
                )} beats ${humanChoice.replace(humanChoice[0],
                    humanChoice[0].toUpperCase()
                )}.`
            );
        } else if (computerChoice === humanChoice) {
            console.log("It's a tie.");
        } else {
            humanScore++;
            console.log(
                `You win! ${humanChoice.replace(humanChoice[0],
                    humanChoice[0].toUpperCase()
                )} beats ${computerChoice.replace(computerChoice[0],
                    computerChoice[0].toUpperCase()
                )}.`
            );
        }
    }

    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());

    if (computerScore > humanScore) {
        console.log(`Game over. The computer's score is ${computerScore}, your score is ${humanScore} - you lose!`);
    } else if (humanScore > computerScore) {
        console.log(`Game over. The computer's score is ${computerScore}, your score is ${humanScore} - you win!`);

    } else {
        console.log("Game over. It's a tie!");
    }

    restartGame();
}

function restartGame() {
    let newGamePrompt = confirm("Do you want to play a new game ?", "");

    if (newGamePrompt) {
        playGame();
    } else {
        alert('If you would like to play a new game just refresh the page.');
    }
}

playGame();