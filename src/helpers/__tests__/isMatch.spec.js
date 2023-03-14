import { expect, it, describe } from 'vitest'

import { isMatch } from '../isMatch';

describe('isMatch', () => {

    it('should return an error string with given value is not pass a regexp for only letters allowed', () => {
        expect(isMatch('valu4f;e', 'name', /^[a-zA-Z]*$/)).toBeTruthy()
    });

    it('should return an empty string with given value is pass a regexp for only letters allowed', () => {
        expect(isMatch('value', 'name', /^[a-zA-Z]*$/)).toBe('')
    });
})