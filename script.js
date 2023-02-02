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
    //if player == rock then check if computer == rock paper or scissors
    if (playerSelectionUpper == "ROCK") {
        if (computerSelectionUpper == "ROCK") {
            return "It's a tie! Rock ties rock.";
        }
        else if (computerSelectionUpper == "PAPER") {
            return "You lose! Paper beats rock.";
        }
        else if (computerSelectionUpper == "SCISSORS") {
            return "You win! Rock beats scissors.";
        }
    }
    //if player == paper then check if computer == rock paper or scissors
    if (playerSelectionUpper == "PAPER") {
        if (computerSelectionUpper == "PAPER") {
            return "It's a tie! Paper ties paper.";
        }
        else if (computerSelectionUpper == "ROCK") {
            return "You win! Paper beats rock.";
        }
        else if (computerSelectionUpper == "SCISSORS") {
            return "You lose! Scissors beat paper.";
        }
    }
    //if player == scissors then check if computer == rock paper or scissors
    if (playerSelectionUpper == "SCISSORS") {
        if (computerSelectionUpper == "SCISSORS") {
            return "It's a tie! Scissors tie scissors.";
        }
        else if (computerSelectionUpper == "ROCK") {
            return "You lose! Rock beats scissors.";
        }
        else if (computerSelectionUpper == "PAPER") {
            return "You win! Scissors beat paper.";
        }
    }
}

// Get who won in playRound
function getRoundResult() {
    let playRoundResult = playRound();
    if (playRoundResult == "It's a tie! Rock ties rock." || "It's a tie! Paper ties paper." || "It's a tie! Scissors tie scissors.") {
        return "TIE";
    }
}

const playerSelection = "rOck";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    let player;
    let computer;
    for (let i = 0; i < 5; i++) {
        let playRoundResult = getRoundResult();
        if (playRoundResult == "PLAYER WON") {

        }
    }
    //capture results of each round
    //display who won
}