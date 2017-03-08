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

    const withoutNulls = traceArray.filter((el) => el !== null);
    if (withoutNulls.length === 0) {
        throw 'array is empty';
    }

    return constructSimpleTraceRec(withoutNulls);
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
