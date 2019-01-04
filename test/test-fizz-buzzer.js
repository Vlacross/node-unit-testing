const   fizzBuzzer = require('../fizzBuzzer');
        expect = require('chai').expect;

describe('fizzBuzzer', function() {
    it('should return `fizz-buzz` if num is divisible by 15', function() {
        
const normalCases = [
        {a: 30, expected: 'fizz-buzz'},
        {a: -15, expected: 'fizz-buzz'},
        {a: 15, expected: 'fizz-buzz'}
    ]
    normalCases.forEach(function(input) {
        const answer = fizzBuzzer(input.a);
        expect(answer).to.equal(input.expected)
    })
  })
    it('should throw error if args are not integers', () => {
        const badCases = [
            [['arr']],
            ['string'],
            [false],
            [Symbol],
            [{}],
            [null],
            [undefined],
            [NaN]
        ]
        badCases.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input).to.throw(Error)
            })
        })
    })
})