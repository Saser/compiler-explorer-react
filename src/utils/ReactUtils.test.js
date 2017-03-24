import { addIntegerKeys } from './ReactUtils.js';

describe('addIntegerKeys', () => {
    it('returns an empty array for empty array as input', () => {
        expect(addIntegerKeys([])).toEqual([]);
    });

    it('returns a single-element array for single-element array as input, having a `key` property with value 0', () => {
        const obj = {
            prop1: 'hello',
            prop2: 'world',
            nested: {
                nesting: 'is fun',
            },
        };
        const arr = [obj];

        const expectedObj = {
            ...obj,
            key: '0',
        };
        const expectedArr = [expectedObj];

        expect(addIntegerKeys(arr)).toEqual(expectedArr);
    });

    it('returns the same array with `key`s being 0, 1, 2 for 3-element array', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const obj3 = { c: 3 };
        const arr = [obj1, obj2, obj3];

        const expectedObj1 = { ...obj1, key: '0' };
        const expectedObj2 = { ...obj2, key: '1' };
        const expectedObj3 = { ...obj3, key: '2' };
        const expectedArr = [expectedObj1, expectedObj2, expectedObj3];

        expect(addIntegerKeys(arr)).toEqual(expectedArr);
    });
});

import { addPrefixedIntegerKeys } from './ReactUtils.js';

describe('addPrefixedIntegerKeys', () => {
    const prefix = 'prefix';

    it('returns an empty array for empty array as input', () => {
        expect(addPrefixedIntegerKeys(prefix, [])).toEqual([]);
    });

    it('returns a single-element array for single-element array as input, having a `key` property with value \'prefix0\'', () => {
        const obj = {
            prop1: 'hello',
            prop2: 'world',
            nested: {
                nesting: 'is fun',
            },
        };
        const arr = [obj];

        const expectedObj = {
            ...obj,
            key: 'prefix0',
        };
        const expectedArr = [expectedObj];

        expect(addPrefixedIntegerKeys(prefix, arr)).toEqual(expectedArr);
    });

    it('returns the same array with `key`s being 0, 1, 2 for 3-element array', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const obj3 = { c: 3 };
        const arr = [obj1, obj2, obj3];

        const expectedObj1 = { ...obj1, key: 'prefix0' };
        const expectedObj2 = { ...obj2, key: 'prefix1' };
        const expectedObj3 = { ...obj3, key: 'prefix2' };
        const expectedArr = [expectedObj1, expectedObj2, expectedObj3];

        expect(addPrefixedIntegerKeys(prefix, arr)).toEqual(expectedArr);
    });
});
