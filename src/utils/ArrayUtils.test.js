import { range } from './ArrayUtils.js';

describe('range', () => {
    it('returns empty array on `start` === `end`', () => {
        expect(range(0, 0)).toEqual([]);
        expect(range(1, 1)).toEqual([]);
        expect(range(-1, -1)).toEqual([]);
    });

    it('returns empty array when `start` > `end`', () => {
        expect(range(1, 0)).toEqual([]);
        expect(range(1, -1)).toEqual([]);
        expect(range(0, -1)).toEqual([]);
        expect(range(-1, -2)).toEqual([]);
    });

    it('returns (`end` - `start`) elements', () => {
        expect(range(0, 0)).toHaveLength(0 - 0); // === 0
        expect(range(10, 10)).toHaveLength(10 - 10); // === 0
        expect(range(0, 1)).toHaveLength(1 - 0); // === 1
        expect(range(-1, 1)).toHaveLength(1 - (-1)); // === 2
        expect(range(0, 10)).toHaveLength(10 - 0); // === 10
        expect(range(-10, -5)).toHaveLength(-5 - (-10)); // === 5;
    });

    it('always includes `start` as element if non-empty', () => {
        expect(range(0, 1)).toContain(0);
        expect(range(0, 10)).toContain(0);
        expect(range(9, 10)).toContain(9);
        expect(range(-10, 0)).toContain(-10);
        expect(range(-10, -9)).toContain(-10);
    });

    it('never includes `end` as an element', () => {
        expect(range(0, 0)).not.toContain(0);
        expect(range(0, 1)).not.toContain(1);
        expect(range(1, 1)).not.toContain(1);
        expect(range(0, 10)).not.toContain(10);
        expect(range(-10, 10)).not.toContain(10);
        expect(range(-10, 0)).not.toContain(0);
        expect(range(-10, -10)).not.toContain(-10);
    });
});

import { rangeInc } from './ArrayUtils.js';

describe('rangeInc', () => {
    it('returns single-element array on `start` === `end`', () => {
        expect(rangeInc(0, 0)).toEqual([0]);
        expect(rangeInc(1, 1)).toEqual([1]);
        expect(rangeInc(-1, -1)).toEqual([-1]);
    });

    it('returns empty array when `start` > `end`', () => {
        expect(rangeInc(1, 0)).toEqual([]);
        expect(rangeInc(1, -1)).toEqual([]);
        expect(rangeInc(0, -1)).toEqual([]);
        expect(rangeInc(-1, -2)).toEqual([]);
    });

    it('returns (`end` - `start`) + 1 elements', () => {
        expect(rangeInc(0, 0)).toHaveLength(0 - 0 + 1); // === 1
        expect(rangeInc(10, 10)).toHaveLength(10 - 10 + 1); // === 1
        expect(rangeInc(0, 1)).toHaveLength(1 - 0 + 1); // === 2
        expect(rangeInc(-1, 1)).toHaveLength(1 - (-1) + 1); // === 3
        expect(rangeInc(0, 10)).toHaveLength(10 - 0 + 1); // === 11
        expect(rangeInc(-10, -5)).toHaveLength(-5 - (-10) + 1); // === 6
    });

    it('always includes `start` as element if non-empty', () => {
        expect(rangeInc(0, 1)).toContain(0);
        expect(rangeInc(0, 10)).toContain(0);
        expect(rangeInc(9, 10)).toContain(9);
        expect(rangeInc(-10, 0)).toContain(-10);
        expect(rangeInc(-10, -9)).toContain(-10);
    });

    it('always includes `end` as an element', () => {
        expect(rangeInc(0, 0)).toContain(0);
        expect(rangeInc(0, 1)).toContain(1);
        expect(rangeInc(1, 1)).toContain(1);
        expect(rangeInc(0, 10)).toContain(10);
        expect(rangeInc(-10, 10)).toContain(10);
        expect(rangeInc(-10, 0)).toContain(0);
        expect(rangeInc(-10, -10)).toContain(-10);
    });
});

import { intersperse } from './ArrayUtils.js';

describe('intersperse', () => {
    const intSep = 1;
    const strSep = ', ';
    const arrSep = [1];
    const objSep = { 'hello': 'world' };

    it('returns empty array when given empty array', () => {
        expect(intersperse(intSep, [])).toEqual([]);
        expect(intersperse(strSep, [])).toEqual([]);
        expect(intersperse(arrSep, [])).toEqual([]);
        expect(intersperse(objSep, [])).toEqual([]);
    });

    it('returns same array when given single-element array', () => {
        const arr = ['hi'];
        const expectedArr = ['hi'];
        expect(intersperse(intSep, arr)).toEqual(expectedArr);
        expect(intersperse(strSep, arr)).toEqual(expectedArr);
        expect(intersperse(arrSep, arr)).toEqual(expectedArr);
        expect(intersperse(objSep, arr)).toEqual(expectedArr);
    });

    it('intersperses correctly when given 2-element array', () => {
        const arr = ['hi', 'hello'];
        const intExpectedArr = ['hi', intSep, 'hello'];
        const strExpectedArr = ['hi', strSep, 'hello'];
        const arrExpectedArr = ['hi', arrSep, 'hello'];
        const objExpectedArr = ['hi', objSep, 'hello'];
        expect(intersperse(intSep, arr)).toEqual(intExpectedArr);
        expect(intersperse(strSep, arr)).toEqual(strExpectedArr);
        expect(intersperse(arrSep, arr)).toEqual(arrExpectedArr);
        expect(intersperse(objSep, arr)).toEqual(objExpectedArr);
    });
});
