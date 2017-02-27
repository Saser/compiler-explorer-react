import React, { PropTypes } from 'react';

import TraceSpan from './TraceSpan.js'

const Pvar = ({ trace, varn }) => {
    return () => (
        <TraceSpan trace={trace}>Pvar {varn}</TraceSpan>
    )
}

Pvar.propTypes = {
    trace: PropTypes.array.isRequired,
    varn: PropTypes.string.isRequired,
};

export default Pvar;
