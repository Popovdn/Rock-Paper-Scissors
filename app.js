let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber === 0
        ? "rock"
        : randomNumber === 1
            ? "paper"
            : "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?", "");
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie.");
    }

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
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
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

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice().toLowerCase();

playRound(computerChoice, humanChoice);
