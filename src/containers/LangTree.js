import { connect } from 'react-redux'

import { activateTrace } from '../actions/creators.js'

import PresLangTree from '../components/presLang/PresLangTree.js'

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

    switch (tree.con) {
        case 'Lit':
        case 'Pvar':
            return {
                ...tree,
                isHighlighted,
            };
        case 'Tdec':
            return {
                ...tree,
                isHighlighted,
                dec: highlightNodes(tree.dec, highlightedTrace),
            };
        case 'Dlet':
            return {
                ...tree,
                isHighlighted,
                pat: highlightNodes(tree.pat, highlightedTrace),
                expr: highlightNodes(tree.expr, highlightedTrace),
            };
        default:
            return {
                ...tree,
                isHighlighted,
            };
    }
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
)(PresLangTree);

export default LangTree;
