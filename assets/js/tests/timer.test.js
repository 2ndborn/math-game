const {timer} = require("../script");
const {setupDOM} = require("../testUtils");

describe('checks the timer function', () => {
    beforeEach(() => {
        setupDOM();
        jest.useFakeTimers();
        jest.spyOn(global, "setTimeout");
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.restoreAllMocks()
    })

    test('The timer is updated each second', () => {
        document.getElementById("time").textContent = 10;

        timer();

        jest.advanceTimersByTime(6000);

        expect(document.getElementById("time").textContent).toBe("4")
        expect(setTimeout).toHaveBeenCalled();
    })

    test('The timer function clears the input', () => {
        document.getElementById("time").textContent = 1;
        timer();
        jest.advanceTimersByTime(1000);
        expect(document.getElementById("input").value).toBe("");
    })
})