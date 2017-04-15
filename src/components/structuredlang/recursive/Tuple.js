import React from 'react';
import PropTypes from 'prop-types';

import { intersperse } from '../../utils/ArrayUtils.js';

import SurroundAndSeparate from './SurroundAndSeparate.js';

const Tuple = ({ elements }) =>
    <SurroundAndSeparate
        left={'('}
        right={')'}
        separator=', '
        elements={elements}
    />;

Tuple.propTypes = {
    elements: PropTypes.array.isRequired,
};

export default Tuple;
