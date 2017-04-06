import React, { PropTypes } from 'react';

import OpSpan from './OpSpan.js';

const Opb = ({ opb, onClick }) => (
    <OpSpan onClick={onClick}>
        Opb {opb.cons}
    </OpSpan>
)

Opb.propTypes = {
    opb: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Opb;
