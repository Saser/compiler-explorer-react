import React, { PropTypes } from 'react';

import _ from 'lodash';
import { intersperse } from '../../../utils/ArrayUtils.js';

import ExpSpan from './ExpSpan.js';
import { semicolonSeparatedTrees } from '../PresLangTree.js';

const renderStringArray = (arr) => {
    const quoted = arr.map((str) => `"${arr}"`);
    return _.concat('[', intersperse('; ', quoted), ']');
}

const Con = ({ modscon, exps, onClick, onClickFactory }) => {
    const modsconArray = modscon !== null
        ? _.concat(['SOME '], renderStringArray(modscon))
        : 'NONE';
    const expTrees = semicolonSeparatedTrees('Con', exps, onClickFactory);

    return (
        <ExpSpan onClick={onClick}>
            Con {modsconArray} {expTrees}
        </ExpSpan>
    );
}

Con.propTypes = {
    modscon: PropTypes.array,
    exps: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default Con;
