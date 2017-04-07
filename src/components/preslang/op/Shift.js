import React, { PropTypes } from 'react';

import OpSpan from './OpSpan.js';

const Shift = ({ word_size, shift, num }) => (
    <OpSpan>
        Shift {word_size.cons} {shift.cons} {num}
    </OpSpan>
)

Shift.propTypes = {
    word_size: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
    shift: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
    num: PropTypes.number.isRequired,
};

export default Shift;
