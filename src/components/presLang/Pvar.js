import React, { PropTypes } from 'react';

import TraceSpan from './TraceSpan.js'

const Pvar = ({ varn }) => {
    return (onTraceClick) => (
        <TraceSpan onTraceClick={onTraceClick}>Pvar {varn}</TraceSpan>
    )
}

Pvar.propTypes = {
    varn: PropTypes.string.isRequired,
};

export default Pvar;
