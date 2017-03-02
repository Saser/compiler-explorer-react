import React, { PropTypes } from 'react';

import NodeSpan from './NodeSpan.js';

const Pvar = ({ varn, isHighlighted, onClick }) => (
    <NodeSpan isHighlighted={isHighlighted} onClick={onClick}>
        Pvar {varn}
    </NodeSpan>
)

Pvar.propTypes = {
    varn: PropTypes.string.isRequired,
    isHighlighted: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Pvar;
