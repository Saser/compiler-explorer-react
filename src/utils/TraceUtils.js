// Constructs a 'simple' trace object, i.e. one consisting of only Cons's,
// and that can be expressed as an array (e.g. [1, 9, 1, 13]). Takes such an
// array as parameter.
export const constructSimpleTrace = (traceArray) => {
    if (traceArray === null) {
        throw 'array is null';
    }

    if (traceArray === undefined) {
        throw 'array is undefined';
    }

    if (traceArray.includes(null)) {
        throw 'array contains null values';
    }

    if (traceArray.includes(undefined)) {
        throw 'array contains undefined values';
    }

    if (traceArray.length === 0) {
        throw 'array is empty';
    }

    return constructSimpleTraceRec(traceArray);
}

const constructSimpleTraceRec = (traceArray) => {
    const len = traceArray.length;
    if (len === 0) {
        return null;
    }

    const el = traceArray[len - 1];
    const rest = traceArray.slice(0, -1);
    return {
        cons: 'Cons',
        num: el.toString(),
        trace: constructSimpleTraceRec(rest),
    };
}

// Construct a `Union` trace, that has the two given trace arrays as first and
// second child, respectively. The conditions for the arrays are equal to those
// for `constructSimpleTrace`.
export const constructUnionTrace = (traceArray1, traceArray2) => {
    if (traceArray1 === null) {
        throw 'first array is null';
    }

    if (traceArray2 === null) {
        throw 'second array is null';
    }

    if (traceArray1 === undefined) {
        throw 'first array is undefined';
    }

    if (traceArray2 === undefined) {
        throw 'second array is undefined';
    }

    if (traceArray1.length === 0) {
        throw 'first array is empty';
    }

    if (traceArray2.length === 0) {
        throw 'second array is empty';
    }

    if (traceArray1.includes(null)) {
        throw 'first array contains null values';
    }

    if (traceArray2.includes(null)) {
        throw 'second array contains null values';
    }

    if (traceArray1.includes(undefined)) {
        throw 'first array contains undefined values';
    }

    if (traceArray2.includes(undefined)) {
        throw 'second array contains undefined values';
    }

    return {
        cons: 'Union',
        trace1: constructSimpleTrace(traceArray1),
        trace2: constructSimpleTrace(traceArray2),
    };
}

// Determines whether two trace trees (that are assumed to be valid) are equal,
// by doing a recursive comparison.
export const traceEquals = (trace1, trace2) => {
    if (trace1 === undefined) {
        throw 'first trace is undefined';
    }

    if (trace2 === undefined) {
        throw 'second trace is undefined';
    }

    // We have two empty traces.
    if (trace1 === null && trace2 === null) {
        return true;
    }

    // We have one empty trace and one non-empty trace.
    if (trace1 === null || trace2 === null) {
        return false;
    }

    const validTypes = ['Cons', 'Union'];
    // We have two non-empty traces, but at least one has an invalid type.
    if (validTypes.includes(trace1.cons) === false) {
        throw `invalid cons on first trace: '${trace1.cons}'`;
    }

    if (validTypes.includes(trace2.cons) === false) {
        throw `invalid cons on second trace: '${trace2.cons}'`;
    }

    // We have two non-empty traces of valid, but different, types.
    if (trace1.cons !== trace2.cons) {
        return false;
    }

    // We have two non-empty traces of same, valid type.
    switch (trace1.cons) {
        case 'Cons':
            return trace1.num === trace2.num && traceEquals(trace1.trace, trace2.trace);
        case 'Union':
            return traceEquals(trace1.trace1, trace2.trace1) && traceEquals(trace1.trace2, trace2.trace2);
    }
}

// Determines whether the `trace` tree contains the `sub` tree as a subtree.
export const containsSubtrace = (sub, trace) => {
    if (sub === undefined) {
        throw 'sub is undefined';
    }

    if (trace === undefined) {
        throw 'trace is undefined';
    }

    if (sub === null) {
        return true;
    }

    return containsSubtraceAux(sub, trace);
}

const containsSubtraceAux = (sub, trace) => {
    if (traceEquals(sub, trace)) {
        return true;
    }

    if (trace === null) {
        return false;
    }

    if (trace.cons === 'Cons') {
        return containsSubtraceAux(sub, trace.trace);
    } else {
        return containsSubtraceAux(sub, trace.trace1) || containsSubtraceAux(sub, trace.trace2);
    }
}
