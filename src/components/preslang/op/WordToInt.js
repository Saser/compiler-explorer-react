import React, { PropTypes } from 'react';

import OpSpan from './OpSpan.js';

const WordToInt = ({ word_size }) => (
    <OpSpan>
        WordToInt {word_size.cons}
    </OpSpan>
)

WordToInt.propTypes = {
    word_size: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default WordToInt;
