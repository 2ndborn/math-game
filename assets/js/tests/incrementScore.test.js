const {incrementScore} = require('../script');
const {setupDOM} = require('../testUtils');

describe('A correct answer increments the score', () => {
    beforeEach(setupDOM);

    test('score is incremented', () => {
        document.getElementById("score").textContent = score
        incrementScore();
        expect(parseInt(document.getElementById("score").textContent)).toBe(1)
    })
})