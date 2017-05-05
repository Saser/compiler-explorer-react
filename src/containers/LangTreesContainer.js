import { connect } from 'react-redux';

import {
    traceActivated,
    traceDeactivated,
} from '../actions/creators.js';

import {
    decorateAllNone,
    decorateWithBackwardMatching,
    decorateWithForwardMatching,
    decorateWithEqualMatching,
    matchingDirection,
} from '../utils/MatchingUtils.js';

import StructuredLangTrees from '../components/structuredlang/DisplayLangTrees.js';

const highlightSingleTreeUsingFunc = (decoratorFunc) => (tree) => ({ ...tree, prog: decoratorFunc(tree.prog) });

const determineDecoratorFunc = (stateActivatedTrace) => (tree) => {
    switch (matchingDirection(stateActivatedTrace.lang, tree.lang)) {
        case 'equal':
            return decorateWithEqualMatching;
        case 'backward':
            return decorateWithBackwardMatching;
        case 'forward':
        default:
            return decorateWithForwardMatching;
    }
}

const highlightTree = (stateActivatedTrace) => (tree) => {
    let decoratorFunc;
    if (stateActivatedTrace === null) {
        decoratorFunc = decorateAllNone;
    } else {
        decoratorFunc = determineDecoratorFunc(stateActivatedTrace)(tree)(stateActivatedTrace.trace);
    }
    return highlightSingleTreeUsingFunc(decoratorFunc)(tree);
}

const highlight = (stateActivatedTrace) => (stateTrees) => {
    return stateTrees.parsedTrees.map(highlightTree(stateActivatedTrace));
}

const mapStateToProps = (state) => ({
    trees: highlight(state.activatedTrace)(state.trees),
    lastCompilation: state.sourceCode.lastCompilation,
})

const mapDispatchToProps = (dispatch) => ({
    createOnClick: (lang) => (trace) => (event) => {
        event.stopPropagation();
        if (trace) {
            dispatch(traceActivated(lang, trace));
        } else {
            dispatch(traceDeactivated());
        }
    },
})

const LangTreesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StructuredLangTrees);

export default LangTreesContainer;
