function getComputerChoice() {
    let choicesArray = ["rock", "paper", "scissors"];
    let computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    return computerChoice;
}

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

// Display running player score
const playerScoreDisplay = document.querySelector('.player-score');
const playerScoreDisplayContent = document.createElement('div');
playerScoreDisplay.appendChild(playerScoreDisplayContent);

// Display running computer score
const computerScoreDisplay = document.querySelector('.computer-score');
const computerScoreDisplayContent = document.createElement('div');
computerScoreDisplay.appendChild(computerScoreDisplayContent);

// Display final winner
const winner = document.querySelector('.winner');
const winnerContent = document.createElement('div');
winner.appendChild(winnerContent);

let playerScore = 0;
let computerScore = 0;

playerScoreDisplayContent.textContent = playerScore;
playerScoreDisplayContent.style.textAlign = 'center';
playerScoreDisplayContent.style.paddingTop = '20px';
playerScoreDisplayContent.style.fontSize = '18px';
playerScoreDisplayContent.style.color = '#c1d228';
computerScoreDisplayContent.textContent = computerScore;
computerScoreDisplayContent.style.textAlign = 'center';
computerScoreDisplayContent.style.paddingTop = '20px';
computerScoreDisplayContent.style.fontSize = '18px';
computerScoreDisplayContent.style.color = '#c1d228';

const modal = document.querySelector('.modal');

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    paper.style.borderColor = "transparent";
    scissors.style.borderColor = "transparent";
    rock.style.transition = "border 250ms ease-out";
    rock.style.borderColor = "#8bac0f";
    rock.style.borderStyle = "solid";
    let computerChoice = getComputerChoice();
    if (playerScore <= 4 && computerScore <= 4) {
        let roundResult = playRound("rock", computerChoice);
        if (roundResult == 1) {
            computerScore += 1;
        }
        else if (roundResult == 2) {
            playerScore += 1;
        }
        playerScoreDisplayContent.textContent = playerScore;
        computerScoreDisplayContent.textContent = computerScore;
    }

    // Show what computer chose
    if (computerChoice == "paper") {
        paper.style.transition = "border 250ms ease-out";
        paper.style.borderStyle = "dashed";
        paper.style.borderColor = "#8bac0f";
    }
    if (computerChoice == "scissors") {
        scissors.style.transition = "border 250ms ease-out";
        scissors.style.borderStyle = "dashed";
        scissors.style.borderColor = "#8bac0f";
    }
    if (computerChoice == "rock") {
        rock.style.transition = "border 250ms ease-out";
        rock.style.borderStyle = "solid dashed";
        rock.style.borderColor = "#8bac0f";
    }

    if (playerScore == 5 || computerScore ==5) {
        if (playerScore > computerScore) {
            modal.style.display = "flex";
            winnerContent.textContent = "You are the winner!";
        }
        else if (playerScore < computerScore) {
            modal.style.display = "flex";
            winnerContent.textContent = "You lost!";
        }
        else if (playerScore == computerScore) {
            modal.style.display = "flex";
            winnerContent.textContent = "You tied with the computer!";
        }
    }
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    rock.style.borderColor = "transparent";
    scissors.style.borderColor = "transparent";
    paper.style.transition = "border 250ms ease-out";
    paper.style.borderColor = "#8bac0f";
    paper.style.borderStyle = "solid";
    let computerChoice = getComputerChoice();
    if (playerScore <= 4 && computerScore <= 4) {
        let roundResult = playRound("paper", computerChoice);
        if (roundResult == 1) {
            computerScore += 1;
        }
        else if (roundResult == 2) {
            playerScore += 1;
        }
        playerScoreDisplayContent.textContent = playerScore;
        computerScoreDisplayContent.textContent = computerScore;
    }
    
    // Show what computer chose
    if (computerChoice == "scissors") {
        scissors.style.transition = "border 250ms ease-out";
        scissors.style.borderStyle = "dashed";
        scissors.style.borderColor = "#8bac0f";
    }
    if (computerChoice == "rock") {
        rock.style.transition = "border 250ms ease-out";
        rock.style.borderStyle = "dashed";
        rock.style.borderColor = "#8bac0f";
    }
    if (computerChoice == "paper") {
        paper.style.transition = "border 250ms ease-out";
        paper.style.borderStyle = "solid dashed";
        paper.style.borderColor = "#8bac0f";
    }

    if (playerScore == 5 || computerScore ==5) {
        if (playerScore > computerScore) {
            modal.style.display = "flex";
            winnerContent.textContent = "You are the winner!";
        }
        else if (playerScore < computerScore) {
            modal.style.display = "flex";
            winnerContent.textContent = "You lost!";
        }
        else if (playerScore == computerScore) {
            modal.style.display = "flex";
            winnerContent.textContent = "You tied with the computer!";
        }
    }
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    rock.style.borderColor = "transparent";
    paper.style.borderColor = "transparent";
    scissors.style.transition = "border 250ms ease-out";
    scissors.style.borderColor = "#8bac0f";
    scissors.style.borderStyle = "solid";
    let computerChoice = getComputerChoice();
    if (playerScore <= 4 && computerScore <= 4) {
        let roundResult = playRound("scissors", computerChoice);
        if (roundResult == 1) {
            computerScore += 1;
        }
        else if (roundResult == 2) {
            playerScore += 1;
        }
        playerScoreDisplayContent.textContent = playerScore;
        computerScoreDisplayContent.textContent = computerScore;
    }

    // Show what computer chose
    if (computerChoice == "rock") {
        rock.style.transition = "border 250ms ease-out";
        rock.style.borderStyle = "dashed";
        rock.style.borderColor = "#8bac0f";
    }
    if (computerChoice == "paper") {
        paper.style.transition = "border 250ms ease-out";
        paper.style.borderStyle = "dashed";
        paper.style.borderColor = "#8bac0f";
    }
    if (computerChoice == "scissors") {
        scissors.style.transition = "border 250ms ease-out";
        scissors.style.borderStyle = "solid dashed";
        scissors.style.borderColor = "#8bac0f";
    }

    if (playerScore == 5 || computerScore ==5) {
        if (playerScore > computerScore) {
            modal.style.display = "flex";
            winnerContent.textContent = "You are the winner!";
        }
        else if (playerScore < computerScore) {
            modal.style.display = "flex";
            winnerContent.textContent = "You lost!";
        }
        else if (playerScore == computerScore) {
            modal.style.display = "flex";
            winnerContent.textContent = "You tied with the computer!";
        }
    }
});

const buttonResetGame = document.querySelector('.reset-game');
buttonResetGame.addEventListener('click', () => {
    window.location.reload();
});