import React, { PropTypes } from 'react';

import ExpSpan from './ExpSpan.js';

// TODO: quotes
const Var_local = ({ varN }) => (
    <ExpSpan>
        Var_local "{varN}"
    </ExpSpan>
)

Var_local.propTypes = {
    varN: PropTypes.string.isRequired,
};

export default Var_local;
