import * as types from './types.js';

export const traceActivated = (trace) => {
    return {
        type: types.TRACE_ACTIVATED,
        trace,
    };
}

export const traceDeactivated = () => {
    return {
        type: types.TRACE_DEACTIVATED,
    };
}
