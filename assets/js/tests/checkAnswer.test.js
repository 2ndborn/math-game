const {checkAnswer} = require('../script');
const script = require('../script');
const {setupDOM} = require('../testUtils');

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
        document.getElementById("operator").innerHTML = '<i class="fa-solid fa-plus"></i>';
        document.getElementById("input").value = "10";

        checkAnswer()

        const message = document.querySelector("h3.correct-answer");
        expect(message.textContent).toBe("Correct");
        expect(message.style.color).toBe("green");
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check wrong answer given for the "+" operator', () => {
        document.getElementById("operand1").textContent = "3";
        document.getElementById("operand2").textContent = "4";
        document.getElementById("operator").innerHTML = '<i class="fa-solid fa-plus"></i>';
        document.getElementById("input").value = "10";

        checkAnswer()

        const message = document.querySelector("h3.correct-answer");
        expect(message.textContent).toBe(`The correct answer is 7`);
        expect(message.style.color).toBe("red");
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check correct answer given for the "-" operator', () => {
        document.getElementById("operand1").textContent = "4";
        document.getElementById("operand2").textContent = "3";
        document.getElementById("operator").innerHTML = '<i class="fa-solid fa-minus"></i>';
        document.getElementById("input").value = "1";

        checkAnswer()

        const message = document.querySelector("h3.correct-answer");
        expect(message.textContent).toBe("Correct");
        expect(message.style.color).toBe("green");
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check wrong answer given for the "-" operator', () => {
        document.getElementById("operand1").textContent = "5";
        document.getElementById("operand2").textContent = "4";
        document.getElementById("operator").innerHTML = '<i class="fa-solid fa-minus"></i>';
        document.getElementById("input").value = "3";

        checkAnswer()

        const message = document.querySelector("h3.correct-answer");
        expect(message.textContent).toBe(`The correct answer is 1`);
        expect(message.style.color).toBe("red");
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check correct answer given for the "x" operator', () => {
        document.getElementById("operand1").textContent = "3";
        document.getElementById("operand2").textContent = "7";
        document.getElementById("operator").innerHTML = '<i class="fa-solid fa-xmark"></i>';
        document.getElementById("input").value = "21";

        checkAnswer()

        const message = document.querySelector("h3.correct-answer");
        expect(message.textContent).toBe("Correct");
        expect(message.style.color).toBe("green");
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check wrong answer given for the "x" operator', () => {
        document.getElementById("operand1").textContent = "3";
        document.getElementById("operand2").textContent = "4";
        document.getElementById("operator").innerHTML = '<i class="fa-solid fa-xmark"></i>';
        document.getElementById("input").value = "15"

        checkAnswer()

        const message = document.querySelector("h3.correct-answer");
        expect(message.textContent).toBe(`The correct answer is 12`);
        expect(message.style.color).toBe("red");
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check correct answer given for the "÷" operator', () => {
        document.getElementById("operand1").textContent = "9";
        document.getElementById("operand2").textContent = "3";
        document.getElementById("operator").innerHTML = '<i class="fa-solid fa-divide"></i>';
        document.getElementById("input").value = "3";

        checkAnswer()

        const message = document.querySelector("h3.correct-answer");
        expect(message.textContent).toBe("Correct");
        expect(message.style.color).toBe("green");
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })

    test('check wrong answer given for the "÷" operator', () => {
        document.getElementById("operand1").textContent = "14";
        document.getElementById("operand2").textContent = "2";
        document.getElementById("operator").innerHTML = '<i class="fa-solid fa-divide"></i>';
        document.getElementById("input").value = "6"

        checkAnswer()

        const message = document.querySelector("h3.correct-answer");
        expect(message.textContent).toBe("The correct answer is 7");
        expect(message.style.color).toBe("red");
        expect(document.getElementById("input").value).toBe("");
        expect(document.getElementById("input")).toHaveFocus();
    })
})