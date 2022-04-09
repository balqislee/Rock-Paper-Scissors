
const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    yourChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It is a draw!'
    }
    if (computerChoice === 'Rock' && userChoice === "Paper") {
        result = 'You win!'
    }
    if (computerChoice === 'Rock' && userChoice === "Scissor") {
        result = 'You lose!'
    }
    if (computerChoice === 'Paper' && userChoice === "Rock") {
        result = 'You lose!'
    }
    if (computerChoice === 'Paper' && userChoice === "Scissor") {
        result = 'You win!'
    }
    if (computerChoice === 'Scissor' && userChoice === "Rock") {
        result = 'You win!'
    }
    if (computerChoice === 'Scissor' && userChoice === "Paper") {
        result = 'You lose!'
    }
    resultDisplay.innerHTML = result
}
