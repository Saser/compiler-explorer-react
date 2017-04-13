import React from 'react';
import PropTypes from 'prop-types';

const ExpSpan = ({ children }) => (
    <span>
        {children}
    </span>
)

ExpSpan.propTypes = {
    children: PropTypes.array.isRequired,
};

export default ExpSpan;
