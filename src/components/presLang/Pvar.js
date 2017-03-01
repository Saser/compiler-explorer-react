import React, { PropTypes } from 'react';

import TraceSpan from './TraceSpan.js'

const Pvar = ({ varn, isHighlighted }) => {
    return (onTraceClick) => (
        <TraceSpan onTraceClick={onTraceClick} isHighlighted={isHighlighted}>Pvar {varn}</TraceSpan>
    )
}

Pvar.propTypes = {
    varn: PropTypes.string.isRequired,
    isHighlighted: PropTypes.bool.isRequired,
};

export default Pvar;
