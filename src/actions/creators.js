import * as types from './types.js';

export const traceActivated = (lang, trace) => {
    return {
        type: types.TRACE_ACTIVATED,
        lang,
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

// Thunk creators

export const compilationSuccessful = (json) => {
    return (dispatch) => {
        dispatch(sourceCodeCompileFinished());

        dispatch(treesParsingStarted());

        const trees = JSON.parse(json);

        dispatch(treesParsingFinished(trees));
    };
}

export const compileSourceText = (sourceText) => {
    return (dispatch) => {
        dispatch(sourceCodeCompileStarted());

        // TODO: actual compilation here.
        // const json =
        // doAwesomeServerSideCompilationThatReturnsJsonString(sourceText);
        const json = sourceText;

        dispatch(compilationSuccessful(json));
    }
}
