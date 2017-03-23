import { constructSimpleTrace, constructUnionTrace } from '../utils/TraceUtils.js';

import { containsSubtrace } from './HighlightTrace.js';

describe('containsSubtrace', () => {
    const containsSubtrace_ = (sub, trace) => {
        return () => {
            containsSubtrace(sub, trace);
        }
    }

    const shorterTraceArr = [1];
    const shorterTrace = constructSimpleTrace(shorterTraceArr);

    const shortTraceArr = [1, 9];
    const shortTrace = constructSimpleTrace(shortTraceArr);

    const longTrace1Arr = [1, 13, 1, 13];
    const longTrace1 = constructSimpleTrace(longTrace1Arr);

    const longTrace2Arr = [1, 9, 1, 9];
    const longTrace2 = constructSimpleTrace(longTrace2Arr);

    const unionTrace = constructUnionTrace(longTrace1Arr, longTrace2Arr);

    const longUnionTrace = {
        cons: 'Cons',
        num: '1',
        trace: constructUnionTrace(longTrace1Arr, longTrace2Arr),
    };

    it('throws when `sub` is undefined', () => {
        expect(containsSubtrace_(undefined, shortTrace)).toThrow('sub is undefined');
    });

    it('throws when `trace` is undefined', () => {
        expect(containsSubtrace_(shortTrace, undefined)).toThrow('trace is undefined');
    });

    it('is true when both `sub` and `trace` are empty (i.e. null)', () => {
        expect(containsSubtrace(null, null)).toBe(true);
    });

    it('is true when `sub` is an empty tree (i.e. null), and `trace` is non-empty (i.e. non-null)', () => {
        expect(containsSubtrace(null, shorterTrace)).toBe(true);
        expect(containsSubtrace(null, shortTrace)).toBe(true);
        expect(containsSubtrace(null, shortTrace)).toBe(true);
        expect(containsSubtrace(null, longTrace1)).toBe(true);
        expect(containsSubtrace(null, longTrace2)).toBe(true);
        expect(containsSubtrace(null, unionTrace)).toBe(true);
        expect(containsSubtrace(null, longUnionTrace)).toBe(true);
    });

    it('is false when `sub` is non-empty (i.e. non-null), and `trace` is empty (i.e. null)', () => {
        expect(containsSubtrace(shorterTrace, null)).toBe(false);
        expect(containsSubtrace(shortTrace, null)).toBe(false);
        expect(containsSubtrace(longTrace1, null)).toBe(false);
        expect(containsSubtrace(longTrace2, null)).toBe(false);
        expect(containsSubtrace(unionTrace, null)).toBe(false);
        expect(containsSubtrace(longUnionTrace, null)).toBe(false);
    });

    it('is true when `sub` is a `Cons`-only trace, and `trace` is the same trace but extended', () => {
        expect(containsSubtrace(shorterTrace, shortTrace)).toBe(true);
        expect(containsSubtrace(shortTrace, longTrace2)).toBe(true);
    });

    it('is true when `sub` is a `Cons`-only trace, and contained in the one of the traces of `trace` when `trace` is a `Union`', () => {
        expect(containsSubtrace(shorterTrace, unionTrace)).toBe(true);
        expect(containsSubtrace(shortTrace, unionTrace)).toBe(true);
    });

    it('is true when `sub` is a `Cons`-only trace, and contained in the one of the traces of `trace` when `trace` is a "long" `Union`', () => {
        expect(containsSubtrace(shorterTrace, longUnionTrace)).toBe(true);
        expect(containsSubtrace(shortTrace, longUnionTrace)).toBe(true);
    });

    it('is true when `sub` and `trace` are non-empty and equal', () => {
        expect(containsSubtrace(shorterTrace, shorterTrace)).toBe(true);
        expect(containsSubtrace(shortTrace, shortTrace)).toBe(true);
        expect(containsSubtrace(longTrace1, longTrace1)).toBe(true);
        expect(containsSubtrace(longTrace2, longTrace2)).toBe(true);
        expect(containsSubtrace(unionTrace, unionTrace)).toBe(true);
        expect(containsSubtrace(longUnionTrace, longUnionTrace)).toBe(true);
    });

    it('is true when `sub` is a `Union`-only trace, and `trace` is the same `Union` trace but extended with `Cons`', () => {
        expect(containsSubtrace(unionTrace, longUnionTrace)).toBe(true);
    });

    it('is false when `sub` is a higher tree than `trace`', () => {
        expect(containsSubtrace(shortTrace, shorterTrace)).toBe(false);

        expect(containsSubtrace(longTrace1, shorterTrace)).toBe(false);
        expect(containsSubtrace(longTrace2, shorterTrace)).toBe(false);

        expect(containsSubtrace(longTrace1, shortTrace)).toBe(false);
        expect(containsSubtrace(longTrace2, shortTrace)).toBe(false);

        expect(containsSubtrace(longUnionTrace, unionTrace)).toBe(false);
    });

    it('is false when `sub` is a `Union` trace, and `trace` is one of the traces from the `Union`', () => {
        expect(containsSubtrace(unionTrace, longTrace1)).toBe(false);
        expect(containsSubtrace(unionTrace, longTrace2)).toBe(false);
    });

    it('is false when `sub` is contained in the middle of `trace`', () => {
        const sub = constructSimpleTrace([9, 1]);
        expect(containsSubtrace(sub, longTrace2)).toBe(false);
    });
});
