import React, { PropTypes } from 'react';

import PresLangTree from './PresLangTree.js';

const PresLangTreeWrapper = ({ tree }) => {
    if (tree === null) {
        return null;
    }

    return (
        <pre>
            <PresLangTree tree={tree} />
        </pre>
    );
}

PresLangTreeWrapper.propTypes = {
    tree: PropTypes.shape({
        cons: PropTypes.string.isRequired,
        trace: PropTypes.object,
    }),
};

export default PresLangTreeWrapper;
