const choices = ['rock', 'paper', 'scissors']


function computerPlay() {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

function playerPlay() {
    let playerInput = prompt("Enter your selection:");
    let playerInputLower = playerInput.toLowerCase();
    //if not in array 'Try again!
    if (!choices.includes(playerInputLower)) {
        console.log('Try again!');
    }
    return playerInputLower;
}


function playRound(playerPlay, computerPlay) {
    // your code here!
    let computerSelection = computerPlay;
    let playerSelection = playerPlay;

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

function game() {
    let winCounter = 0;
    let lossCounter = 0;

    for (let i = 0; i < 5; i++) {
        // your code here!
        result = playRound(playerPlay(), computerPlay());
        if (result.includes('win')) { winCounter++ };
        if (result.includes('lose')) { lossCounter++ };

        console.log('playRound result: ' + result);
        console.log('winCounter: ' + winCounter);
        console.log('lossCounter: ' + lossCounter);
    }
    if (winCounter > lossCounter) { finalScore = 'You win the game!' }
    if (lossCounter > winCounter) { finalScore = 'You lose the game!' }
    else { finalScore = 'This game was a tie!' };
    console.log(finalScore);
}


game();