import React, { PropTypes } from 'react';

import OpSpan from './OpSpan.js';

const Chopb = ({ opb }) => (
    <OpSpan>
        Chopb {opb.cons}
    </OpSpan>
)

Chopb.propTypes = {
    opb: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default Chopb;
