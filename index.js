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

describe('Test expectation', () => {
    it('should test', () => {
        const stub = sinon.stub()
        stub.returns(['returnedval'])

        assert.equals(stub(), effect)

        stub.resetBehavior()

        assert.isUndefined(stub())
    })
    it('should test', () => {})
    it('should test', () => {})
})

// https://martinfowler.com/bliki/TestDrivenDevelopment.html
// https://www.classace.io/learn/math/3rdgrade/roman-numerals-ivxlcdm
