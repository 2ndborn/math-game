function setupDOM() {
    document.body.innerHTML = `
    <span id="operand1"></span>
    <span id="operator"></span>
    <span id="operand2"></span>
    <input id="input" type="text" inputmode="numeric">
    <span id="score">0</span>
    <button id="start">Start</button>
    <button id="restart" class="hide">Restart</button>  
    `
}

module.exports = { setupDOM };
