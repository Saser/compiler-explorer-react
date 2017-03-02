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

    it('is true for non-empty equal prefix and array', () => {
        const somePrefix = [1, 2, 3];
        const someArray = [1, 2, 3];
        expect(isArrayPrefix(somePrefix, someArray)).toBe(true);
    });

    it('is false for completely different types', () => {
        const stringPrefix = ['1', '2', '3'];
        const intArray = [1, 2, 3];
        expect(isArrayPrefix(stringPrefix, intArray)).toBe(false);
    });

    it('is true when types differ, but after the prefix', () => {
        const intPrefix = [1, 2, 3];
        const intAndStringArray = [1, 2, 3, '4'];
        expect(isArrayPrefix(intPrefix, intAndStringArray)).toBe(true);
    });

    it('is false when the types differ only on a single element', () => {
        const intPrefix = [1, 2, 3];
        const intAndStringArray = [1, '2', 3];
        expect(isArrayPrefix(intPrefix, intAndStringArray)).toBe(false);
    });

    it('is false for repeated-element prefix, but several-different-elements array', () => {
        const onePrefix = [1, 1, 1];
        const someArray = [1, 2, 3];
        expect(isArrayPrefix(onePrefix, someArray)).toBe(false);
    });

    it('is true for repeated-element prefix, and equal array', () => {
        const onePrefix = [1, 1, 1];
        const oneArray = [1, 1, 1];
        expect(isArrayPrefix(onePrefix, oneArray)).toBe(true);
    });

    it('is true for repeated-element prefix, and array with that prefix', () => {
        const onePrefix = [1, 1, 1];
        const oneAndMoreArray = [1, 1, 1, 2, 3];
        expect(isArrayPrefix(onePrefix, oneAndMoreArray)).toBe(true);
    });

    it('is true for equal prefix and array of objects', () => {
        const objPrefix = [{ a: 1 }, { b: 2 }, { c: 3 }];
        const objArray = [{ a: 1 }, { b: 2 }, { c: 3 }];
        expect(isArrayPrefix(objPrefix, objArray)).toBe(true);
    });

    it('is false for almost-equal prefix and array of objects -- same key, different value', () => {
        const objPrefix = [{ a: 1 }, { b: 2 }, { c: 3 }];
        const objArray = [{ a: 1 }, { b: 2 }, { c: 4 }];
        expect(isArrayPrefix(objPrefix, objArray)).toBe(false);
    });

    it('is false for almost-equal prefix and array of objects -- different key, same value', () => {
        const objPrefix = [{ a: 1 }, { b: 2 }, { c: 3 }];
        const objArray = [{ a: 1 }, { b: 2 }, { d: 3 }];
        expect(isArrayPrefix(objPrefix, objArray)).toBe(false);
    });

    it('is false for almost-equal prefix and array -- same values, different order', () => {
        const somePrefix = [1, 2, 3];
        const reorderedArray1 = [1, 3, 2];
        const reorderedArray2 = [2, 1, 3];
        const reorderedArray3 = [2, 3, 1];
        const reorderedArray4 = [3, 1, 2];
        const reorderedArray5 = [3, 2, 1];
        expect(isArrayPrefix(somePrefix, reorderedArray1)).toBe(false);
        expect(isArrayPrefix(somePrefix, reorderedArray2)).toBe(false);
        expect(isArrayPrefix(somePrefix, reorderedArray3)).toBe(false);
        expect(isArrayPrefix(somePrefix, reorderedArray4)).toBe(false);
        expect(isArrayPrefix(somePrefix, reorderedArray5)).toBe(false);
    });
});
