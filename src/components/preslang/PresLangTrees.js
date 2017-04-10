import React, { PropTypes } from 'react';

import PresLangTreeWrapper from './PresLangTreeWrapper.js';

const PresLangTrees = ({ trees }) => {
    if (trees === null) {
        return null;
    }

    const wrappedTrees = trees.map((tree) => (
        <PresLangTreeWrapper
            key={tree.lang}
            lang={tree.lang}
            tree={tree.prog}
        />
    ));

    return (
        <div>
            {wrappedTrees}
        </div>
    );
}

PresLangTrees.propTypes = {
    trees: PropTypes.arrayOf(PropTypes.shape({
        lang: PropTypes.string.isRequired,
        prog: PropTypes.object.isRequired,
    })),
};

export default PresLangTrees;
