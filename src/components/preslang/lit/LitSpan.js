import React, { PropTypes } from 'react';

const LitSpan = ({ children }) => (
    <span>
        {children}
    </span>
)

LitSpan.propTypes = {
    children: PropTypes.array.isRequired,
};

export default LitSpan;
