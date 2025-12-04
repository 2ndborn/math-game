const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const input = document.getElementById("input");
let operator = document.getElementById("operator");
let score = 0
let rounds = 0

function displayNum() {
    operand1.textContent = Math.floor(Math.random() * 9) + 1;
    operand2.textContent = Math.floor(Math.random() * 9) + 1;
}

function startBtn() {
    displayNum();
    input.focus();
}

function restart() {
    location.reload()
}

function submitBtn() {
    checkAnswer()
}

function game(op) {
    if (op === "+") {
        operator.textContent = "+"
    } else if ( op === "-") {
        operator.textContent = "-"
    } else if ( op === "*") {
        operator.textContent = "x"
    } else if ( op === "/") {
        operator.textContent = "/"
    }
    displayNum()
    input.focus()
    rounds = 0
    score = 0;
    document.getElementById("score").textContent = score;
}

function checkAnswer() {
    const num1 = parseInt(operand1.textContent)
    const num2 = parseInt(operand2.textContent)
    const inputVal = parseInt(input.value)

    let sum;
    if (operator.textContent === "+") {
        sum = num1 + num2
    } else if (operator.textContent === "-") {
        sum = Math.abs(num1 - num2)
    } else if (operator.textContent === "x") {
        sum = num1 * num2
    } else if (operator.textContent === "/") {
        sum = num2 !== 0 ? Math.floor(num1 / num2) : 0;
    }

    if (inputVal === sum) {
        alert("Well done!")
        input.value = "";
        input.focus()
        incrementScore()
    } else {
        alert(`The correct answer is ${sum}`)
        input.value = "";
        input.focus()
    }
    incrementRounds()
    displayNum()
}

function incrementScore() {
    score++
    document.getElementById("score").textContent = score
}

function incrementRounds() {
    rounds++;
    if (rounds === 2) gameOver()
}

function gameOver() {
    if(confirm(`Game Over\n\n
        You scored ${score}/${rounds}\n\n
        Play again?`) === true) {
        location.reload()
    }
    
}

