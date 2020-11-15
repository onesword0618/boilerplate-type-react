/* eslint-disable indent */
/* eslint-disable no-undef */
import { square } from '../src/domain/multiplication';

describe('multiplication.ts Functions TestCases', () => {
    test('should return the squared value', () => {
        const result = square(2);
        const expected = 4;

        expect(result).toStrictEqual(expected);
    });
});
