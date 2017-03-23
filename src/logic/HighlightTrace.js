import { traceEquals } from '../utils/TraceUtils.js';

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
