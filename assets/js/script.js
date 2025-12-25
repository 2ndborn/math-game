let score = 0
let rounds = 0
let isRandomMode = false
let time = 10;
let timerId = null;
let gameActive = true;
const body = document.body;
body.classList.add("body")

document.addEventListener("keydown", (event) => {
    if (event.key >= "0" && event.key <= "9") {
        const num = parseInt(event.key);
        event.preventDefault();
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
        event.preventDefault();
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


function displayNum() {
    let operand1 = Math.floor(Math.random() * 9) + 1;
    let operand2 = Math.floor(Math.random() * 9) + 1;

    if (operand1 < operand2) {
        let temp = operand1;
        operand1 = operand2;
        operand2 = temp;
    }
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    time = 10;
    document.getElementById("time").textContent = time;
    if (timerId) clearTimeout(timerId);
    timer();
}

function timer() {
    if (!gameActive) return;

    const input = document.getElementById("input");
    if (time === 0) {
        input.value = "";
        submitBtn();
        return;
    }

    document.getElementById("time").textContent = time;
    
    timerId = setTimeout(() => {
        time--;
        timer();
    }, 1000);
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
    const del = document.getElementById("delBtn");
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

function random() {
    let operator = document.getElementById("operator");
    const operators = ["+", "-", "x", "÷"]
    const randomOp = Math.floor(Math.random() * operators.length);
    operator.textContent = operators[randomOp];
}

// function startBtn() {
//     const start = document.getElementById("start");
//     const restart = document.getElementById("restart");
//     start.classList.add("hide");
//     restart.classList.remove("hide");
//     const input = document.getElementById("input");
//     displayNum();
//     input.focus();
// }

function restart() {
    location.reload();
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
    const desc = document.querySelector("#title h3");
    if(desc) desc.remove();
    
    if (op === "+") {
        operator.innerHTML = '<i class="fa-solid fa-plus"></i>';
        isRandomMode = false;
    } else if ( op === "-") {
        operator.innerHTML = '<i class="fa-solid fa-minus"></i>';
        isRandomMode = false;
    } else if ( op === "*") {
        operator.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        isRandomMode = false;
    } else if ( op === "/") {
        operator.innerHTML = '<i class="fa-solid fa-divide"></i>';
        isRandomMode = false;
    } else if ( op === "?") {
        random();
        isRandomMode = true;
    }

    head.textContent = "";
    headTwo.remove();
    gameBtns.forEach(btn => btn.remove());
    array.forEach((arr, i) => {
        setTimeout(() => {
            head.textContent = arr;
            setTimeout(() => {
                head.textContent = "";
            }, 1000);
        }, i * 1500);
    });

    setTimeout(() => {
        body.classList.remove("body");
        title.classList.add("hide");
        container.classList.remove("hide");
        displayNum();
        rounds = 0;
        score = 0;
        document.getElementById("score").textContent = score;
    }, 5000);
    input.focus();
}

function checkAnswer(randomFn = random) {
    const num1 = parseInt(document.getElementById("operand1").textContent);
    const num2 = parseInt(document.getElementById("operand2").textContent);
    const inputVal = parseInt(document.getElementById("input").value);
    let operator = document.getElementById("operator");

    let sum;
    if (operator.innerHTML === '<i class="fa-solid fa-plus"></i>') {
        sum = num1 + num2;
    } else if (operator.innerHTML === '<i class="fa-solid fa-minus"></i>') {
        sum = Math.abs(num1 - num2);
    } else if (operator.innerHTML === '<i class="fa-solid fa-xmark"></i>') {
        sum = num1 * num2;
    } else if (operator.innerHTML === '<i class="fa-solid fa-divide"></i>') {
        sum = Math.floor(num1 / num2);
    }

    if (inputVal === sum) {
        document.body.classList.add("correct")
        setTimeout(() => {
            document.body.classList.remove("correct")
        }, 1000);
        input.value = "";
        input.focus();
        incrementScore();
        showMessage("Correct", "green");
    } else {
        document.body.classList.add("incorrect");
        setTimeout(() => {
            document.body.classList.remove("incorrect");
        }, 1000);
        input.value = "";
        input.focus();
        showMessage(`The correct answer is ${sum}`, "red");
    }
    incrementRounds();
    displayNum();
    if (isRandomMode) {
        random();
    }    
}

function showMessage(text, color) {
    const div = document.createElement("div");
    div.classList.add("message-container")
    const h3 = document.createElement("h3");
    h3.textContent = text;
    h3.style.color = color;
    div.appendChild(h3);
    body.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 1000);
}

function incrementScore() {
    if(!gameActive) return;
    score++;
    document.getElementById("score").textContent = score;
}

function incrementRounds() {
    if(!gameActive) return;
    rounds++;
    if (rounds === 10) gameOver();
}

function gameOver() {
    gameActive = false;
    clearTimeout(timerId);
    const container = document.getElementById("container");
    container.classList.add("hide");
    const title = document.getElementById("title");
    // const div = document.createElement("div");
    // div.id = "title";
    if (score === rounds) {
        title.innerHTML = `
        <h1 id="head">A PERFECT SCORE</h1>
    <h1 id="head">Game Over</h1>
    <h2 id="head2" style="color: green">You scored ${score}/${rounds}</h2>
    <button class="finishBtn" onclick="restart()">Play again?</button>
    `;
    } else {
        title.innerHTML = `
    <h1 id="head">Game Over</h1>
    <h2 id="head2" style="color: red">You scored ${score}/${rounds}</h2>
    <button class="finishBtn" onclick="restart()">Play again?</button>
    `;
    }
    // body.appendChild(div);
}

function gameBtnHover() {
    const con = document.getElementById('title');
    const desc = document.createElement('h3');
    con.appendChild(desc);
    const buttons = document.querySelectorAll('.game-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            desc.textContent = btn.dataset.desc;
            desc.classList.add('show');
        });
        btn.addEventListener('mouseout', () => {
            desc.textContent = "";
            desc.classList.remove('show');
        });
    });
}
document.addEventListener('DOMContentLoaded', gameBtnHover);

module.exports = {
    displayNum, 
    random,
    game, 
    checkAnswer,
    incrementScore,
    timer,
    submitBtn,
    keypad,
    delBtn,
    showMessage,
    gameOver,
    getGameActive: () => gameActive,
    setScore: (val) => { score = val; },
    setRounds: (val) => { rounds = val; },
}