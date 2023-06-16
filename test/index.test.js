
const {capitalize, reverseString, calculator, analyzeArray } = require('../codes/index')




describe('capitalize', () => {
    test('capitalize the first character of a string', () => {
        expect(capitalize('hello world')).toBe('Hello world');
    });

    test('capitalize a single character', () => {
        expect(capitalize('a')).toBe('A');
    });

    test('works with empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('does not modify already capitalized string', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });
});








describe('reverseString', () => {
    test('Reverse a string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('capitalize a single character', () => {
        expect(reverseString('a')).toBe('a');
    });

    test('works with empty string', () => {
        expect(reverseString('')).toBe('');
    });

    test('reverse a string ', () => {
        expect(reverseString('Hey')).toBe('yeH');
    });
});




describe('Calculator', () => {

    test('addition ', () => {
        expect( calculator().add(2,3)).toBe(5);
    });

    test('subtraction', () => {
        expect(calculator().subtract(5,3)).toBe(2);
    });

    test('division ', () => {
        expect(calculator().divide(10,2)).toBe(5);
    });

    test('multiplication', () => {
        expect(calculator().multiply(2,10)).toBe(20);
    });
});






describe('analyzeArray', () => {
    test('returns object with average, min, max, and length', () => {
      const array = [1, 8, 3, 4, 2, 6];
      const result = analyzeArray(array);
  
      expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      });
    });
  });
  
