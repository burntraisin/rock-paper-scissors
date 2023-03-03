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
            console.log("It's a tie! Rock ties rock.");
            return "It's a tie! Rock ties rock.";
        }
        else if (computerSelectionUpper == "PAPER") {
            console.log("You lose! Paper beats rock.");
            return "You lose! Paper beats rock.";
        }
        else if (computerSelectionUpper == "SCISSORS") {
            console.log("You win! Rock beats scissors.");
            return "You win! Rock beats scissors.";
        }
    }
    if (playerSelectionUpper == "PAPER") {
        if (computerSelectionUpper == "PAPER") {
            console.log("It's a tie! Paper ties paper.");
            return "It's a tie! Paper ties paper.";
        }
        else if (computerSelectionUpper == "ROCK") {
            console.log("You win! Paper beats rock.");
            return "You win! Paper beats rock.";
        }
        else if (computerSelectionUpper == "SCISSORS") {
            console.log("You lose! Scissors beat paper.");
            return "You lose! Scissors beat paper.";
        }
    }
    if (playerSelectionUpper == "SCISSORS") {
        if (computerSelectionUpper == "SCISSORS") {
            console.log("It's a tie! Scissors tie scissors.");
            return "It's a tie! Scissors tie scissors.";
        }
        else if (computerSelectionUpper == "ROCK") {
            console.log("You lose! Rock beats scissors.");
            return "You lose! Rock beats scissors.";
        }
        else if (computerSelectionUpper == "PAPER") {
            console.log("You win! Scissors beat paper.");
            return "You win! Scissors beat paper.";
        }
    }
}

// Get if the player tied, lost, or won
function getRoundResult(playerSelection, computerSelection) {
    let playRoundResult = playRound(playerSelection, computerSelection);    // play one round
    if (playRoundResult === "It's a tie! Rock ties rock." || playRoundResult === "It's a tie! Paper ties paper." || playRoundResult === "It's a tie! Scissors tie scissors.") {
        return "TIE";
    }
    else if (playRoundResult === "You lose! Paper beats rock." || playRoundResult === "You lose! Scissors beat paper." || playRoundResult === "You lose! Rock beats scissors.") {
        return "LOST";
    }
    else if (playRoundResult === "You win! Rock beats scissors." || playRoundResult === "You win! Paper beats rock." || playRoundResult === "You win! Scissors beat paper.") {
        return "WON";
    }
}

function game() {
    let player = 0;
    let computer = 0;

    const rock = document.querySelector('.rock');
    rock.addEventListener('click', () => {
        playRound("rock", getComputerChoice());
    });

    const paper = document.querySelector('.paper');
    paper.addEventListener('click', () => {
        playRound("paper", getComputerChoice());
    });

    const scissors = document.querySelector('.scissors');
    scissors.addEventListener('click', () => {
        playRound("scissors", getComputerChoice());
    });

/*     for (let i = 0; i < 5; i++) {   // plays 5 rounds
        let playerSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = getComputerChoice();
        let roundResult = getRoundResult(playerSelection, computerSelection);   // get player result
        if (roundResult === "TIE") {    // tracks score between player and computer
            player += 1;
            computer += 1;
        }
        else if (roundResult === "LOST") {
            computer += 1;
        }
        else if (roundResult === "WON") {
            player += 1;
        }
    } */

    if (player > computer) {    // compares scores between player and computer
        console.log("You are the winner!");
    }
    else if (player < computer) {
        console.log("You lost!");
    }
    else if (player == computer) {
        console.log("You tied with the computer!");
    }
}

game();