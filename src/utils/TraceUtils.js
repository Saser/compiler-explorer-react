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

export const traceEquals = (trace1, trace2) => {
    return undefined;
}
