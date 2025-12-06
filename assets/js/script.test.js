const { setupDOM } = require('./testUtils')
const { displayNum, random, startBtn, game } = require("./script")

describe("Math game functions", () => {

    beforeEach(setupDOM);

    test('displayNum sets operand 1 between 1 & 99', () => {
        displayNum();
        const operand1 = parseInt(document.getElementById("operand1").textContent);
        expect(operand1).toBeLessThanOrEqual(99);
        expect(operand1).toBeGreaterThanOrEqual(1);
    })

    test('displayNum sets operand 2 between 1 & 9', () => {
        displayNum();
        const operand2 = parseInt(document.getElementById("operand2").textContent);
        expect(operand2).toBeLessThanOrEqual(9);
        expect(operand2).toBeGreaterThanOrEqual(1);
    })

    test('random sets a random operator', () => {
        random();
        expect(["+", "-", "x", "/"]).toContain(
            document.getElementById("operator").textContent)
    })

    test('startBtn calls displayNum and focuses input', () => {
        startBtn();
        expect(document.getElementById("operand1").textContent).not.toBe("");
        expect(document.getElementById("operand2").textContent).not.toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    // test('set + between operators', () => {
    //     game("+", operator, operand1, operand2);
    //     expect(operator.textContent).toBe("+");
    //     expect(isRandomMode).toBe(false);
    // })
})