console.log('Welcome to our game!!');

const options = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playerPlay() {
    let selection = String(prompt("What's your sign?"));
    //let selection = prompt("What's your sign?");
    if (selection === '') {
        //alert('No value entered by the user');
        //prompt("What's your sign?");
        return 'No value entered by the user';
    } else if (!options.includes(selection.toLowerCase())) {
        //alert('Please enter a valid option');
        //prompt("What's your sign?");
        return 'Please enter a valid option';
    }
    //console.log(`The player selected ` + selection);
    return selection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === '') {
        return 'No value entered by the user';
    }
    // A player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or "breaks scissors" or sometimes "blunts scissors"[4])
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You Win! Rock crushes scissors`;
    }
    if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return `You Lose! Rock crushes scissors`;
    }
    // but will lose to one who has played paper ("paper covers rock")
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You Win! Paper beats Rock`;
    }
    if (computerSelection == 'paper' && playerSelection == 'rock') {
        return `You Lose! Paper beats Rock`;
    }
    // a play of paper will lose to a play of scissors ("scissors cuts paper")
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return `You Win! Scissors cuts Paper`;
    }
    if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return `You Lose! Scissors cuts Paper`;
    }

    // If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie.
    if (playerSelection == computerSelection) {
        return `It's a tie!`;
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(playerPlay(), computerPlay());
        console.log(result);
        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        } else {

        }
        console.log(`Scoreboard: Player: ${playerScore} Computer: ${computerScore}`);
    }
    return `Final Score: Player: ${playerScore} Computer: ${computerScore}`;
}

//const playerSelection = "rock";
const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(`Player Selection: ` + playerSelection);
console.log(`Computer Selection: ` + computerSelection);
console.log(playRound(playerSelection, computerSelection));
//console.log(playRound(playerSelection, computerSelection));
console.log('-----------------');
console.log(game());