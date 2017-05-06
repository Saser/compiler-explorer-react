import { decorateExp } from './DisplayLangExpUtils.js';
import {
    containsSubtrace,
    traceEquals,
} from './TraceUtils.js';

// This array encodes the order of the languages as they appear in the
// compilation process. It also implicitly defines what arguments are valid for
// e.g. the `ordering` function.
export const langs = [
    'modLang',
    'conLang',
    'decLang',
    'exhLang',
    'patLang',
    'closLang',
    'bvl',
    'bvi',
    'dataLang',
    'wordLang',
    'stackLang',
    'labLang',
];

// Compares the two languages by the order in which they appear in the
// compilation process. For example, 'modLang' appears before 'exhLang'. This
// function works much like the `compare` method from Java (see the `Comparable`
// interface):
//
// * it returns a negative number if `lang1` appears before `lang2`;
// * it returns 0 if `lang1` and `lang2` are equal (i.e. the same language);
// * else, it returns a positive number (i.e. `lang1` appears after `lang2`).
//
// The arguments are strings of the form 'modLang', 'conLang', etc.  (i.e. not
// 'mod', 'con', etc.). The exceptions are 'bvl' and 'bvi'. The arguments must
// also be _valid_ languages; giving an invalid language means the comparison
// cannot be depended on.
export const ordering = (lang1, lang2) =>
    langs.indexOf(lang1) - langs.indexOf(lang2);

// This function determines which type of matching should be used for a tree in
// the language `treeLang`, given that the trace to match against is a trace
// from the language `traceLang`. It returns one of two strings:
//
// * 'backward' is returned if `treeLang` appears strictly before `traceLang`;
// * 'forward' is returned otherwise.
//
// The comparison is done according to the contract of the `compare` function
// above.
export const matchingDirection = (traceLang, treeLang) => {
    const order = ordering(treeLang, traceLang);

    if (order === 0) {
        return 'equal';
    } else if (order > 0) {
        return 'forward';
    } else {
        return 'backward';
    }
}

// Takes a tree, and decorates it with a property called 'isHighlighted', whose
// value will always be false.
export const decorateAllNone = (tree) => decorateExp('highlight', () => 'none', tree);

const forwardMatchesTrace = (activeTrace) => (itemTrace) => containsSubtrace(activeTrace, itemTrace);

// Given a `trace` and a exp `item`, determines whether that item should be
// highlighted according to the logic for forward matching. NOTE: assumes that
// the item does have a `trace` property.
//export const forwardMatches = (trace) => (item) => containsSubtrace(trace, item.trace);
export const forwardMatches = (trace) => (item) => forwardMatchesTrace(trace)(item.trace);

const noneOnUndefinedTrace = (f) => (item) => item.trace === undefined ? 'none' : f(item);

// Takes a `trace` and a `exp`, and recursively decorates the `exp` with a
// property `isHighlighted` containing true if an Item's trace matches the given
// `trace`, and false if the Item does not have a trace, or it does not match.
//
// Whether an Item's trace matches or not is determined by the rules of forward
// matching, i.e. whether the given `trace` is a subtrace to that Item's trace.
export const decorateWithForwardMatching = (trace) => (tree) => {
    const func = (item) =>
        containsSubtrace(trace, item.trace) ? 'forward' : 'none';
    const safeFunc = noneOnUndefinedTrace(func);
    return decorateExp('highlight', safeFunc, tree);
}

// Similar to `decorateWithForwardMatching`, but with backward matching logic
// instead, i.e. whether the Item's trace is a subtrace to the given trace.
export const decorateWithBackwardMatching = (trace) => (tree) => {
    const func = (item) =>
        containsSubtrace(item.trace, trace) ? 'backward' : 'none';
    const safeFunc = noneOnUndefinedTrace(func);
    return decorateExp('highlight', safeFunc, tree);
}

export const decorateWithEqualMatching = (trace) => (tree) => {
    const func = (item) =>
        traceEquals(item.trace, trace) ? 'equal' : 'none';
    const safeFunc = noneOnUndefinedTrace(func);
    return decorateExp('highlight', safeFunc, tree);
}
