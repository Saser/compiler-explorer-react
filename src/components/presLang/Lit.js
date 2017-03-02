import React, { PropTypes } from 'react';

import NodeSpan from './NodeSpan.js';

const Lit = ({ val, isHighlighted, onClick }) => (
    <NodeSpan isHighlighted={isHighlighted} onClick={onClick}>
        Lit {val}
    </NodeSpan>
)

Lit.propTypes = {
    val: PropTypes.string.isRequired,
    isHighlighted: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Lit;
