const choices = ['rock', 'paper', 'scissors']


function computerPlay() {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}


let playerSelection = prompt("Enter your selection:");

// playerSelection = playerSelection.toLowerCase;

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == computerSelection) {
        result = 'Tie!';
        return result;
    } if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            result = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!'
        }
        else {
            result = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!'
        }
    } if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            result = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!'
        }
        else {
            result = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!'
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            result = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!'
        }
        else {
            result = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!'
        }

    }
    return result;
}

// console.log(playRound(playerSelection, computerPlay()));

// const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));