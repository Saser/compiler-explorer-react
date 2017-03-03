import { connect } from 'react-redux';

import { activateTrace } from '../actions/creators.js';

import { isArrayPrefix } from '../utils/ArrayUtils.js';

import PresLangTreeWrapper from '../components/presLang/PresLangTreeWrapper.js';

const highlightNodes = (tree, highlightedTrace) => {
    let isHighlighted = null;

    if (highlightedTrace === null) {
        isHighlighted = false;
    } else {
        isHighlighted = isArrayPrefix(highlightedTrace, tree.trace);
    }

    let newTree = tree;

    switch (tree.con) {
        case 'Lit':
        case 'Pvar':
            newTree = {
                ...tree,
                isHighlighted,
            };
            break;
        case 'Tdec':
            newTree = {
                ...tree,
                isHighlighted,
                dec: highlightNodes(tree.dec, highlightedTrace),
            };
            break;
        case 'Dlet':
            newTree = {
                ...tree,
                isHighlighted,
                pat: highlightNodes(tree.pat, highlightedTrace),
                expr: highlightNodes(tree.expr, highlightedTrace),
            };
            break;
        default:
            newTree = {
                ...tree,
                isHighlighted,
            };
            break;
    }

    return newTree;
}

const mapStateToProps = (state) => ({
    tree: highlightNodes(state.nodes, state.highlightedTrace),
})

const mapDispatchToProps = (dispatch) => ({
    onTreeClick: (trace) => dispatch(activateTrace(trace)),
})

const LangTree = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PresLangTreeWrapper);

export default LangTree;
