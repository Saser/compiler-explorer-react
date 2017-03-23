import { combineReducers } from 'redux';

import highlightedTrace from './highlightedTrace.js';
import trees from './trees.js';
import sourceCode from './sourceCode.js';

const compilerExplorer = combineReducers({
    highlightedTrace,
    trees,
    sourceCode,
});

export default compilerExplorer;
