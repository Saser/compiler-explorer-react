import React, { PropTypes } from 'react';

import OpSpan from './OpSpan.js';

const Opn = ({ opn }) => (
    <OpSpan>
        Opn {opn.cons}
    </OpSpan>
)

Opn.propTypes = {
    opn: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default Opn;
