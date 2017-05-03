import React from 'react';
import PropTypes from 'prop-types';

import DisplayExpWrapper from './DisplayExpWrapper.js';

const DisplayLangTrees = ({ lastCompilation, trees, createOnClick }) => {
    if (lastCompilation.status === 'failed') {
        const style = {
            color: 'red',
        };
        return <div style={style}>Compilation failed: {lastCompilation.error}</div>;
    }

    const renderedTrees = trees.map((tree) => (
        <DisplayExpWrapper
            key={tree.lang}
            lang={tree.lang}
            exp={tree.prog}
            createOnClick={createOnClick(tree.lang)}
        />
    ));

    return <div>{renderedTrees}</div>;
}

DisplayLangTrees.propTypes = {
    lastCompilation: PropTypes.shape({
        status: PropTypes.string.isRequired,
        error: PropTypes.string,
    }).isRequired,
    trees: PropTypes.arrayOf(PropTypes.shape({
        lang: PropTypes.string.isRequired,
        prog: PropTypes.object.isRequired,
    })).isRequired,
    createOnClick: PropTypes.func.isRequired,
};

export default DisplayLangTrees;
