import React, { PropTypes } from 'react';

import ExpSpan from './ExpSpan.js';
import { semicolonSeparatedTrees } from '../PresLangTree.js';

const Prompt = ({ modN, decs }) => {
    const decTrees = semicolonSeparatedTrees('Prompt', decs);
    return (
        <ExpSpan>
            Prompt {decTrees}
        </ExpSpan>
    );
}

Prompt.propTypes = {
    modN: PropTypes.string,
    decs: PropTypes.array.isRequired,
};

export default Prompt;
