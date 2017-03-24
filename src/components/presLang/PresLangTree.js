import React, { PropTypes } from 'react';

import Tdec from './Tdec.js';

const PresLangTree = ({ tree, onTreeClick }) => {
    const onClick = () => onTreeClick(tree.trace);
    let element = null;
    switch (tree.cons) {
        case 'Tdec':
            element = <Tdec {...tree} onClick={onClick} dispatchFunction={onTreeClick} />;
            break;
        default:
            element = <span>Nothing yet</span>;
            break;
    }
    return element;
}

PresLangTree.propTypes = {
    tree: PropTypes.shape({
        cons: PropTypes.string.isRequired,
        trace: PropTypes.array.isRequired,
        isHighlighted: PropTypes.bool.isRequired,
    }).isRequired,
    onTreeClick: PropTypes.func.isRequired,
};

export const prefixedTrees = (prefix, trees, onClickFactory) => {
    return addPrefixedIntegerKeys(prefix, trees)
           .map((tree) => (
               <PresLangTree
                  key={tree.key}
                  tree={tree}
                  onClickFactory={onClickFactory}
               />
           ));
}

export const commaSeparatedTrees = (prefix, trees, onClickFactory) => {
    return intersperse(', ', prefixedTrees(prefix, trees, onClickFactory));
}

export default PresLangTree;
