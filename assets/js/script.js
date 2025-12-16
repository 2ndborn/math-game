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
    operand1.textContent = Math.floor(Math.random() * 9) + 1;
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

function keypad(num, event) {
    document.getElementById("input").value += num;

    if (event && event.target) {
        event.target.classList.add("active");
        setTimeout(() => event.target.classList.remove("active"), 150);
    }
}

function delBtn() {
    document.getElementById("input").value = "";
    const del = document.getElementById("del");
    del.classList.add("active");
    setTimeout(() => del.classList.remove("active"), 150);
}

function submitBtn() {
    const sub = document.getElementById("sub");
    sub.classList.add("active");
    setTimeout(() => sub.classList.remove("active"), 150);
    setTimeout(() => {
        checkAnswer();
    }, 200);
}

document.addEventListener("keydown", (event) => {
    if (event.key >= "0" && event.key <= "9") {
        const num = parseInt(event.key);
        event.preventDefault()
        keypad(num);

        const btn = document.getElementById("btn" + num);
        if (btn) {
            btn.classList.add("active");
            setTimeout(() => btn.classList.remove("active"), 150);
        }
    }

    if (event.key === "Backspace") {
        const del = document.getElementById("delBtn");
        if (del) {
            del.classList.add("active");
            setTimeout(() => del.classList.remove("active"), 150);
        }
        event.preventDefault()
        delBtn();

    }

    if (event.key === "Enter") {
        event.preventDefault();
        checkAnswer();

        const sub = document.getElementById("sub"); // keypad submit button
        if (sub) {
            sub.classList.add("active");
            setTimeout(() => sub.classList.remove("active"), 150);
        }
    }
})

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

function game(op) {
    const input = document.getElementById("input");
    let operator = document.getElementById("operator");
    const title = document.getElementById("title");
    const container = document.getElementById("container");
    const head = document.getElementById("head");
    const headTwo = document.getElementById("head2");
    const gameBtns = document.querySelectorAll(".game-btn");
    let array = ["Ready", "Steady", "Go!!!"];
    
    if (op === "+") {
        operator.innerHTML = '<i class="fa-solid fa-plus"></i>'
        isRandomMode = false
    } else if ( op === "-") {
        operator.innerHTML = '<i class="fa-solid fa-minus"></i>'
        isRandomMode = false
    } else if ( op === "*") {
        operator.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        isRandomMode = false
    } else if ( op === "/") {
        operator.innerHTML = '<i class="fa-solid fa-divide"></i>'
        isRandomMode = false
    } else if ( op === "?") {
        random()
        isRandomMode = true
    }

    head.textContent = "";
    headTwo.remove()
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
    if (operator.innerHTML === '<i class="fa-solid fa-plus"></i>') {
        sum = num1 + num2
    } else if (operator.innerHTML === '<i class="fa-solid fa-minus"></i>') {
        sum = Math.abs(num1 - num2)
    } else if (operator.innerHTML === '<i class="fa-solid fa-xmark"></i>') {
        sum = num1 * num2
    } else if (operator.innerHTML === '<i class="fa-solid fa-divide"></i>') {
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