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
