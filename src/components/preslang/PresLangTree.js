import React, { PropTypes } from 'react';

import _ from 'lodash';
import { intersperse } from '../../utils/ArrayUtils.js';
import { addPrefixedIntegerKeys } from '../../utils/ReactUtils.js';

import Prog from './Prog.js';
import Prompt from './Prompt.js';
import Dlet from './Dlet.js';
import Mat from './Mat.js';
import Con from './Con.js';
import App from './App.js';
import Nothing from './Nothing.js';

const PresLangTree = ({ tree, onClickFactory }) => {
    let component = undefined;
    switch (tree.cons) {
        case 'Prog':
            component = Prog;
            break;
        case 'Prompt':
            component = Prompt;
            break;
        case 'Dlet':
            component = Dlet;
            break;
        case 'Mat':
            component = Mat;
            break;
        case 'Con':
            component = Con;
            break;
        case 'App':
            component = App;
            break;
        default:
            component = Nothing;
            break;
    }

    const onClick = onClickFactory(tree.tra);
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
        tra: PropTypes.object,
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

export const semicolonSeparatedTrees = (prefix, trees, onClickFactory) => {
    const keyed = keyedTrees(prefix, trees, onClickFactory);
    const interspersed = intersperse('; ', keyed);
    return _.concat('[', interspersed, ']');
}
