import { combineReducers } from 'redux';

import activatedTrace from './activatedTrace.js';
import trees from './trees.js';
import sourceCode from './sourceCode.js';

const compilerExplorer = combineReducers({
    activatedTrace,
    trees,
    sourceCode,
});

export default compilerExplorer;
