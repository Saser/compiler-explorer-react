import React, { PropTypes } from 'react';

const OpSpan = ({ children }) => (
    <span style={{ color: 'green' }}>
        {children}
    </span>
)

OpSpan.propTypes = {
    children: PropTypes.array.isRequired,
};

export default OpSpan;
