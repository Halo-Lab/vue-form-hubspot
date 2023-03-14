import { expect, it, describe } from 'vitest'

import { isMin } from '../isMin';

describe('isMin', () => {

    it('should return an error string with given value less than 6', () => {
        expect(isMin('2', 'name', 6)).toBeTruthy()
    });

    it('should return an empty string with given value is equal to 10 ', () => {
        expect(isMin('10', 'name', 10)).toBe('')
    });

    it('should return an empty string with given value is greater to 10 ', () => {
        expect(isMin('14', 'name', 10)).toBe('')
    });
})