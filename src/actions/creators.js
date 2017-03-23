import * as types from './types.js';

export const traceActivated = (trace) => {
    return {
        type: types.TRACE_ACTIVATED,
        trace,
    };
}

export const traceDeactivated = () => {
    return {
        type: types.TRACE_DEACTIVATED,
    };
}

export const sourceCodeTextUpdated = (sourceText) => {
    return {
        type: types.SOURCE_CODE_TEXT_UPDATED,
        sourceText,
    };
}

export const sourceCodeRequestCompile = () => {
    return {
        type: types.SOURCE_CODE_REQUEST_COMPILE,
    };
}

export const sourceCodeCompileSuccess = (json) => {
    return {
        type: types.SOURCE_CODE_COMPILE_SUCCESS,
        json,
    };
}
