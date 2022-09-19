function getRandomLessThan3 () {
    const randomInt = Math.floor(Math.random()*10);
    if (randomInt < 3) {
        return randomInt
    }
    else {
        return getRandomLessThan3();
    }
}

function getComputerChoice () {
    const randomIntLessThan3 = getRandomLessThan3();
    if (randomIntLessThan3 === 0) {
        return 'Rock'
    }
    else if (randomIntLessThan3 === 1) {
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    }
    else if (playerSelection === computerSelection) {
        return "Tie!"
    }
    else {
        return "Error!"
    }
}