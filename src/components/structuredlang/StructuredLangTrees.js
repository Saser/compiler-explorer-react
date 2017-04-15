import React from 'react';
import PropTypes from 'prop-types';

import StructuredExpWrapper from './StructuredExpWrapper.js';

const StructuredLangTrees = ({ trees, createOnClick }) => {
    if (!trees) {
        return null;
    }

    const renderedTrees = trees.map((tree) => (
        <StructuredExpWrapper
            key={tree.lang}
            lang={tree.lang}
            sExp={tree.prog}
            createOnClick={createOnClick(tree.lang)}
        />
    ));

    return <div>{renderedTrees}</div>;
}

StructuredLangTrees.propTypes = {
    trees: PropTypes.arrayOf(PropTypes.shape({
        lang: PropTypes.string.isRequired,
        prog: PropTypes.object.isRequired,
    })),
    createOnClick: PropTypes.func.isRequired,
};

export default StructuredLangTrees;
