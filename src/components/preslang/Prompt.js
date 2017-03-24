import React, { PropTypes } from 'react';

import TreeSpan from './TreeSpan.js';
import { commaSeparatedTrees } from './PresLangTree.js';

const Prompt = ({ modN, decs, onClick, onClickFactory }) => {
    const decTrees = commaSeparatedTrees('Prompt', decs, onClickFactory);
    return (
        <TreeSpan onClick={onClick}>
            Prompt [{decTrees}]
        </TreeSpan>
    );
}

Prompt.propTypes = {
    modN: PropTypes.string,
    decs: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default Prompt;
