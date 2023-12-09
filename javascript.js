// Rock paper scissors game.

// return a random interger between 1 and a number (1 or 2 or ... or  number)
function random(number) {
    return Math.floor(Math.random() * number)+1;
}

function getplayerSelection() {
    return prompt("pick rock, paper or scissors:", "rock");
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
        alert("You Win! Rock beats Scissors");
        userWin += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You Win! Paper beats Rock");
        userWin += 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You Win! Scissors beats Paper");
        userWin += 1;
    } else if (playerSelection === computerSelection) {
        alert("It`s a Tie!");
    } else  if (computerSelection === "rock" && playerSelection === "scissors") {
        alert("You Lose! Rock beats Scissors");
        computerWin += 1;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        alert("You Lose! Paper beats Rock");
        computerWin += 1;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        alert("You Lose! Scissors beats Paper");
        computerWin += 1;
    }
}

//
function GameRound() {
    const playerSelection = getplayerSelection().toLowerCase();
    const computerSelection = getComputerChoice();
    console.log("Your choice:" + playerSelection);
    console.log("Computer choice:" + computerSelection);
    alert("Computer use " + computerSelection);
    chosseWinner(playerSelection, computerSelection);
}

//Log who get the more wins in 5 rounds.
function Game() {
    GameRound();
    GameRound();
    GameRound();
    GameRound();
    GameRound();
    console.log(userWin);
    console.log(computerWin);
    if (userWin < computerWin) {
        alert("You Lose :(");
    } else if (userWin > computerWin) {
        alert("Congratulations!! You are the Winner :D");
    } else {
        alert("It`s a Tie");
    }

}
    

    
let userWin = 0;
let computerWin = 0;

// const playerSelection = getplayerSelection().toLowerCase();
// const computerSelection = getComputerChoice();
// console.log("Your choice:" + playerSelection);
// console.log("Computer choice:" + computerSelection);

Game()



