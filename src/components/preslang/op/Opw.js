import React, { PropTypes } from 'react';

import OpSpan from './OpSpan.js';

const Opw = ({ word_size, opw, onClick }) => (
    <OpSpan onClick={onClick}>
        Opw {opw.cons}
    </OpSpan>
)

Opw.propTypes = {
    word_size: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
    opw: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Opw;
