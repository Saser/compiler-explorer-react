import React, { PropTypes } from 'react';

import ExpSpan from './ExpSpan.js';
import { semicolonSeparatedTrees } from '../PresLangTree.js';

const Prog = ({ tops, onClick, onClickFactory }) => {
    const topTrees = semicolonSeparatedTrees('Prog', tops, onClickFactory);
    return (
        <ExpSpan onClick={onClick}>
            Prog {topTrees}
        </ExpSpan>
    );
}

Prog.propTypes = {
    tops: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default Prog;
