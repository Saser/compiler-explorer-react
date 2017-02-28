import * as types from './types.js'

export const activateTrace = (trace) => (
    {
        type: types.ACTIVATE_TRACE,
        trace,
    }
)
