import { expect, it, describe } from 'vitest'

import { isNumber } from '../isNubmer';

describe('isNumber', () => {
    it('should return an error string with given value which contains not only numbers', () => {
        expect(isNumber('34 my age 67', 'age')).toBeTruthy()
    });

    it('should return an error string with given value which contains not only numbers', () => {
        expect(isNumber('4,5', 'age')).toBeTruthy()
    });

    it('should return an empty string with given value', () => {
        expect(isNumber('56', 'age')).toBe('')
    });
})