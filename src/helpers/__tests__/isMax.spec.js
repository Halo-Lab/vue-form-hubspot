import { expect, it, describe } from 'vitest'

import { isMax } from '../isMax';

describe('isMax', () => {

    it('should return an error string with given value greater than 6', () => {
        expect(isMax('10', 'name', 6)).toBeTruthy()
    });

    it('should return an empty string with given value is equal to 10 ', () => {
        expect(isMax('10', 'name', 10)).toBe('')
    });

    it('should return an empty string with given value is less to 10 ', () => {
        expect(isMax('4', 'name', 10)).toBe('')
    });
})