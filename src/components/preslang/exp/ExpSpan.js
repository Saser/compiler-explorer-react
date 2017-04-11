import React, { PropTypes } from 'react';

const ExpSpan = ({ children }) => (
    <span>
        {children}
    </span>
)

ExpSpan.propTypes = {
    children: PropTypes.array.isRequired,
};

export default ExpSpan;
