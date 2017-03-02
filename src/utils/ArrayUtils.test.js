import { isArrayPrefix } from './ArrayUtils.js';

describe('isArrayPrefix', () => {
    it('is true for empty prefixes', () => {
        const emptyPrefix = [];
        const someArray = [1, 2, 3, 4];
        expect(isArrayPrefix(emptyPrefix, someArray)).toBe(true);
    });

    it('is false for empty arrays', () => {
        const somePrefix = [1, 2, 3];
        const emptyArray = [];
        expect(isArrayPrefix(somePrefix, emptyArray)).toBe(false);
    });

    it('is true for both empty prefix and empty array', () => {
        const emptyPrefix = [];
        const emptyArray = [];
        expect(isArrayPrefix(emptyPrefix, emptyArray)).toBe(true);
    });
});
