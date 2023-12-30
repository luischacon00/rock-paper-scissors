// Rock paper scissors game.

// return a random interger between 1 and a number (1 or 2 or ... or  number)
function random(number) {
    return Math.floor(Math.random() * number)+1;
}

// function getplayerSelection() {
//     return prompt("pick rock, paper or scissors:", "rock");
// }


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
        results.textContent = "You Win! Rock beats Scissors";
        userWin += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = "You Win! Paper beats Rock";
        userWin += 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        results.textContent = "You Win! Scissors beats Paper";
        userWin += 1;
    } else if (playerSelection === computerSelection) {
        results.textContent = "It`s a Tie!";
    } else  if (computerSelection === "rock" && playerSelection === "scissors") {
        results.textContent = "You Lose! Rock beats Scissors";
        computerWin += 1;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        results.textContent = "You Lose! Paper beats Rock";
        computerWin += 1;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        results.textContent = "You Lose! Scissors beats Paper";
        computerWin += 1;
    }
}

//
function gameRound(playerSelection) {
    playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    console.log("Your choice:" + playerSelection);
    computerResult.textContent = "Computer choice: " + computerSelection;
    chosseWinner(playerSelection, computerSelection);
}
function scoreMarker() {
    score.textContent = userWin + " / " + computerWin;
}


//Log who get the more wins in 5 rounds.
function Game() {
    if ( computerWin === 5) {
        scoreMarker();
        gameOverText = "You Lose :(";
        computerWin = 0;
        userWin = 0;
        scoreMarker();
        gameOver(gameOverText);
    } else if (userWin === 5) {
        scoreMarker();
        gameOverText = "Congratulations!! You are the Winner :D";
        computerWin = 0;
        userWin = 0;
        scoreMarker();
        gameOver(gameOverText);
        
    } 
}
    

    
let userWin = 0;
let computerWin = 0;


// UI
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const results = document.querySelector('#results');
const computeResult = document.querySelector('#computerResult');
const messages = document.querySelector('#messages')


rockButton.addEventListener('click', () => { 
    gameRound("rock");
    scoreMarker();
    Game();
});
paperButton.addEventListener('click', () => { 
    gameRound("paper");
    scoreMarker();
    Game();

});
scissorsButton.addEventListener('click', () => { 
    gameRound("scissors");
    scoreMarker();
    Game();

});

const score = document.querySelector('#score');


function gameOver(gameOverText){ 

const gameOverMessage = document.createElement('h1');
gameOverMessage.textContent = gameOverText;
messages.appendChild(gameOverMessage)
}

















