// Rock paper scissors game.

// return a random interger between 1 and a number (1 or 2 or ... or  number)
function random(number) {
    return Math.floor(Math.random() * number)+1;
}

function getplayerSelection() {
    return prompt("pick rock, paper or scissors:", "rock")
}


// Set a variable  called computerChoice that randomly could be rock, paper or scissors.
function getComputerChoice() {
    let computerChoice;
    switch (random(3)) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
    }
    return computerChoice;
}

function chosseWinner(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === computerSelection) {
        return "It`s a Draw!";
    } else  if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! Scissors beats Paper";
    } return userWin;
}
    


const playerSelection = getplayerSelection().toLowerCase();
const computerSelection = getComputerChoice();
console.log("Your choice:" + playerSelection);
console.log("Computer choice:" + computerSelection);
console.log(chosseWinner(playerSelection, computerSelection))


