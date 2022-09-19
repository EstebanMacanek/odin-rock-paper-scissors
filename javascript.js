function getRandomLessThan3 () {
    const randomInt = Math.floor(Math.random()*10);
    if (randomInt < 3) {
        return randomInt
    }
    else {
        return getRandomLessThan3();
    }
}