import React, { PropTypes } from 'react';

import NodeSpan from './NodeSpan.js';
import PresLangTree from './PresLangTree.js';

const Tdec = ({ dec, isHighlighted, onClick, dispatchFunction }) => {
    const decTree = <PresLangTree tree={dec} onTreeClick={dispatchFunction} />;
    return (
        <NodeSpan isHighlighted={isHighlighted} onClick={onClick}>
            Tdec ({decTree})
        </NodeSpan>
    );
}

Tdec.propTypes = {
    dec: PropTypes.object.isRequired,
    isHighlighted: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    dispatchFunction: PropTypes.func.isRequired,
};

export default Tdec;
