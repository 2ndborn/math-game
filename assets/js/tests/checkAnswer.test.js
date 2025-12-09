const {checkAnswer} = require('../script');
const {setupDOM } = require('../testUtils');

describe('Checks the users answers', () => {
    beforeEach(() => {
        setupDOM();
        jest.spyOn(window, "alert").mockImplementation(() => {})
    });

    afterEach(() => {
        jest.restoreAllMocks()
    })

    test('check correct answer given for the "+" operator', () => {
        document.getElementById("operand1").textContent = "3";
        document.getElementById("operand2").textContent = "7";
        document.getElementById("operator").textContent = "+"
        document.getElementById("input").value = "10"

        checkAnswer()

        expect(window.alert).toHaveBeenCalledWith("Well done!");
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check wrong answer given for the "+" operator', () => {
        document.getElementById("operand1").textContent = "3";
        document.getElementById("operand2").textContent = "4";
        document.getElementById("operator").textContent = "+"
        document.getElementById("input").value = "10"

        checkAnswer()

        expect(window.alert).toHaveBeenCalledWith("The correct answer is 7")
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check correct answer given for the "-" operator', () => {
        document.getElementById("operand1").textContent = "4";
        document.getElementById("operand2").textContent = "3";
        document.getElementById("operator").textContent = "-"
        document.getElementById("input").value = "1"

        checkAnswer()

        expect(window.alert).toHaveBeenCalledWith("Well done!")
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check wrong answer given for the "-" operator', () => {
        document.getElementById("operand1").textContent = "5";
        document.getElementById("operand2").textContent = "4";
        document.getElementById("operator").textContent = "-"
        document.getElementById("input").value = "3"

        checkAnswer()

        expect(window.alert).toHaveBeenCalledWith("The correct answer is 1");
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check correct answer given for the "x" operator', () => {
        document.getElementById("operand1").textContent = "3";
        document.getElementById("operand2").textContent = "7";
        document.getElementById("operator").textContent = "x"
        document.getElementById("input").value = "21"

        checkAnswer()

        expect(window.alert).toHaveBeenCalledWith("Well done!");
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check wrong answer given for the "x" operator', () => {
        document.getElementById("operand1").textContent = "3";
        document.getElementById("operand2").textContent = "4";
        document.getElementById("operator").textContent = "x"
        document.getElementById("input").value = "15"

        checkAnswer()

        expect(window.alert).toHaveBeenCalledWith("The correct answer is 12")
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check correct answer given for the "÷" operator', () => {
        document.getElementById("operand1").textContent = "9";
        document.getElementById("operand2").textContent = "3";
        document.getElementById("operator").textContent = "÷"
        document.getElementById("input").value = "3"

        checkAnswer()

        expect(window.alert).toHaveBeenCalledWith("Well done!")
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check wrong answer given for the "÷" operator', () => {
        document.getElementById("operand1").textContent = "14";
        document.getElementById("operand2").textContent = "2";
        document.getElementById("operator").textContent = "÷"
        document.getElementById("input").value = "6"

        checkAnswer()

        expect(window.alert).toHaveBeenCalledWith("The correct answer is 7");
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })
})