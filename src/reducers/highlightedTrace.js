import { ACTIVATE_TRACE, DEACTIVATE_TRACE } from '../actions/types.js'

const highlightedTrace = (state = null, action) => {
    switch (action.type) {
        case ACTIVATE_TRACE:
            return action.trace;
        case DEACTIVATE_TRACE:
            return null;
        default:
            return state;
    }
}

export default highlightedTrace;
