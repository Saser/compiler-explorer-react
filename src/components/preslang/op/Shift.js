import React, { PropTypes } from 'react';

import OpSpan from './OpSpan.js';

const Shift = ({ word_size, shift, num, onClick }) => (
    <OpSpan onClick={onClick}>
        Shift {shift.cons}
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
    onClick: PropTypes.func.isRequired,
};

export default Opn;
