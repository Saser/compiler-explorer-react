import React, { PropTypes } from 'react';

const ExpSpan = ({ onClick, children }) => (
    <span onClick={onClick}>
        {children}
    </span>
)

ExpSpan.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired,
};

export default ExpSpan;
