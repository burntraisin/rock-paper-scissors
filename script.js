// Computer's choice
function getComputerChoice() {
    let choicesArray = ["rock", "paper", "scissors"];
    let computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    return computerChoice;
}

function gameRound(playerSelection, computerSelection) {
    //grab player and computer selection
    //compare player's selection with computer selection
    //if player == rock then check if computer == rock paper or scissors
    //return a string declaring the winner of the round
}