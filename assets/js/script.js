let score = 0
let rounds = 0
let isRandomMode = false
let time = 10;
let timerId = null;
const body = document.body;
body.classList.add("body")

function displayNum() {
    const operand1 = document.getElementById("operand1");
    const operand2 = document.getElementById("operand2");
    operand1.textContent = Math.floor(Math.random() * 99) + 1;
    operand2.textContent = Math.floor(Math.random() * 9) + 1;
    time = 10;
    document.getElementById("time").textContent = time;
    if (timerId) clearTimeout(timerId);
    timer();
}

function timer() {
    const input = document.getElementById("input");
    if (time === 0) {
        input.value = "";
        submitBtn();
        return;
    }

    document.getElementById("time").textContent = time;
    
    timerId = setTimeout(() => {
        time--;
        timer()
    }, 1000)
}

function keypad(num) {
    document.getElementById("input").value += num;
}

function del() {
    document.getElementById("input").value = "";
}

function random() {
    let operator = document.getElementById("operator");
    const operators = ["+", "-", "x", "÷"]
    const randomOp = Math.floor(Math.random() * operators.length)
    operator.textContent = operators[randomOp]
}

function startBtn() {
    const start = document.getElementById("start")
    const restart = document.getElementById("restart")
    start.classList.add("hide");
    restart.classList.remove("hide");
    const input = document.getElementById("input");
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
    const input = document.getElementById("input");
    let operator = document.getElementById("operator");
    const title = document.getElementById("title");
    const container = document.getElementById("container");
    const head = document.getElementById("head");
    const gameBtns = document.querySelectorAll(".game-btn");
    let array = ["Ready", "Steady", "Go!!!"];
    
    if (op === "+") {
        operator.textContent = "+"
        isRandomMode = false
    } else if ( op === "-") {
        operator.textContent = "-"
        isRandomMode = false
    } else if ( op === "*") {
        operator.textContent = "x"
        isRandomMode = false
    } else if ( op === "/") {
        operator.textContent = "÷"
        isRandomMode = false
    } else if ( op === "?") {
        random()
        isRandomMode = true
    }

    head.textContent = "";
    gameBtns.forEach(btn => btn.remove());
    array.forEach((arr, i) => {
        setTimeout(() => {
            head.textContent = arr;
            setTimeout(() => {
                head.textContent = "";
            }, 1000)
        }, i * 1500)
    })

    setTimeout(() => {
        body.classList.remove("body");
        title.classList.add("hide");
        container.classList.remove("hide");
        displayNum()
        input.focus()
        rounds = 0
        score = 0;
        document.getElementById("score").textContent = score;
    }, 5000)
}

function checkAnswer(randomFn = random) {
    const num1 = parseInt(document.getElementById("operand1").textContent);
    const num2 = parseInt(document.getElementById("operand2").textContent);
    const inputVal = parseInt(document.getElementById("input").value)
    let operator = document.getElementById("operator")

    let sum;
    if (operator.textContent === "+") {
        sum = num1 + num2
    } else if (operator.textContent === "-") {
        sum = Math.abs(num1 - num2)
    } else if (operator.textContent === "x") {
        sum = num1 * num2
    } else if (operator.textContent === "÷") {
        sum = Math.floor(num1 < num2 ? num2 / num1 : num1 / num2);
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
    if (isRandomMode) {
        random();
    }    
}

function incrementScore() {
    score++
    document.getElementById("score").textContent = score
}

function incrementRounds() {
    rounds++;
    if (rounds === 10) gameOver()
}

function gameOver() {
    if(confirm(`Game Over\n\n
        You scored ${score}/${rounds}\n\n
        Play again?`) === true) {
        location.reload()
    }
    
}

module.exports = {
    displayNum, 
    random, 
    startBtn, 
    game, 
    checkAnswer,
    incrementScore,
    timer,
    submitBtn,
    keypad,
    del
}