const { setupDOM } = require('../testUtils')
const { startBtn } = require("../script")

describe("start button game functions", () => {

    beforeEach(setupDOM);

    test('populates operands when start is clicked', () => {
        startBtn();
        expect(document.getElementById("operand1").textContent).not.toBe("");
        expect(document.getElementById("operand2").textContent).not.toBe("");
    })

    test('focuses on the input field', () => {
        startBtn();
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('toggles the start/restart button visability', () => {
        startBtn();
        expect(document.getElementById("start").classList.contains("hide")).toBe(true);
        expect(document.getElementById("restart").classList.contains("hide")).toBe(false);
    })
})