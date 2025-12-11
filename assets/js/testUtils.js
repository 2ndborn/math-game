function setupDOM() {
    document.body.innerHTML = `
    <span id="operand1"></span>
    <span id="operator"></span>
    <span id="operand2"></span>
    <input id="input" type="text" inputmode="numeric">
    <span id="score">0</span>
    <button id="start">Start</button>
    <button id="restart" class="hide">Restart</button>
    <span id="time">10</span>
    <button onclick="keypad('0')">0</button>
    <button onclick="keypad('1')">1</button>
    <button onclick="keypad('2')">2</button>
    <button onclick="keypad('3')">3</button>
    <button onclick="keypad('4')">4</button>
    <button onclick="keypad('5')">5</button>
    <button onclick="keypad('6')">6</button>
    <button onclick="keypad('7')">7</button>
    <button onclick="keypad('8')">8</button>
    <button onclick="keypad('9')">9</button>
    `
}

module.exports = { setupDOM };
