const { setupDOM } = require('../testUtils')
const { displayNum } = require("../script")

describe("Math game functions", () => {

    beforeEach(setupDOM);

    test('displayNum sets operand 1 between 1 & 9', () => {
        displayNum();
        const operand1 = parseInt(document.getElementById("operand1").textContent);
        expect(operand1).toBeLessThanOrEqual(9);
        expect(operand1).toBeGreaterThanOrEqual(1);
    })

    test('displayNum sets operand 2 between 1 & 9', () => {
        displayNum();
        const operand2 = parseInt(document.getElementById("operand2").textContent);
        expect(operand2).toBeLessThanOrEqual(9);
        expect(operand2).toBeGreaterThanOrEqual(1);
    })

    test('displayNum resets time to "10"', () => {
        displayNum();
        expect(document.getElementById("time").textContent).toBe("10");
    })
})