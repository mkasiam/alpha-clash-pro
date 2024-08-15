function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function getElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementText = elementField.innerText;
    const element = parseInt(elementText);
    return element;
}

function setElementValueById(elementId, value) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = value;
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const alphabet = element.innerText;
    return alphabet;
}