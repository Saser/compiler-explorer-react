import React, { PropTypes } from 'react';

const OpSpan = ({ children }) => (
    <span>
        {children}
    </span>
)

OpSpan.propTypes = {
    children: PropTypes.array.isRequired,
};

export default OpSpan;
