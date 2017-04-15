import React from 'react';
import PropTypes from 'prop-types';

import SurroundAndSeparate from './SurroundAndSeparate.js';

const Tuple = ({ elements, createOnClick }) =>
    <SurroundAndSeparate
        left={'('}
        right={')'}
        separator=', '
        elements={elements}
    />;

Tuple.propTypes = {
    elements: PropTypes.array.isRequired,
    createOnClick: PropTypes.func.isRequired,
};

export default Tuple;
