import React from 'react';
import PropTypes from 'prop-types';

import OpSpan from './OpSpan.js';

const WordFromInt = ({ word_size }) => (
    <OpSpan>
        WordFromInt {word_size.cons}
    </OpSpan>
)

WordFromInt.propTypes = {
    word_size: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default WordFromInt;
