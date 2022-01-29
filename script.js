const container = document.querySelector('.row')
const colorToGuess = document.querySelector('#color')
const correctDisplay = document.querySelector('#correct')
const wrongDisplay = document.querySelector('#wrong')
const headerDisplay = document.querySelector('#header')
const resetButton = document.querySelector('#reset-button')

const colorArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

let correctCount = 0
let wrongCount = 0
correctDisplay.textContent = correctCount
wrongDisplay.textContent = wrongCount

currentColor = getRandomColor()
colorToGuess.textContent = currentColor

function getRandomColor() {
    let random = Math.floor(Math.random() * colorArray.length)
    return colorArray[random]
}

container.addEventListener('click', e => {
    if (e.target.id == currentColor) {
        headerDisplay.textContent = "GOOD JOB"
        headerDisplay.classList.remove("text-danger")
        headerDisplay.classList.add("text-success")
        currentColor = getRandomColor()
        colorToGuess.textContent = currentColor
        correctCount++
        correctDisplay.textContent = correctCount

    } else {
        headerDisplay.textContent = "TRY AGAIN"
        headerDisplay.classList.remove("text-success")
        headerDisplay.classList.add("text-danger")
        wrongCount++
        wrongDisplay.textContent = wrongCount

    }
})

resetButton.addEventListener('click', reset)

function reset() {
    correctCount = 0
    wrongCount = 0
    correctDisplay.textContent = 0
    wrongDisplay.textContent = 0
    headerDisplay.classList.remove("text-success", "text-danger")
    headerDisplay.textContent = "COLOR BLIND TEST"
    currentColor = getRandomColor()
    colorToGuess.textContent = currentColor
}

/* 
did a couple things like: 
add event delegation
add reset button
change the header text and color based on the users choice
added a count for correct and wrong answers
prompts the user to guess a random color(bonus)
*/