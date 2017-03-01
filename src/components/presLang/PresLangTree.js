import React, { PropTypes } from 'react';

const PresLangTree = ({ tree, onTreeClick }) => {
    return <span>Nothing yet</span>;
}

PresLangTree.propTypes = {
    tree: PropTypes.shape({
        con: PropTypes.string.isRequired,
        trace: PropTypes.array.isRequired,
        isHighlighted: PropTypes.bool.isRequired,
    }).isRequired,
    onTraceClick: PropTypes.func.isRequired,
};

export default PresLangTree;
