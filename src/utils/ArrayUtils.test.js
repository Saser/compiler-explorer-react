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

import { arrayEquals } from './ArrayUtils.js';

describe('arrayEquals', () => {
    it('is true for two empty arrays', () => {
        expect(arrayEquals([], [])).toBe(true);
    });

    it('is false for one empty and one non-empty array', () => {
        const someArray = [1, 2, 3];
        expect(arrayEquals([], someArray)).toBe(false);
        expect(arrayEquals(someArray, [])).toBe(false);
    });

    it('is true for two basic, same-typed arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];
        expect(arrayEquals(arr1, arr2)).toBe(true);
        expect(arrayEquals(arr2, arr1)).toBe(true);
    });

    it('is false for two non-empty, different, same-typed arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        expect(arrayEquals(arr1, arr2)).toBe(false);
        expect(arrayEquals(arr2, arr1)).toBe(false);
    });

    it('is false for different-typed arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = ['1', '2', '3'];
        expect(arrayEquals(arr1, arr2)).toBe(false);
        expect(arrayEquals(arr2, arr1)).toBe(false);
    });

    it('is false for arrays where one is the prefix of another', () => {
        const prefix = [1, 2, 3];
        const arr = [1, 2, 3, 4, 5, 6];
        expect(arrayEquals(prefix, arr)).toBe(false);
        expect(arrayEquals(arr, prefix)).toBe(false);
    });

    it('is false for equal but differently ordered arrays', () => {
        const arr = [1, 2, 3];
        const diff1 = [1, 3, 2];
        const diff2 = [2, 1, 3];
        const diff3 = [2, 3, 1];
        const diff4 = [3, 1, 2];
        const diff5 = [3, 2, 1];
        expect(arrayEquals(arr, diff1)).toBe(false);
        expect(arrayEquals(diff1, arr)).toBe(false);
        expect(arrayEquals(arr, diff2)).toBe(false);
        expect(arrayEquals(diff2, arr)).toBe(false);
        expect(arrayEquals(arr, diff3)).toBe(false);
        expect(arrayEquals(diff3, arr)).toBe(false);
        expect(arrayEquals(arr, diff4)).toBe(false);
        expect(arrayEquals(diff4, arr)).toBe(false);
        expect(arrayEquals(arr, diff5)).toBe(false);
        expect(arrayEquals(diff5, arr)).toBe(false);
    });
});
