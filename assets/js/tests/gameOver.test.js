const {gameOver, getGameActive, setScore, setRounds} = require('../script')
const {setupDOM} = require('../testUtils')

describe('Test for the game to end after 10 questions', () => {
    beforeEach(setupDOM);

    test('game over ends the game', () => {
        gameOver();
        expect(getGameActive()).toBe(false);
        expect(document.getElementById("container")).toHaveClass("hide");
    })

    test('Game renders the users score at the end of the game', () => {
        setScore(5);
        setRounds(10);
        gameOver();
        expect(document.getElementById("head2").textContent).toBe("You scored 5/10")
    })

    test('10 correct answers render "PERFECT SCORE"', () => {
        setScore(10);
        setRounds(10);
        gameOver()
        expect(document.getElementById("title")).toContainElement(document.querySelector("h1"));
        expect(document.querySelector("#title h1").textContent).toBe("A PERFECT SCORE");
    })

    test('Renders the play again button', () => {
        gameOver();
        expect(document.getElementById("title")).toContainElement(document.querySelector("button"));
        expect(document.querySelector(".finishBtn").textContent).toBe("Play again?")
    })
})