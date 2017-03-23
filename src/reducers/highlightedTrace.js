import { TRACE_ACTIVATED, TRACE_DEACTIVATED } from '../actions/types.js';

const highlightedTrace = (state = null, action) => {
    switch (action.type) {
        case TRACE_ACTIVATED:
            return action.trace;
        case TRACE_DEACTIVATED:
            return null;
        default:
            return state;
    }
}

export default highlightedTrace;
