// Handling the activated trace.
export const TRACE_ACTIVATED = 'TRACE_ACTIVATED';
export const TRACE_DEACTIVATED = 'TRACE_DEACTIVATED';

// Handling the user input, i.e. compile code.
// TODO: currently, this means parsing the pasted JSON.
export const SOURCE_CODE_TEXT_UPDATED = 'SOURCE_CODE_TEXT_UPDATED';
export const SOURCE_CODE_COMPILE_STARTED = 'SOURCE_CODE_COMPILE_STARTED';
export const SOURCE_CODE_COMPILE_FINISHED = 'SOURCE_CODE_COMPILE_FINISHED';

// Actions corresponding to the IL trees.
export const TREES_PARSING_STARTED = 'TREES_PARSING_STARTED';
export const TREES_PARSING_FINISHED = 'TREES_PARSING_FINISHED';
