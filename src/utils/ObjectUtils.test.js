import { objectEquals } from './ObjectUtils.js';

describe('objectEquals', () => {
    it('is false when either argument is null', () => {
        const someObj = { a: 1, b: 2 };
        expect(objectEquals(null, someObj)).toBe(false);
        expect(objectEquals(someObj, null)).toBe(false);
    });

    it('is false when either argument is undefined', () => {
        const someObj = { a: 1, b: 2 };
        expect(objectEquals(undefined, someObj)).toBe(false);
        expect(objectEquals(someObj, undefined)).toBe(false);
    });

    it('is false when one argument is null, and the other is undefined', () => {
        expect(objectEquals(undefined, null)).toBe(false);
        expect(objectEquals(null, undefined)).toBe(false);
    });

    it('is false when both arguments are null', () => {
        expect(objectEquals(null, null)).toBe(false);
    });

    it('is false when both arguments are undefined', () => {
        expect(objectEquals(undefined, undefined)).toBe(false);
    });

    it('is true when both objects are non-nested and equal, with same order of keys', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, b: 2 };
        expect(objectEquals(obj1, obj2)).toBe(true);
    });

    it('is true when both objects are non-nested and equal, with different order of keys', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 2, a: 1 };
        expect(objectEquals(obj1, obj2)).toBe(true);
    });

    it('is false when non-nested objects are equal, except that one is missing one key-value pair', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const missing1 = { b: 2, c: 3 };
        const missing2 = { a: 1, c: 3 };
        const missing3 = { a: 1, b: 2 };
        expect(objectEquals(obj, missing1)).toBe(false);
        expect(objectEquals(obj, missing2)).toBe(false);
        expect(objectEquals(obj, missing3)).toBe(false);
    });

    it('is true when both objects are nested and equal, with same order of keys', () => {
        const obj1 = { a: 1, b: { x: 2 } };
        const obj2 = { a: 1, b: { x: 2 } };
        expect(objectEquals(obj1, obj2)).toBe(true);
    });

    it('is true when both objects are nested and equal, with different order of keys', () => {
        const obj1 = { a: 1, b: { x: 2 } };
        const obj2 = { b: { x: 2 }, a: 1 };
        expect(objectEquals(obj1, obj2)).toBe(true);
    });

    it('is false when both objects have the same keys, but the type of one of the values differ', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const obj2 = { a: 1, b: 2, c: '3' };
        expect(objectEquals(obj1, obj2)).toBe(false);
    });
});
