import React, { PropTypes } from 'react';

import OpSpan from './OpSpan.js';

const Opn = ({ opn, onClick }) => (
    <OpSpan onClick={onClick}>
        Opn {opn.cons}
    </OpSpan>
)

Opn.propTypes = {
    opn: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Opn;
