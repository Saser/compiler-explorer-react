import React, { PropTypes } from 'react';

import _ from 'lodash';
import { intersperse } from '../../utils/ArrayUtils.js';
import { addPrefixedIntegerKeys } from '../../utils/ReactUtils.js';

import ExpTree, { isExp } from './exp/ExpTree.js';
import OpTree, { isOp } from './op/OpTree.js';
import Nothing from './Nothing.js';

const PresLangTree = ({ tree }) => {
    let component = undefined;
    let props = undefined;
    if (isExp(tree.cons)) {
        component = ExpTree;
        props = {
            expTree: tree,
        };
    } else if (isOp(tree.cons)) {
        component = OpTree;
        props = {
            opTree: tree,
        };
    } else {
        component = Nothing;
        props = {
            cons: tree.cons,
        };
    }

    return component(props);
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
