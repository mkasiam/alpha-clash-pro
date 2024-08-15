function play() {
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
    
}

function continueGame() {
    const alphabet = getRandomAlphabet();
    setBackgroundColorById(alphabet);

    document.getElementById('current-alphabet').innerText = alphabet;
}

document.addEventListener('keyup',function(e){
    const playerPressed = e.key;
    if(playerPressed === 'Escape'){
        gameOver();
    }
    const expectedAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
    if(playerPressed == expectedAlphabet) {
        continueGame();
        const currentScore = getElementValueById('current-score');
        const newScore = currentScore + 1;
        setElementValueById('current-score',newScore);
        console.log(currentScore);
        removeBackgroundColorById(expectedAlphabet);
    }else{
        const currentLifePoint = getElementValueById('current-life');
        const newLife = currentLifePoint - 1;
        setElementValueById('current-life',newLife);
        if(newLife == 0) {
            gameOver();
        }
    }

    
})

function gameOver() {
    showElementById('score');
    hideElementById('play-ground');
    const finalScore = getElementValueById('current-score');
    setElementValueById('final-score',finalScore);
}

function playAgain() {
    hideElementById('score');
    showElementById('play-ground');
    setElementValueById('current-score',0);
    setElementValueById('current-life',5);
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
    continueGame();
}