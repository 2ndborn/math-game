const {game} = require('../script');
const {setupDOM} = require('../testUtils')

describe('Switching game mode', () => {
    beforeEach(setupDOM);
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");

    test("sets + operator", () => {
        jest.runAllTimers();
        game("+")
        expect(document.getElementById("head").textContent).toBe("")
        expect(document.getElementById("operator").innerHTML).toBe('<i class="fa-solid fa-plus"></i>');
        expect(document.getElementById("input")).toHaveFocus();
        expect(parseInt(document.getElementById("score").textContent)).toBe(0)
    })

    test("sets - operator", () => {
        jest.runAllTimers();
        game("-");
        expect(document.getElementById("operator").innerHTML).toBe('<i class="fa-solid fa-minus"></i>')
        expect(document.getElementById("input")).toHaveFocus();
        expect(parseInt(document.getElementById("score").textContent)).toBe(0)
    })

    test("sets x operator", () => {
        jest.runAllTimers();
        game("*");
        expect(document.getElementById("operator").innerHTML).toBe('<i class="fa-solid fa-xmark"></i>')
        expect(document.getElementById("input")).toHaveFocus();
        expect(parseInt(document.getElementById("score").textContent)).toBe(0)
    })

    test("sets ÷ operator", () => {
        jest.runAllTimers();
        game("/");
        expect(document.getElementById("operator").innerHTML).toBe('<i class="fa-solid fa-divide"></i>')
        expect(document.getElementById("input")).toHaveFocus();
        expect(parseInt(document.getElementById("score").textContent)).toBe(0)
    })

    test("sets ? operator", () => {
        jest.runAllTimers();
        game("?");
        expect(["+", "-", "x", "÷"]).toContain(
            document.getElementById("operator").innerHTML)
        expect(document.getElementById("input")).toHaveFocus();
        expect(parseInt(document.getElementById("score").textContent)).toBe(0)
    })
})