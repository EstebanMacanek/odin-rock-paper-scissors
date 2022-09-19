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