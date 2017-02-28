import { ACTIVATE_TRACE } as types from '../actions/types.js'

export const trace = (state = null, action) {
    switch (action.type) {
        case ACTIVATE_TRACE:
            return action.trace;
        case DEACTIVATE_TRACE:
            return null;
        default:
            return state;
    }
}
