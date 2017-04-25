import {
    SOURCE_CODE_TEXT_UPDATED,
    SOURCE_CODE_COMPILE_STARTED,
    SOURCE_CODE_COMPILE_FINISHED,
    SOURCE_CODE_COMPILE_FAILED,
    TREES_PARSING_STARTED,
} from '../actions/types.js';

const initialSourceCode = {
    isCompiling: false,
    sourceText: 'val x = 3 + 5;',
    lastCompilation: {
        status: 'unknown',
    },
};

const sourceCode = (state = initialSourceCode, action) => {
    switch (action.type) {
        case SOURCE_CODE_TEXT_UPDATED:
            return {
                ...state,
                sourceText: action.sourceText,
            };
        case SOURCE_CODE_COMPILE_STARTED:
            return {
                ...state,
                isCompiling: true,
            };
        case SOURCE_CODE_COMPILE_FINISHED:
            return {
                ...state,
                isCompiling: false,
            };
        case SOURCE_CODE_COMPILE_FAILED:
            return {
                ...state,
                lastCompilation: {
                    status: 'failed',
                    error: action.message,
                },
            };
        case TREES_PARSING_STARTED:
            return {
                ...state,
                lastCompilation: {
                    status: 'successful',
                },
            };
        default:
            return state;
    }
}

export default sourceCode;
