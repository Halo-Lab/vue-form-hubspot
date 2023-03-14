import { expect, it, describe } from 'vitest'

import { isEmpty } from "../isEmpty";

describe('isEmpty', () => {
    it('should return an error message when no value', () => {
        expect(isEmpty('', 'name')).toBeTruthy()
    });
    it('should return an empty string with given value', () => {
        expect(isEmpty('my name', 'name')).toBe('')
    });
})