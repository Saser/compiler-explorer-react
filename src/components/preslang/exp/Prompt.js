import React, { PropTypes } from 'react';

import ExpSpan from './ExpSpan.js';
import { semicolonSeparatedTrees } from '../PresLangTree.js';

const Prompt = ({ modN, decs, onClick, onClickFactory }) => {
    const decTrees = semicolonSeparatedTrees('Prompt', decs, onClickFactory);
    return (
        <ExpSpan onClick={onClick}>
            Prompt {decTrees}
        </ExpSpan>
    );
}

Prompt.propTypes = {
    modN: PropTypes.string,
    decs: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default Prompt;
