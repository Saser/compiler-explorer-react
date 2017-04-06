import React, { PropTypes } from 'react';

import { addPrefixedIntegerKeys } from '../../../utils/ReactUtils.js';
import { intersperse } from '../../../utils/ArrayUtils.js';

import PresLangTree from '../PresLangTree.js';
import ExpSpan from './ExpSpan.js';

const patexpTupleToTrees = ({ key, pat, exp }) => (
    <span key={key}>
        (
            <PresLangTree tree={pat} />
            {', '}
            <PresLangTree tree={exp} />
        )
    </span>
)

const Mat = ({ exp, exps }) => {
    const expTree = <PresLangTree tree={exp} />;
    const expsWithKeys = addPrefixedIntegerKeys('Mat', exps);
    const tupleTrees = expsWithKeys.map((obj) => patexpTupleToTrees(obj));
    const interspersedTupleTrees = intersperse('; ', tupleTrees);
    return (
        <ExpSpan>
            Mat ({expTree}) [{interspersedTupleTrees}]
        </ExpSpan>
    );
}

Mat.propTypes = {
    exp: PropTypes.object.isRequired,
    exps: PropTypes.array.isRequired,
};

export default Mat;
