import React from 'react';
import PropTypes from 'prop-types';

import { intersperse } from '../../utils/ArrayUtils.js';

const Tuple = ({ elements }) => (
    <span>Tuple: not yet implemented</span>
)

Tuple.propTypes = {
    elements: PropTypes.array.isRequired,
};

export default Tuple;
