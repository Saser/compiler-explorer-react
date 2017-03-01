import React, { PropTypes } from 'react';

import TraceSpan from './TraceSpan.js';

const Lit = ({ val, isHighlighted }) => {
    return (onTraceClick) => (
        <TraceSpan onTraceClick={onTraceClick} isHighlighted={isHighlighted}>Lit {val}</TraceSpan>
    );
}

Lit.propTypes = {
    val: PropTypes.string.isRequired,
    isHighlighted: PropTypes.bool.isRequired,
};

export default Lit;
