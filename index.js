require('@fatso83/mini-mocha').install()
const sinon = require('sinon')
const { assert } = require('@sinonjs/referee')

// Rule 1: When a smaller symbol is after a greater symbol, it's added.
// Rule 2: If a symbol comes after itself, it's added.
// Rule 3: When a smaller symbol appears before a greater symbol, it is subtracted.

const romanNumerals = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
}
function romanNumerator(romanNumeral) {
    if (typeof romanNumeral !== 'string') {
        return 'value must be a string'
    }
    const keys = Object.keys(romanNumerals)

    const isARomanNumeral = (romanNumeral) => {
        keys.indexOf(romanNumeral) !== -1
    }
    const resultOfCheck = romanNumeral.split().every(isARomanNumeral)

    if (resultOfCheck !== true) {
        return 'value must be a Roman Numeral'
    }
}

describe('roman numeral function works', () => {
    it('should only take in strings', () => {
        const stub = sinon.stub()
        stub.returns('value must be a string')
        const effect = romanNumerator(1)
        assert.equals(stub(), effect)

        stub.resetBehavior()

        assert.isUndefined(stub())
    })
    it('should only take in Roman Numerals', () => {
        const stub = sinon.stub()
        stub.returns('value must be a Roman Numeral')
        const effect = romanNumerator('XX')
        assert.equals(stub(), effect)

        stub.resetBehavior()

        assert.isUndefined(stub())
    })
    it('should not fail with multiple Roman characters', () => {
        const stub = sinon.stub()
        stub.returns('value must be a Roman Numeral')
        const effect = romanNumerator('XX')
        assert.equals(stub(), effect)

        stub.resetBehavior()

        assert.isUndefined(stub())
    })
    it('should have a parameter with roman numerals in the right order', () => {
        const stub = sinon.stub()
        stub.returns(
            'value must be a Roman Numeral with numerals in the right order'
        )
        const effect = romanNumerator('IXII')
        assert.equals(stub(), effect)

        stub.resetBehavior()

        assert.isUndefined(stub())
    })
})

// https://martinfowler.com/bliki/TestDrivenDevelopment.html
// https://www.classace.io/learn/math/3rdgrade/roman-numerals-ivxlcdm
