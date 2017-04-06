import React from 'react';

import ExpSpan from './ExpSpan.js';

const Var_local = () => {
    // TODO: the property cannot be named `var`, since that is a JavaScript
    // reserved keyword.
    return (
        <ExpSpan>
            Var_local <span style={{ color: 'red' }}>FIX THIS</span>
        </ExpSpan>
    );
}

export default Var_local;
