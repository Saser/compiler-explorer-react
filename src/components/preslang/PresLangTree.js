import React, { PropTypes } from 'react';

import _ from 'lodash';
import { intersperse } from '../../utils/ArrayUtils.js';
import { addPrefixedIntegerKeys } from '../../utils/ReactUtils.js';

import ExpTree, { isExp } from './exp/ExpTree.js';
import OpTree, { isOp } from './op/OpTree.js';
import Nothing from './Nothing.js';

const PresLangTree = ({ tree }) => {
    let component = undefined;
    if (isExp(tree.cons)) {
        component = ExpTree;
    } else if (isOp(tree.cons)) {
        component = OpTree;
    } else {
        component = Nothing;
    }

    return component(tree);
}

PresLangTree.propTypes = {
    tree: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }),
};

export default PresLangTree;

export const keyedTrees = (prefix, trees) => {
    return addPrefixedIntegerKeys(prefix, trees)
        .map((tree) => (
            <PresLangTree
                key={tree.key}
                tree={tree}
            />
        ));
}

export const semicolonSeparatedTrees = (prefix, trees) => {
    const keyed = keyedTrees(prefix, trees);
    const interspersed = intersperse('; ', keyed);
    return _.concat('[', interspersed, ']');
}
