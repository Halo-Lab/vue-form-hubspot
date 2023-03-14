import { expect, it, describe } from 'vitest'

import { isLetters } from '../isLetters';

describe('isOnlyLetters', () => {
    it('should return an error string with given value which contains not only letters', () => {
        expect(isLetters('my name 67', 'name')).toBeTruthy()
    });

    it('should return an error string with given value which contains not only letters', () => {
        expect(isLetters('my67jhgsgd', 'name')).toBeTruthy()
    });

    it('should return an error string with given value which contains not only letters', () => {
        expect(isLetters('my jhgsgd', 'name')).toBeTruthy()
    });

    it('should return an empty string with given value', () => {
        expect(isLetters('myname', 'name')).toBe('')
    });
})