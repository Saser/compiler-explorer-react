import * as types from './types.js';

export const activateTrace = (trace) => {
    return {
        type: types.ACTIVATE_TRACE,
        trace,
    };
}

export const deactivateTrace = () => {
    return {
        type: types.DEACTIVATE_TRACE,
    };
}
