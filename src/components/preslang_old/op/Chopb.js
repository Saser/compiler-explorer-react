import React from 'react';
import PropTypes from 'prop-types';

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
