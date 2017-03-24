import React, { PropTypes } from 'react';

const TreeSpan = ({ onClick, children }) => (
    <span onClick={onClick}>
        {children}
    </span>
)

TreeSpan.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired,
};

export default TreeSpan;
