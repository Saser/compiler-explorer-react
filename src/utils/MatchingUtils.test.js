import {
    constructSimpleTrace,
    constructUnionTrace,
} from './TraceUtils.js';

import { ordering } from './MatchingUtils.js';

describe('ordering', () => {
    it('returns a negative number when comparing \'modLang\' to other languages', () => {
        expect(ordering('modLang', 'conLang')).toBeLessThan(0);
        expect(ordering('modLang', 'decLang')).toBeLessThan(0);
        expect(ordering('modLang', 'exhLang')).toBeLessThan(0);
        expect(ordering('modLang', 'patLang')).toBeLessThan(0);
    });

    it('returns a positive number when comparing \'patLang\' to other languages', () => {
        expect(ordering('patLang', 'modLang')).toBeGreaterThan(0);
        expect(ordering('patLang', 'conLang')).toBeGreaterThan(0);
        expect(ordering('patLang', 'decLang')).toBeGreaterThan(0);
        expect(ordering('patLang', 'exhLang')).toBeGreaterThan(0);
    });

    it('returns 0 when comparing languages to themselves', () => {
        expect(ordering('modLang', 'modLang')).toEqual(0);
        expect(ordering('conLang', 'conLang')).toEqual(0);
        expect(ordering('decLang', 'decLang')).toEqual(0);
        expect(ordering('exhLang', 'exhLang')).toEqual(0);
        expect(ordering('patLang', 'patLang')).toEqual(0);
    });
});

import { matchingDirection } from './MatchingUtils.js';

describe('matchingDirection', () => {
    it('returns \'forward\' when `traceLang` is \'modLang\', and `treeLang` is later language', () => {
        expect(matchingDirection('modLang', 'conLang')).toEqual('forward');
        expect(matchingDirection('modLang', 'decLang')).toEqual('forward');
        expect(matchingDirection('modLang', 'exhLang')).toEqual('forward');
        expect(matchingDirection('modLang', 'patLang')).toEqual('forward');
    });

    it('returns \'backward\' when `traceLang` is \'patLang\', and `treeLang` is any earlier language', () => {
        expect(matchingDirection('patLang', 'modLang')).toEqual('backward');
        expect(matchingDirection('patLang', 'conLang')).toEqual('backward');
        expect(matchingDirection('patLang', 'decLang')).toEqual('backward');
        expect(matchingDirection('patLang', 'exhLang')).toEqual('backward');
    });

    it('returns \'equal\' when `traceLang` and `treeLang` are equal', () => {
        expect(matchingDirection('modLang', 'modLang')).toEqual('equal');
        expect(matchingDirection('conLang', 'conLang')).toEqual('equal');
        expect(matchingDirection('decLang', 'decLang')).toEqual('equal');
        expect(matchingDirection('exhLang', 'exhLang')).toEqual('equal');
        expect(matchingDirection('patLang', 'patLang')).toEqual('equal');
    });
});

import { forwardMatches } from './MatchingUtils.js';

describe('forwardMatches', () => {
    const makeItem = (trace) => ({
        name: 'myItem',
        args: [],
        trace,
    });

    const expectation = (activeTrace, itemTrace, expectedBool) => {
        const item = makeItem(itemTrace);
        expect(forwardMatches(activeTrace)(item)).toBe(expectedBool);
    }

    it('is true for a short trace matched against a long', () => {
        expectation(
            constructSimpleTrace([1, 3]),
            constructSimpleTrace([1, 3, 1, 5]),
            true,
        );
    })

    it('is true for a short trace matched against an equal trace', () => {
        expectation(
            constructSimpleTrace([1, 3]),
            constructSimpleTrace([1, 3]),
            true,
        );
    });

    it('is false for a long trace matched against a short', () => {
        expectation(
            constructSimpleTrace([1, 3, 1, 5]),
            constructSimpleTrace([1, 3]),
            false,
        );
    })

    it('is true for a long trace matched against a union containing that trace', () => {
        expectation(
            constructSimpleTrace([1, 3, 1, 9]),
            constructUnionTrace(
                [1, 3, 1, 9],
                [1, 11, 1, 12],
            ),
            true,
        );

        expectation(
            constructSimpleTrace([1, 11, 1, 12]),
            constructUnionTrace(
                [1, 3, 1, 9],
                [1, 11, 1, 12],
            ),
            true,
        );
    });

    it('is true for a short trace matched against a union containing that trace in its children', () => {
        expectation(
            constructSimpleTrace([1]),
            constructUnionTrace(
                [1, 3, 1, 9],
                [1, 11, 1, 12],
            ),
            true,
        );
    });

    it('is true for two equal union traces', () => {
        expectation(
            constructUnionTrace(
                [1, 3, 1, 9],
                [1, 11, 1, 12],
            ),
            constructUnionTrace(
                [1, 3, 1, 9],
                [1, 11, 1, 12],
            ),
            true,
        );
    });

    it('is false for a union trace matched against one of its children', () => {
        expectation(
            constructUnionTrace(
                [1, 3, 1, 9],
                [1, 11, 1, 12],
            ),
            constructSimpleTrace([1, 3, 1, 9]),
            false,
        );

        expectation(
            constructUnionTrace(
                [1, 3, 1, 9],
                [1, 11, 1, 12],
            ),
            constructSimpleTrace([1, 11, 1, 12]),
            false,
        );
    });

    it('is true for a union trace matched against an extended version of itself', () => {
        const unionTrace = constructUnionTrace(
            [1, 3, 1, 9],
            [1, 11, 1, 12],
        );
        const extendedUnionTrace = {
            name: 'Cons',
            num: '1',
            trace: unionTrace,
        };

        expectation(
            unionTrace,
            extendedUnionTrace,
            true,
        );
    });
});

import {
    decorateWithForwardMatching,
    decorateWithBackwardMatching,
} from './MatchingUtils.js';

describe('forward and backward matching', () => {
    const shortTrace = constructSimpleTrace([1, 3]);
    const longTrace1 = constructSimpleTrace([1, 3, 1, 5]);
    const longTrace2 = constructSimpleTrace([1, 3, 1, 5]);
    const unionTrace = constructUnionTrace(
        [1, 3, 1, 5],
        [1, 7, 1, 8],
    );

    const withNoTrace = {
        name: 'noTrace',
        args: [],
    };
    const withShortTrace = {
        name: 'shortTrace',
        trace: shortTrace,
        args: [],
    };
    const withLongTrace = {
        name: 'longTrace',
        trace: longTrace1,
        args: [],
    }
    const withUnionTrace = {
        name: 'unionTrace',
        trace: unionTrace,
        args: [],
    };

    const expectation = (matched) => (shortHL) => (longHL) => (unionHL) => {
        // An item with no trace will never be highlighted.
        expect(matched.withNoTrace).toHaveProperty('highlight', 'none');
        expect(matched.withShortTrace).toHaveProperty('highlight', shortHL);
        expect(matched.withLongTrace).toHaveProperty('highlight', longHL);
        expect(matched.withUnionTrace).toHaveProperty('highlight', unionHL);
    }

    const testMatch = (matcher) => (activeTrace) => expectation({
        withNoTrace: {
            ...withNoTrace,
            highlight: 'none',
        },
        withShortTrace: matcher(activeTrace)(withShortTrace),
        withLongTrace: matcher(activeTrace)(withLongTrace),
        withUnionTrace: matcher(activeTrace)(withUnionTrace),
    });

    describe('decorateWithForwardMatching', () => {
        const testForwardMatch = testMatch(decorateWithForwardMatching);
        const testHighlightsNothing = (trace) => testForwardMatch(trace)('none')('none')('none');

        it('highlights correctly for short trace', () => {
            testForwardMatch(shortTrace)
            ('forward') // Short trace matched against itself.
            ('forward') // The long trace is an extension of the short trace.
            ('forward') // The union trace contains the long trace, so transitivity rules.
            ;
        });

        it('highlights correctly for long trace', () => {
            testForwardMatch(longTrace1)
            ('none') // A short trace matched against a longer trace does not match.
            ('forward') // The long trace matched against itself.
            ('forward') // The union trace contains the long trace.
            ;
        });

        it('highlights correctly for union trace', () => {
            testForwardMatch(unionTrace)
            ('none') // A short trace matched against a longer trace does not match.
            ('none') // The long trace does not contain the union trace.
            ('forward') // The union trace matched against itself.
            ;
        });

        it('highlights nothing when given a trace that does not exist', () => {
            testHighlightsNothing(constructSimpleTrace([3, 5]));
        });

        it('highlights nothing when given extended version of long trace', () => {
            const extendedLongTrace = {
                name: 'Cons',
                num: '1',
                trace: longTrace1,
            };
            testHighlightsNothing(extendedLongTrace);
        });

        it('highlights nothing when given extended version of union trace', () => {
            const extendedUnionTrace = {
                name: 'Cons',
                num: '1',
                trace: unionTrace,
            };
            testHighlightsNothing(extendedUnionTrace);
        });

        it('highlights nothing when given partially overlapping union traces', () => {
            const partialTrace1 = {
                name: 'Union',
                trace1: longTrace1,
                trace2: shortTrace,
            };
            testHighlightsNothing(partialTrace1);

            const partialTrace2 = {
                name: 'Union',
                trace1: shortTrace,
                trace2: longTrace2,
            };
            testHighlightsNothing(partialTrace2);
        });
    });

    describe('decorateWithBackwardMatching', () => {
        const testBackwardMatch = testMatch(decorateWithBackwardMatching);
        const testHighlightsNothing = (trace) => testBackwardMatch(trace)('none')('none')('none');
        const testHighlightsEverything = (trace) => testBackwardMatch(trace)('backward')('backward')('backward');

        it('highlights only short for short trace', () => {
            testBackwardMatch(shortTrace)
            ('backward') // The short trace matched against itself.
            ('none') // The long trace cannot be ancestor to short trace.
            ('none') // The union trace cannot be ancestor to short trace.
            ;
        });

        it('highlights short and long trace for long trace', () => {
            testBackwardMatch(longTrace1)
            ('backward') // The short trace can be an ancestor to the long trace.
            ('backward') // The long trace matched against itself.
            ('none') // The union trace cannot be an ancestor to the long trace.
        });

        it('highlights everything for union trace', () => {
            testBackwardMatch(unionTrace)
            ('backward') // The short trace can be an ancestor to the union trace.
            ('backward') // The long trace can be an ancestor to the union trace.
            ('backward') // The union trace matched against itself.
        });

        it('highlights nothing when given a trace that does not exist', () => {
            testHighlightsNothing(constructSimpleTrace([3, 5]));
        });

        it('highlights short and long trace when given extended version of long trace', () => {
            const extendedLongTrace = {
                name: 'Cons',
                num: '1',
                trace: longTrace1,
            };
            testBackwardMatch(extendedLongTrace)
            ('backward') // The short trace can be an ancestor to the long trace, and thus to extended long trace.
            ('backward') // The long trace _is_ the ancestor to the extended long trace.
            ('none') // The union trace cannot be an ancestor to the extended long trace.
            ;
        });

        it('highlights everything when given extended version of union trace', () => {
            const extendedUnionTrace = {
                name: 'Cons',
                num: '1',
                trace: unionTrace,
            };
            testHighlightsEverything(extendedUnionTrace);
        });
    });
});
