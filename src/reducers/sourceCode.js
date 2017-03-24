import {
    SOURCE_CODE_TEXT_UPDATED,
    SOURCE_CODE_COMPILE_STARTED,
    SOURCE_CODE_COMPILE_FINISHED,
} from '../actions/types.js';

const initialSourceCode = {
    isCompiling: false,
    sourceText: '',
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
        default:
            return state;
    }
}

export default sourceCode;
