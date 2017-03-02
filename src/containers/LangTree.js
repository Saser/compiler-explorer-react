import { connect } from 'react-redux';

import { activateTrace } from '../actions/creators.js';

import PresLangTreeWrapper from '../components/presLang/PresLangTreeWrapper.js';

const isArrayPrefix = (arr1, arr2) => {
    if (arr1.length === 0) {
        return true;
    } else if (arr2.length === 0) {
        return false;
    } else {
        return arr1[0] === arr2[0] && isArrayPrefix(arr1.slice(1), arr2.slice(2));
    }
}

const highlightNodes = (tree, highlightedTrace) => {
    let isHighlighted = null;

    if (highlightedTrace === null) {
        isHighlighted = false;
    } else {
        isHighlighted = isArrayPrefix(tree.trace, highlightedTrace);
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

    console.log(newTree);
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
