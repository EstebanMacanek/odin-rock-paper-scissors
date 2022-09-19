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