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

export const sourceCodeCompileStarted = () => {
    return {
        type: types.SOURCE_CODE_COMPILE_STARTED,
    };
}

export const sourceCodeCompileFinished = () => {
    return {
        type: types.SOURCE_CODE_COMPILE_FINISHED,
    };
}

export const treesParsingStarted = () => {
    return {
        type: types.TREES_PARSING_STARTED,
    };
}

export const treesParsingFinished = (trees) => {
    return {
        type: types.TREES_PARSING_FINISHED,
        trees,
    };
}
