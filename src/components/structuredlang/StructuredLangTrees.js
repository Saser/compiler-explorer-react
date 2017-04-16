import React from 'react';
import PropTypes from 'prop-types';

import StructuredExpWrapper from './StructuredExpWrapper.js';

const StructuredLangTrees = ({ trees }) => {
    if (!trees) {
        return null;
    }

    const renderedTrees = trees.map((tree) => (
        <StructuredExpWrapper
            key={tree.lang}
            lang={tree.lang}
            sExp={tree.prog}
        />
    ));

    return <div>{renderedTrees}</div>;
}

StructuredLangTrees.propTypes = {
    trees: PropTypes.arrayOf(PropTypes.shape({
        lang: PropTypes.string.isRequired,
        prog: PropTypes.object.isRequired,
    })),
}

export default StructuredLangTrees;
