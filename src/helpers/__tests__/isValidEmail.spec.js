import { expect, it, describe } from 'vitest'

import { isValidEmail } from '../isValidEmail';

describe('isOnlyLetters', () => {

    it('should return an error string with given value is not a valid email', () => {
        expect(isValidEmail('value', 'name')).toBeTruthy()
    });

    it('should return an error string with given value is not a valid email', () => {
        expect(isValidEmail('value@d,ff', 'name')).toBeTruthy()
    });

    it('should return an empty string with given email value', () => {
        expect(isValidEmail('xx123@xx.xx', 'name')).toBe('')
    });
})