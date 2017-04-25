import _ from 'lodash';

// The below functions are convenince functions for checking whether a given
// trace object has a certain constructor. _The arguments are assumed to be
// correct trace objects_ -- be wary of using `null` or `undefined` as
// arguments.
export const isEmpty = (trace) => trace.name === 'Empty';
export const isCons = (trace) => trace.name === 'Cons';
export const isUnion = (trace) => trace.name === 'Union';

const constructSimpleTraceRec = (traceArray) => {
    if (traceArray.length === 0) {
        return { name: 'Empty' };
    }

    const last = _.last(traceArray);
    const initial = _.initial(traceArray);
    return {
        name: 'Cons',
        num: last.toString(),
        trace: constructSimpleTraceRec(initial),
    };
}

// Constructs a 'simple' trace object, i.e. one consisting of only Cons's,
// and that can be expressed as an array (e.g. [1, 9, 1, 13]). Takes such an
// array as parameter.
export const constructSimpleTrace = (traceArray) => {
    if (traceArray === null) {
        throw new Error('array is null');
    }

    if (traceArray === undefined) {
        throw new Error('array is undefined');
    }

    if (traceArray.includes(null)) {
        throw new Error('array contains null values');
    }

    if (traceArray.includes(undefined)) {
        throw new Error('array contains undefined values');
    }

    if (traceArray.length === 0) {
        throw new Error('array is empty');
    }

    return constructSimpleTraceRec(traceArray);
}

// Construct a `Union` trace, that has the two given trace arrays as first and
// second child, respectively. The conditions for the arrays are equal to those
// for `constructSimpleTrace`.
export const constructUnionTrace = (traceArray1, traceArray2) => {
    if (traceArray1 === null) {
        throw new Error('first array is null');
    }

    if (traceArray2 === null) {
        throw new Error('second array is null');
    }

    if (traceArray1 === undefined) {
        throw new Error('first array is undefined');
    }

    if (traceArray2 === undefined) {
        throw new Error('second array is undefined');
    }

    if (traceArray1.includes(null)) {
        throw new Error('first array contains null values');
    }

    if (traceArray2.includes(null)) {
        throw new Error('second array contains null values');
    }

    if (traceArray1.includes(undefined)) {
        throw new Error('first array contains undefined values');
    }

    if (traceArray2.includes(undefined)) {
        throw new Error('second array contains undefined values');
    }

    return {
        name: 'Union',
        trace1: constructSimpleTrace(traceArray1),
        trace2: constructSimpleTrace(traceArray2),
    };
}

// Determines whether two trace trees (that are assumed to be valid) are equal,
// by doing a recursive comparison.
export const traceEquals = (trace1, trace2) => {
    if (trace1 === undefined) {
        throw new Error('first trace is undefined');
    }

    if (trace2 === undefined) {
        throw new Error('second trace is undefined');
    }

    // We have two empty traces.
    if (isEmpty(trace1) && isEmpty(trace2)) {
        return true;
    }

    // We have one empty trace and one non-empty trace.
    if (isEmpty(trace1) || isEmpty(trace2)) {
        return false;
    }

    // We have two non-empty traces of valid, but different, types.
    if (trace1.name !== trace2.name) {
        return false;
    }

    // We have two non-empty traces of same, valid type.
    switch (trace1.name) {
        case 'Cons':
            return trace1.num === trace2.num && traceEquals(trace1.trace, trace2.trace);
        case 'Union':
        default:
            return traceEquals(trace1.trace1, trace2.trace1) && traceEquals(trace1.trace2, trace2.trace2);
    }
}

const containsSubtraceAux = (sub, trace) => {
    if (traceEquals(sub, trace)) {
        return true;
    }

    if (isEmpty(trace)) {
        return false;
    }

    if (trace.name === 'Cons') {
        return containsSubtraceAux(sub, trace.trace);
    } else {
        return containsSubtraceAux(sub, trace.trace1) || containsSubtraceAux(sub, trace.trace2);
    }
}

// Determines whether the `trace` tree contains the `sub` tree as a subtree.
export const containsSubtrace = (sub, trace) => {
    if (sub === undefined) {
        throw new Error('sub is undefined');
    }

    if (trace === undefined) {
        throw new Error('trace is undefined');
    }

    return containsSubtraceAux(sub, trace);
}
