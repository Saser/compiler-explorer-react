import React, { PropTypes } from 'react';

import PresLangTree from './PresLangTree.js';

const PresLangTreeWrapper = ({ tree, onTreeClick }) => (
    <pre>
        <PresLangTree tree={tree} onTreeClick={onTreeClick} />
    </pre>
)

PresLangTreeWrapper.propTypes = {
    tree: PropTypes.shape({
        con: PropTypes.string.isRequired,
        trace: PropTypes.array.isRequired,
        isHighlighted: PropTypes.bool.isRequired,
    }).isRequired,
    onTreeClick: PropTypes.func.isRequired,
};

export default PresLangTreeWrapper;
