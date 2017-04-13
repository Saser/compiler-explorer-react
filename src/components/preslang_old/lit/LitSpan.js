import React from 'react';
import PropTypes from 'prop-types';

const LitSpan = ({ children }) => (
    <span>
        {children}
    </span>
)

LitSpan.propTypes = {
    children: PropTypes.array.isRequired,
};

export default LitSpan;
