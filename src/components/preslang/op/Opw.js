import React, { PropTypes } from 'react';

import OpSpan from './OpSpan.js';

const Opw = ({ word_size, opw }) => (
    <OpSpan>
        Opw {word_size.cons} {opw.cons}
    </OpSpan>
)

Opw.propTypes = {
    word_size: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
    opw: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default Opw;
