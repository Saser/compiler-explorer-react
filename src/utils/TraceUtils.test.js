import { constructSimpleTrace } from './TraceUtils.js';

describe('constructSimpleTrace', () => {
    // Used for testing throwing of error. Kinda counter-intuitive, but it
    // works.
    const wrapper = (traceArray) => {
        return () => {
            constructSimpleTrace(traceArray);
        }
    }

    it('throws when given an empty array', () => {
        const traceArray = [];
        expect(wrapper(traceArray)).toThrow('array is empty');
    });

    it('throws when given null', () => {
        expect(wrapper(null)).toThrow('array is null');
    });

    it('throws when given undefined', () => {
        expect(wrapper(undefined)).toThrow('array is undefined');
    });

    it('throws when given an array containing only a single null value', () => {
        const traceArray = [null];
        expect(wrapper(traceArray)).toThrow('array contains null values');
    });

    it('throws when given an array containing only null values', () => {
        const traceArray = [null, null, null];
        expect(wrapper(traceArray)).toThrow('array contains null values');
    });

    it('throws when given an array containing only a single undefined value', () => {
        const traceArray = [undefined];
        expect(wrapper(traceArray)).toThrow('array contains undefined values');
    });

    it('throws when given an array containing only undefined values', () => {
        const traceArray = [undefined, undefined, undefined];
        expect(wrapper(traceArray)).toThrow('array contains undefined values');
    });

    it('returns a single, non-nested object when given an array with a single integer item', () => {
        const traceArray = [1];
        const expectedTrace = {
            cons: 'Cons',
            num: '1',
            trace: null,
        };
        expect(constructSimpleTrace(traceArray)).toEqual(expectedTrace);
    });

    it('returns a single, non-nested object when given array with a single string/char item', () => {
        const traceArray = ['1'];
        const expectedTrace = {
            cons: 'Cons',
            num: '1',
            trace: null,
        };
        expect(constructSimpleTrace(traceArray)).toEqual(expectedTrace);
    });

    it('returns a nested object when given array with two items', () => {
        const traceArray = [1, 9];
        const expectedTrace = {
            cons: 'Cons',
            num: '9',
            trace: {
                cons: 'Cons',
                num: '1',
                trace: null,
            }
        };
        expect(constructSimpleTrace(traceArray)).toEqual(expectedTrace);
    });

    it('returns a nested object when given array with four items', () => {
        const traceArray = [1, 9, 1, 13];
        const expectedTrace = {
            cons: 'Cons',
            num: '13',
            trace: {
                cons: 'Cons',
                num: '1',
                trace: {
                    cons: 'Cons',
                    num: '9',
                    trace: {
                        cons: 'Cons',
                        num: '1',
                        trace: null,
                    }
                }
            }
        };
        expect(constructSimpleTrace(traceArray)).toEqual(expectedTrace);
    });

    it('throws when given array with null(s) and integer items', () => {
        const traceArray1 = [null, 1, 9];
        const traceArray2 = [1, null, 9];
        const traceArray3 = [1, 9, null];
        const traceArray4 = [null, null, 1, 9];
        const traceArray5 = [null, 1, null, 9];
        const traceArray6 = [null, 1, 9, null];
        expect(wrapper(traceArray1)).toThrow('array contains null values');
        expect(wrapper(traceArray2)).toThrow('array contains null values');
        expect(wrapper(traceArray3)).toThrow('array contains null values');
        expect(wrapper(traceArray4)).toThrow('array contains null values');
        expect(wrapper(traceArray5)).toThrow('array contains null values');
        expect(wrapper(traceArray6)).toThrow('array contains null values');
    })

    it('throws when given array containing undefiend and regular items', () => {
        const traceArray1 = [undefined, 1, 9];
        const traceArray2 = [1, undefined, 9];
        const traceArray3 = [1, 9, undefined];
        const traceArray4 = [undefined, undefined, 1, 9];
        const traceArray5 = [undefined, 1, undefined, 9];
        const traceArray6 = [undefined, 1, 9, undefined];
        expect(wrapper(traceArray1)).toThrow('array contains undefined values');
        expect(wrapper(traceArray2)).toThrow('array contains undefined values');
        expect(wrapper(traceArray3)).toThrow('array contains undefined values');
        expect(wrapper(traceArray4)).toThrow('array contains undefined values');
        expect(wrapper(traceArray5)).toThrow('array contains undefined values');
        expect(wrapper(traceArray6)).toThrow('array contains undefined values');
    })
});
