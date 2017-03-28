import React, { PropTypes } from 'react';

import ExpSpan from './ExpSpan.js';

const Var_local = ({ onClick, onClickFactory }) => {
    // TODO: the property cannot be named `var`, since that is a JavaScript
    // reserved keyword.
    return (
        <ExpSpan onClick={onClick}>
            Var_local <span style={{ color: 'red' }}>FIX THIS</span>
        </ExpSpan>
    );
}

Var_local.propTypes = {
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default Var_local;
