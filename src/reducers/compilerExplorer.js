import { combineReducers } from 'redux'

import highlightedTrace from './highlightedTrace.js'
import nodes from './nodes.js'

const compilerExplorer = combineReducers({
    nodes,
    highlightedTrace,
});

export default compilerExplorer;
