import React, { PropTypes } from 'react';

const OpSpan = ({ onClick, children }) => (
    <span onClick={onClick}>
        {children}
    </span>
)

OpSpan.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired,
};

export default OpSpan;
