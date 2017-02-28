import React, { PropTypes } from 'react';

import TraceSpan from './TraceSpan.js'

const Lit = ({ trace, val }) => {
    return (onTraceClick) => (
        <TraceSpan onTraceClick={onTraceClick} trace={trace}>Lit {val}</TraceSpan>
    );
}

Lit.propTypes = {
    trace: PropTypes.array.isRequired,
    val: PropTypes.string.isRequired,
};

export default Lit;
