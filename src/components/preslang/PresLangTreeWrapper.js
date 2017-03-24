import React, { PropTypes } from 'react';

import PresLangTree from './PresLangTree.js';

const PresLangTreeWrapper = ({ tree, onClickFactory }) => {
    if (tree === null) {
        return null;
    }

    return (
        <pre>
            <PresLangTree tree={tree} onClickFactory={onClickFactory} />
        </pre>
    );
}

PresLangTreeWrapper.propTypes = {
    tree: PropTypes.shape({
        cons: PropTypes.string.isRequired,
        trace: PropTypes.object,
    }),
    onClickFactory: PropTypes.func.isRequired,
};

export default PresLangTreeWrapper;
