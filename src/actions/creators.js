import * as types from './types.js';

export const activateTrace = (trace) => {
    console.log(`Activating trace: ${trace}`);
    return {
        type: types.ACTIVATE_TRACE,
        trace,
    };
}

export const deactivateTrace = () => {
    console.log('Deactivating trace');
    return {
        type: types.DEACTIVATE_TRACE,
    };
}
