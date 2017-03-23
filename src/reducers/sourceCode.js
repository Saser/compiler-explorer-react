import {
    SOURCE_CODE_UPDATED,
    SOURCE_CODE_REQUEST_COMPILE,
    SOURCE_CODE_COMPILE_SUCCESS,
} from '../actions/types.js';

const initialSourceCode = {
    isCompiling: false,
    sourceText: '',
};

const sourceCode = (state = initialSourceCode, action) => {
    switch (action.type) {
        case SOURCE_CODE_UPDATED:
            return {
                ...state,
                sourceText: action.sourceCode,
            };
        case SOURCE_CODE_REQUEST_COMPILE:
            // TODO: begin JSON.parse here (placeholder for compilation)
            return {
                ...state,
                isCompiling: true,
            };
        case SOURCE_CODE_COMPILE_SUCCESS:
            // TODO: dispatch an action to update the IL tree here.
            return {
                ...state,
                isCompiling: false,
            };
        default:
            return state;
    }
}

export default sourceCode;
