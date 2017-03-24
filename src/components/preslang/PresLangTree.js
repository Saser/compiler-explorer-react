import React, { PropTypes } from 'react';

import { intersperse } from '../../utils/ArrayUtils.js';
import { addPrefixedIntegerKeys } from '../../utils/ReactUtils.js';

import Prog from './Prog.js';
import Nothing from './Nothing.js';

const PresLangTree = ({ tree, onClickFactory }) => {
    let component = undefined;
    switch (tree.cons) {
        case 'Prog':
            component = Prog;
            break;
        default:
            component = Nothing;
    }

    const onClick = onClickFactory(tree.trace);
    const props = {
        ...tree,
        onClick,
        onClickFactory,
    };

    return component(props);
}

PresLangTree.propTypes = {
    tree: PropTypes.shape({
        cons: PropTypes.string.isRequired,
        trace: PropTypes.object,
    }),
    onClickFactory: PropTypes.func.isRequired,
};

export default PresLangTree;

export const keyedTrees = (prefix, trees, onClickFactory) => {
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
    return intersperse(', ', keyedTrees(prefix, trees, onClickFactory));
}
