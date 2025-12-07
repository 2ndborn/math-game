const {game} = require('../script');
const {setupDOM} = require('../testUtils')

describe('Switching game mode', () => {
    beforeEach(setupDOM);

    test("sets + operator", () => {
        game("+")
        expect(document.getElementById("operator").textContent).toBe("+");
        expect(document.getElementById("input")).toHaveFocus();
        expect(parseInt(document.getElementById("score").textContent)).toBe(0)
    })

    test("sets + operator", () => {
        game("-");
        expect(document.getElementById("operator").textContent).toBe("-")
        expect(document.getElementById("input")).toHaveFocus();
        expect(parseInt(document.getElementById("score").textContent)).toBe(0)
    })

    test("sets x operator", () => {
        game("*");
        expect(document.getElementById("operator").textContent).toBe("x")
        expect(document.getElementById("input")).toHaveFocus();
        expect(parseInt(document.getElementById("score").textContent)).toBe(0)
    })

    test("sets ÷ operator", () => {
        game("/");
        expect(document.getElementById("operator").textContent).toBe("÷")
        expect(document.getElementById("input")).toHaveFocus();
        expect(parseInt(document.getElementById("score").textContent)).toBe(0)
    })

    test("sets ? operator", () => {
        game("?");
        expect(["+", "-", "x", "÷"]).toContain(
            document.getElementById("operator").textContent)
        expect(document.getElementById("input")).toHaveFocus();
        expect(parseInt(document.getElementById("score").textContent)).toBe(0)
    })
})