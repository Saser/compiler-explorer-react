import React, { PropTypes } from 'react';

import OpSpan from './OpSpan.js';

const Init_global_var = ({ num }) => (
    <OpSpan>
        Init_global_var {num}
    </OpSpan>
)

Init_global_var.propTypes = {
    num: PropTypes.number.isRequired,
};

export default Init_global_var;
