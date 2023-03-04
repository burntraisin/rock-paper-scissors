// Computer's choice
function getComputerChoice() {
    let choicesArray = ["rock", "paper", "scissors"];
    let computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    return computerChoice;
}

// Plays one round
function playRound(playerSelection, computerSelection) {
    let playerSelectionUpper = playerSelection.toUpperCase();
    let computerSelectionUpper = computerSelection.toUpperCase();
    if (playerSelectionUpper == "ROCK") {
        if (computerSelectionUpper == "ROCK") {
            resultsContent.textContent = "It's a tie! Rock ties rock.";
            return 0;
        }
        else if (computerSelectionUpper == "PAPER") {
            resultsContent.textContent = "You lose! Paper beats rock.";
            return 1;
        }
        else if (computerSelectionUpper == "SCISSORS") {
            resultsContent.textContent = "You win! Rock beats scissors.";
            return 2;
        }
    }
    if (playerSelectionUpper == "PAPER") {
        if (computerSelectionUpper == "PAPER") {
            resultsContent.textContent = "It's a tie! Paper ties paper.";
            return 0;
        }
        else if (computerSelectionUpper == "ROCK") {
            resultsContent.textContent = "You win! Paper beats rock.";
            return 2;
        }
        else if (computerSelectionUpper == "SCISSORS") {
            resultsContent.textContent = "You lose! Scissors beat paper.";
            return 1;
        }
    }
    if (playerSelectionUpper == "SCISSORS") {
        if (computerSelectionUpper == "SCISSORS") {
            resultsContent.textContent = "It's a tie! Scissors tie scissors.";
            return 0;
        }
        else if (computerSelectionUpper == "ROCK") {
            resultsContent.textContent = "You lose! Rock beats scissors.";
            return 1;
        }
        else if (computerSelectionUpper == "PAPER") {
            resultsContent.textContent = "You win! Scissors beat paper.";
            return 2;
        }
    }
}

// Display results of a round
const results = document.querySelector('.results');
const resultsContent = document.createElement('div');
results.appendChild(resultsContent);

// Display player score
const playerScoreDisplay = document.querySelector('.player-score');
const playerScoreDisplayContent = document.createElement('div');
playerScoreDisplay.appendChild(playerScoreDisplayContent);

// Display computer score
const computerScoreDisplay = document.querySelector('.computer-score');
const computerScoreDisplayContent = document.createElement('div');
computerScoreDisplay.appendChild(computerScoreDisplayContent);

// Display winner
const winner = document.querySelector('.winner');
const winnerContent = document.createElement('div');
winner.appendChild(winnerContent);

let playerScore = 0;
let computerScore = 0;

playerScoreDisplayContent.textContent = playerScore;
computerScoreDisplayContent.textContent = computerScore;

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    if (playerScore <= 4 && computerScore <= 4) {
        let roundResult = playRound("rock", getComputerChoice());
        if (roundResult == 1) {
            computerScore += 1;
        }
        else if (roundResult == 2) {
            playerScore += 1;
        }
        playerScoreDisplayContent.textContent = playerScore;
        computerScoreDisplayContent.textContent = computerScore;
    }
    if (playerScore == 5 || computerScore ==5) {
        if (playerScore > computerScore) {
            winnerContent.textContent = "You are the winner!";
        }
        else if (playerScore < computerScore) {
            winnerContent.textContent = "You lost!";
        }
        else if (playerScore == computerScore) {
            winnerContent.textContent = "You tied with the computer!";
        }
    }
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    if (playerScore <= 4 && computerScore <= 4) {
        let roundResult = playRound("paper", getComputerChoice());
        if (roundResult == 1) {
            computerScore += 1;
        }
        else if (roundResult == 2) {
            playerScore += 1;
        }
        playerScoreDisplayContent.textContent = playerScore;
        computerScoreDisplayContent.textContent = computerScore;
    }
    if (playerScore == 5 || computerScore ==5) {
        if (playerScore > computerScore) {
            winnerContent.textContent = "You are the winner!";
        }
        else if (playerScore < computerScore) {
            winnerContent.textContent = "You lost!";
        }
        else if (playerScore == computerScore) {
            winnerContent.textContent = "You tied with the computer!";
        }
    }
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    if (playerScore <= 4 && computerScore <= 4) {
        let roundResult = playRound("scissors", getComputerChoice());
        if (roundResult == 1) {
            computerScore += 1;
        }
        else if (roundResult == 2) {
            playerScore += 1;
        }
        playerScoreDisplayContent.textContent = playerScore;
        computerScoreDisplayContent.textContent = computerScore;
    }
    if (playerScore == 5 || computerScore ==5) {
        if (playerScore > computerScore) {
            winnerContent.textContent = "You are the winner!";
        }
        else if (playerScore < computerScore) {
            winnerContent.textContent = "You lost!";
        }
        else if (playerScore == computerScore) {
            winnerContent.textContent = "You tied with the computer!";
        }
    }
});

const playAgain = document.querySelector('.play-again');
playAgain.style.visibility = "hidden";

const buttonResetGame = document.querySelector('.reset-game');
buttonResetGame.addEventListener('click', () => {
    window.location.reload();
});