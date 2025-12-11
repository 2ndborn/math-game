const {keypad, del} = require('../script');
const {setupDOM} = require('../testUtils')

describe('testing the keypad function', () => {
    beforeEach(setupDOM);

    test('test keypad 1 renders on input', () => {
        keypad("1")
        expect(document.getElementById("input").value).toBe("1")
    })

    test('test keypad 2 renders on input', () => {
        keypad("2")
        expect(document.getElementById("input").value).toBe("2")
    })

    test('test keypad 3 renders on input', () => {
        keypad("3")
        expect(document.getElementById("input").value).toBe("3")
    })

    test('test keypad 4 renders on input', () => {
        keypad("4")
        expect(document.getElementById("input").value).toBe("4")
    })

    test('test keypad 5 renders on input', () => {
        keypad("5")
        expect(document.getElementById("input").value).toBe("5")
    })

    test('test keypad 6 renders on input', () => {
        keypad("6")
        expect(document.getElementById("input").value).toBe("6")
    })
    
    test('test keypad 7 renders on input', () => {
        keypad("7")
        expect(document.getElementById("input").value).toBe("7")
    })
    
    test('test keypad 8 renders on input', () => {
        keypad("8")
        expect(document.getElementById("input").value).toBe("8")
    })
    
    test('test keypad 9 renders on input', () => {
        keypad("9")
        expect(document.getElementById("input").value).toBe("9")
    })

    test('test keypad 0 renders on input', () => {
        keypad("0")
        expect(document.getElementById("input").value).toBe("0")
    })

    test('test that the del button clears input', () => {
        del()
        expect(document.getElementById("input").value).toBe("")
    })
})