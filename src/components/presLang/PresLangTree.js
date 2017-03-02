import React, { PropTypes } from 'react';

import Tdec from './Tdec.js'

const PresLangTree = ({ tree, onTreeClick }) => {
    const onClick = () => onTreeClick(tree.trace);
    let element = null;
    switch (tree.con) {
        case 'Tdec':
            element = <Tdec {...tree} onClick={onClick} dispatchFunction={onTreeClick} />;
            break;
        default:
            element = <span>Nothing yet</span>;
            break;
    }
    return element;
}

PresLangTree.propTypes = {
    tree: PropTypes.shape({
        con: PropTypes.string.isRequired,
        trace: PropTypes.array.isRequired,
        isHighlighted: PropTypes.bool.isRequired,
    }).isRequired,
    onTreeClick: PropTypes.func.isRequired,
};

export default PresLangTree;
