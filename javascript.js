const choices = ['rock', 'paper', 'scissors'];

let playerWinCounter = 0;
let computerWinCounter = 0;

function playRound() {

    if (document.getElementById('childSpan')) {
        console.log(document.getElementById('childSpan'));
        document.getElementById('childSpan').remove();
    }
    const resultsSpan = document.createElement("span");
    resultsSpan.id = "childSpan";

    if (document.getElementById('scoreSpan')) {
        console.log(document.getElementById('scoreSpan'));
        document.getElementById('scoreSpan').remove();
    }
    const scoreSpan = document.createElement('span');
    scoreSpan.id = 'scoreSpan';

    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    const selectedButton = this.id;
    console.log(selectedButton);
    let playerSelection = selectedButton;

    if (playerSelection === computerSelection) {
        result = 'Tie!';
        console.log(result);
        // return result;
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            result = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
            computerWinCounter++;
        }
        else {
            result = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!'
            playerWinCounter++;
        } console.log(result);
        // return result;
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            result = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!'
            computerWinCounter++;
        }
        else {
            result = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!'
            playerWinCounter++;
        } console.log(result);
        // return result;
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            result = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!'
            computerWinCounter++;
        }
        else {
            result = 'You win! ' + playerSelection + ' beats ' + computerSelection + '!'
            playerWinCounter++;
        } console.log(result);
        // return result;

    }

    const resultsText = document.createTextNode('You chose ' + playerSelection
        + '. The computer chose ' + computerSelection + '. Result: ' + result);
    resultsSpan.appendChild(resultsText);
    document.getElementById("results").appendChild(resultsSpan);

    const scoreSpanText = document.createTextNode('Player: ' +
        playerWinCounter + ' Computer: ' + computerWinCounter);
    scoreSpan.appendChild(scoreSpanText);
    document.getElementById("score").appendChild(scoreSpan);

    console.log(result);
    if (playerWinCounter === 5) {
        console.log('WINNER!!!');
        playerWinCounter = 0;
        computerWinCounter = 0;
    }     if (computerWinCounter === 5) {
        console.log('COMPUTER WINS!!!');
        playerWinCounter = 0;
        computerWinCounter = 0;
    }
    // return result;
}
// function score() {
//     let winCounter = 0;
//     let lossCounter = 0;

//     for (let i = 0; i < 5; i++) {
// your code here!
// result = playRound(playerPlay(), computerPlay());
// if (result.includes('win')) { winCounter++ };
// if (result.includes('lose')) { lossCounter++ };

//         console.log('playRound result: ' + result);
//         console.log('winCounter: ' + winCounter);
//         console.log('lossCounter: ' + lossCounter);
//     }
//     if (winCounter > lossCounter) { finalScore = 'You win the game!' }
//     if (lossCounter > winCounter) { finalScore = 'You lose the game!' }
//     else { finalScore = 'This game was a tie!' };
//     console.log(finalScore);
// }
// score();

let buttons = document.querySelectorAll('.btn');
console.log(buttons);
buttons.forEach(button => button.addEventListener('click', playRound));