import {
    SOURCE_CODE_TEXT_UPDATED,
    SOURCE_CODE_REQUEST_COMPILE,
    SOURCE_CODE_COMPILE_SUCCESS,
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
        case SOURCE_CODE_REQUEST_COMPILE:
            return {
                ...state,
                isCompiling: true,
            };
        case SOURCE_CODE_COMPILE_SUCCESS:
            return {
                ...state,
                isCompiling: false,
            };
        default:
            return state;
    }
}

export default sourceCode;
