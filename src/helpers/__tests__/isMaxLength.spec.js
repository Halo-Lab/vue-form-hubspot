import { expect, it, describe } from 'vitest'

import { isMaxLength } from '../isMaxLength';

describe('isMaxLength', () => {

    it('should return an error string with given string has length greater than 6', () => {
        expect(isMaxLength('fdsddds', 'name', 6)).toBeTruthy()
    });

    it('should return an empty string with given string has length to be equal to 5 ', () => {
        expect(isMaxLength('ertyu', 'name', 5)).toBe('')
    });

    it('should return an empty string with given string has length is less than 5 ', () => {
        expect(isMaxLength('qwu', 'name', 5)).toBe('')
    });
})