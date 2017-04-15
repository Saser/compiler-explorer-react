import React from 'react';
import PropTypes from 'prop-types';

const StructuredLangTrees = ({ trees }) => (
    <div>No structuredLang trees yet!</div>
)

StructuredLangTrees.propTypes = {
    trees: PropTypes.arrayOf(PropTypes.shape({
        lang: PropTypes.string.isRequired,
        prog: PropTypes.object.isRequired,
    })),
}

export default StructuredLangTrees;
