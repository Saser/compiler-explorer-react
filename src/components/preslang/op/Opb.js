import React, { PropTypes } from 'react';

import OpSpan from './OpSpan.js';

const Opb = ({ opb }) => (
    <OpSpan>
        Opb {opb.cons}
    </OpSpan>
)

Opb.propTypes = {
    opb: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default Opb;
