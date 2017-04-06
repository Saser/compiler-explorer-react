import React, { PropTypes } from 'react';

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
