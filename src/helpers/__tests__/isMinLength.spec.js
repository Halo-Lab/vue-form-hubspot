import { expect, it, describe } from 'vitest'

import { isMinLength } from '../isMinLength';

describe('isMinLength', () => {

    it('should return an error string with given string has length less than 6', () => {
        expect(isMinLength('fds', 'name', 6)).toBeTruthy()
    });

    it('should return an empty string with given string has length to be equal to 5 ', () => {
        expect(isMinLength('ertyu', 'name', 5)).toBe('')
    });

    it('should return an empty string with given string has length is greater than 5 ', () => {
        expect(isMinLength('qwertyu', 'name', 5)).toBe('')
    });
})