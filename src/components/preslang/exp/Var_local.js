import React from 'react';

import ExpSpan from './ExpSpan.js';

const Var_local = ({ varN }) => {
    return (
        <ExpSpan>
            Var_local {varN}
        </ExpSpan>
    );
}

Var_local.propTypes = {
    varN: PropTypes.string.isRequired,
};

export default Var_local;
