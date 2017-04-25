import * as types from './types.js';

import request from 'browser-request';

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

export const sourceCodeCompileFailed = (message) => {
    return {
        type: types.SOURCE_CODE_COMPILE_FAILED,
        message,
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

export const compilationFailed = (message) => {
    return (dispatch) => {
        dispatch(sourceCodeCompileFailed(message));
        dispatch(sourceCodeCompileFinished());
    }
}

export const compileSourceText = (sourceText) => {
    return (dispatch) => {
        dispatch(sourceCodeCompileStarted());

        const requestOptions = {
            method: 'POST',
            uri: 'http://www.cse.chalmers.se/~myreen/explorer/exp.php',
            form: {
                q: sourceText,
            },
        };

        request(requestOptions, (error, response, body) => {
            if (error) {
                dispatch(compilationFailed('error connecting to compilation server'));
            } else {
                const errorMarker = '### ERROR: ';
                if (body.startsWith(errorMarker)) {
                    const errorMessage = body.substring(errorMarker.length);
                    dispatch(compilationFailed(errorMessage));
                } else {
                    dispatch(compilationSuccessful(body));
                }
            }
        });
    }
}
