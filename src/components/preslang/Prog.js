import React, { PropTypes } from 'react';

import TreeSpan from './TreeSpan.js';
import { commaSeparatedTrees } from './PresLangTree.js';

const Prog = ({ tops, onClick, onClickFactory }) => {
    const topTrees = commaSeparatedTrees('Prog', tops, onClickFactory);
    return (
        <TreeSpan onClick={onClick}>
            Prog [{topTrees}]
        </TreeSpan>
    );
}

Prog.propTypes = {
    tops: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default Prog;
