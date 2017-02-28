import { combineReducers } from 'redux'

import highlightedTrace from './highlightedTrace.js'
import lang from './lang.js'
import nodes from './nodes.js'

const compilerExplorer = combineReducers({
    nodes,
    lang,
    highlightedTrace,
});
