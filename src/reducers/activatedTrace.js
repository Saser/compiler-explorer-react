import {
    TRACE_ACTIVATED,
    TRACE_DEACTIVATED
} from '../actions/types.js';

const activatedTrace = (state = null, action) => {
    switch (action.type) {
        case TRACE_ACTIVATED:
            return {
                lang: action.lang,
                trace: action.trace,
            };
        case TRACE_DEACTIVATED:
            return null;
        default:
            return state;
    }
}

export default activatedTrace;
