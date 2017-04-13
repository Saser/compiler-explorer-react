import React from 'react';
import PropTypes from 'prop-types';

import OpSpan from './OpSpan.js';

const FFI = ({ str }) => (
    <OpSpan>
        FFI {str}
    </OpSpan>
)

FFI.propTypes = {
    str: PropTypes.string.isRequired,
};

export default FFI;
