function getRandomLessThan3 () {
    const randomInt = Math.floor(Math.random()*10)

    if (randomInt < 3) {
        return randomInt
    }
    else {
        return getRandomLessThan3()
    }
}

function fromIntToSelection (int) {
    if (int === 0) {
        return 'Rock'
    }
    else if (int === 1) {
        return 'Paper'
    }
    else if (int === 2) {
        return 'Scissors'
    }
}

function fromSelectionToInt (selection) {
    selection = selection.toLowerCase()

    if (selection === 'rock') {
        return 0
    }
    else if (selection === 'paper') {
        return 1
    }
    else if (selection === 'scissors') {
        return 2
    }
}

function getResult (playerSelection, computerSelection) {
    if (playerSelection === 0 && computerSelection === 1) {
        return -1
    }
    else if (playerSelection === 0 && computerSelection === 2) {
        return 1
    }
    else if (playerSelection === 1 && computerSelection === 0) {
        return 1
    }
    else if (playerSelection === 1 && computerSelection === 2) {
        return -1
    }
    else if (playerSelection === 2 && computerSelection === 0) {
        return -1
    }
    else if (playerSelection === 2 && computerSelection === 1) {
        return 1
    }
    else if (playerSelection === computerSelection) {
        return 0
    }
}

function printResult (result, playerSelection, computerSelection) {
    playerSelection = fromIntToSelection(playerSelection)
    computerSelection = fromIntToSelection(computerSelection)

    if (result === 1) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (result === -1) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (result === 0) {
        return 'Tie!'
    }
}

function game () {
    let total = 0
    for (let i = 0; i < 5; i++) {
        let playerSelectionStr = prompt("Rock, Paper or Scissors?")
        let playerSelection = fromSelectionToInt(playerSelectionStr)
        
        if (Number.isInteger(playerSelection)) {
            let computerSelection = getRandomLessThan3()
            let result = getResult(playerSelection, computerSelection)
            total += result
            console.log(printResult(result, playerSelection, computerSelection))
        }
        else {
            i--
            console.log(`Error! Unknown Selection: ${playerSelectionStr}`)
        }
    }
    if (total > 0) {
        console.log('End Result: You Won!')
    }
    else if (total < 0) {
        console.log('End Result: You Lose!')
    }
    else {
        console.log('End Result: Tie!')
    }
}

function fromResultToStr (result) {
    if (result === 1) {
        return 'You Won!'
    }
    else if (result === 0) {
        return 'Tie!'
    }
    else if (result === -1) {
        return 'You Lose!'
    }
}

function gameResult (score) {
    if (score > 0) {
        return 'End Result: You Won!'
    }
    else if (score < 0) {
        return 'End Result: You Lose!'
    }
    else {
        return 'End Result: Tie!'
    }
}

let score = 0;
let numberOfRounds = 0;
function playRound (playerSelectionStr) {
    let playerSelection = fromSelectionToInt(playerSelectionStr);
    let computerSelection = getRandomLessThan3();
    let result = getResult(playerSelection, computerSelection);
    let resultStr = fromResultToStr(result);
    document.querySelector('#result').textContent = resultStr;
    score += result;
    document.querySelector('#score').textContent = score;
    numberOfRounds += 1;
    if (numberOfRounds === 5) {
        document.querySelector('#result').textContent = gameResult(score);
        score = 0;
        numberOfRounds = 0;
    }
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        playRound(e.target.textContent);
    })
});