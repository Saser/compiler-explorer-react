import React, { PropTypes } from 'react';

import TraceSpan from './TraceSpan.js';

const Lit = ({ val }) => {
    return (onTraceClick) => (
        <TraceSpan onTraceClick={onTraceClick}>Lit {val}</TraceSpan>
    );
}

Lit.propTypes = {
    val: PropTypes.string.isRequired,
};

export default Lit;
