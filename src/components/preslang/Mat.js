import React, { PropTypes } from 'react';

import { addPrefixedIntegerKeys } from '../../utils/ReactUtils.js';
import { intersperse } from '../../utils/ArrayUtils.js';

import PresLangTree from './PresLangTree.js';
import TreeSpan from './TreeSpan.js';

const patexpTupleToTrees = ({ key, pat, exp }, onClickFactory) => (
    <span key={key}>
        (
            <PresLangTree tree={pat} onClickFactory={onClickFactory} />
            {', '}
            <PresLangTree tree={exp} onClickFactory={onClickFactory} />
        )
    </span>
)

const Mat = ({ exp, exps, onClick, onClickFactory }) => {
    const expTree = <PresLangTree tree={exp} onClickFactory={onClickFactory} />;
    const expsWithKeys = addPrefixedIntegerKeys('Mat', exps);
    const tupleTrees = expsWithKeys.map((obj) => patexpTupleToTrees(obj, onClickFactory));
    const interspersedTupleTrees = intersperse('; ', tupleTrees);
    return (
        <TreeSpan onClick={onClick}>
            Mat ({expTree}) [{interspersedTupleTrees}]
        </TreeSpan>
    );
}

Mat.propTypes = {
    exp: PropTypes.object.isRequired,
    exps: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default Mat;
