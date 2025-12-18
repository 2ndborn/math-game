function setupDOM() {
    document.body.innerHTML = `
    <div id="title">
        <h1 id="head">Math-Game</h1>
        <h2 id="head2">Choose a game mode to start</h2>
        <h3>desc</h3>
    </div>
    <div id="container" class="hide">
    <span id="operand1"></span>
    <span id="operator"></span>
    <span id="operand2"></span>
    <input id="input" type="text" inputmode="numeric">
    <span id="score">0</span>
    <button id="start">Start</button>
    <button id="restart" class="hide">Restart</button>
    <span id="time">10</span>
    <div class="keypad-container">
        <div class="keypad">
            <button id="btn7" onclick="keypad(7, event)">7</button>
            <button id="btn8" onclick="keypad(8, event)">8</button>
            <button id="btn9" onclick="keypad(9, event)">9</button>
            <button id="btn4" onclick="keypad(4, event)">4</button>
            <button id="btn5" onclick="keypad(5, event)">5</button>
            <button id="btn6" onclick="keypad(6, event)">6</button>
            <button id="btn1" onclick="keypad(1, event)">1</button>
            <button id="btn2" onclick="keypad(2, event)">2</button>
            <button id="btn3" onclick="keypad(3, event)">3</button>
            <button id="delBtn" onclick="delBtn(event)"><i class="fa-solid fa-delete-left"></i></button>
            <button id="btn0" onclick="keypad(0, event)">0</button>
            <button id="sub" onclick="submitBtn(event)"><i class="fa-solid fa-check"></i></button>
        </div>
    </div>
    `
}

module.exports = { setupDOM };
