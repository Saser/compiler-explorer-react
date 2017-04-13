import React from 'react';
import PropTypes from 'prop-types';

const OpSpan = ({ children }) => (
    <span>
        {children}
    </span>
)

OpSpan.propTypes = {
    children: PropTypes.array.isRequired,
};

export default OpSpan;
