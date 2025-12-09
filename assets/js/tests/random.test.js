const { setupDOM } = require('../testUtils')
const { random } = require("../script")

describe("Random game function", () => {

    beforeEach(setupDOM);

    test('random sets a random operator', () => {
        random();
        expect(["+", "-", "x", "÷"]).toContain(
            document.getElementById("operator").textContent)
    })
})