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