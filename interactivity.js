// This file is used to control the Project Elements

const ball1 = document.getElementById('click')
let isFlipped = false; 

function flipcolors() {
        if (isFlipped) {
            ball1.style.backgroundColor = ''
            ball1.style.color = ''
            ball1.innerHTML = 'Click Me'
        } else {
        ball1.style.backgroundColor = 'white'
        ball1.style.color = 'rgba(51, 51, 51)'
        ball1.innerHTML = 'Look we changed using JS, Now Click Again'
    }
    isFlipped=!isFlipped;
}
ball1.addEventListener('click', flipcolors)

const ball2 = document.getElementById('scroll')
const colors = ['#FFFFFF', '#CCCCCC', '#808080', '#555555']

function setRandomColor(event) {
    event.preventDefault()
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomIndex]
    ball2.style.backgroundColor = randomColor
    ball2.innerHTML = "Click to Reset"
}

ball2.addEventListener('wheel', setRandomColor)

function resetSecondBall(event) {
    ball2.style.backgroundColor = ""
    ball2.innerHTML = "Use your scroller over this box"
}
ball2.addEventListener('click', resetSecondBall)

const ball3 = document.getElementById('press')

function keystrokeDown(event){
   if (event.type === 'keydown') { 
        ball3.style.backgroundColor = 'red'
        ball3.innerHTML = 'Now take your finger off the key!'
   }
}

function keystrokeAgain(event){
    if (event.type === 'keyup') {  
        ball3.style.backgroundColor = 'blue'
        ball3.innerHTML = 'Press F to reset'
    } 
}

function usingF(event) {
    if (event.key === 'f') {
        ball3.style.backgroundColor = ''
        ball3.innerHTML = "Watch what happens when you press down!"
    }
}

document.addEventListener('keydown', keystrokeDown)
document.addEventListener('keyup', keystrokeAgain)
document.addEventListener('keyup', usingF)

const ball4 = document.getElementById('hover')
const increment = 50

const computedStyles = window.getComputedStyle(ball4);
const initialWidth = parseInt(computedStyles.getPropertyValue('width'));
const initialHeight = parseInt(computedStyles.getPropertyValue('height'));
const initialBorderRadius = parseInt(computedStyles.getPropertyValue('border-radius'));

function increaseSize(event) {
    ball4.style.width = `${initialWidth + increment}px`
    ball4.style.height = `${initialHeight + increment}px`
    ball4.style.borderRadius = `${initialBorderRadius + (increment/2)}px`
    ball4.innerHTML = 'Now Take It Out'
}
function decreaseSize(event) {
    ball4.style.width = ''
    ball4.style.height = ''
    ball4.style.borderRadius = ''
    ball4.innerHTML = 'Run your mouse over this!'

}

ball4.addEventListener('mouseover', increaseSize)
ball4.addEventListener('mouseout', decreaseSize)