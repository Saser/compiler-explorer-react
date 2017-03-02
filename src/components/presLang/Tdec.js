import React, { PropTypes } from 'react';

import NodeSpan from './NodeSpan.js';
import PresLangTree from './PresLangTree.js'

const Tdec = ({ dec, isHighlighted, onClick, dispatchFunction }) => (
    <NodeSpan isHighlighted={isHighlighted} onClick={onClick}>
        Tdec (<PresLangTree tree={dec} onTreeClick={dispatchFunction} />)
    </NodeSpan>
)

Tdec.propTypes = {
    dec: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    dispatchFunction: PropTypes.func.isRequired,
};

export default Tdec;
