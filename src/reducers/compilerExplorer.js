import { combineReducers } from 'redux';

import highlightedTrace from './highlightedTrace.js';
import nodes from './nodes.js';
import sourceCode from './sourceCode.js';

const compilerExplorer = combineReducers({
    highlightedTrace,
    nodes,
    sourceCode,
});

export default compilerExplorer;
