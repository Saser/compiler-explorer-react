import React, { PropTypes } from 'react';

import PresLangTree from './PresLangTree.js';

const PresLangTreeWrapper = ({ lang, tree }) => (
    <pre>
        <span>{lang}</span><br />
        <PresLangTree tree={tree} />
    </pre>
)

PresLangTreeWrapper.propTypes = {
    lang: PropTypes.string.isRequired,
    tree: PropTypes.shape({
        cons: PropTypes.string.isRequired,
        trace: PropTypes.object,
    }),
};

export default PresLangTreeWrapper;
