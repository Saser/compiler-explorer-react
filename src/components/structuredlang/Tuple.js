import React from 'react';
import PropTypes from 'prop-types';

import { intersperse } from '../../utils/ArrayUtils.js';

import StructuredExp from './StructuredExp.js';

const Tuple = ({ elements }) => {
    const renderedElements = elements.map((element, index) => <StructuredExp sExp={element} key={index} />);
    const withCommas = intersperse(', ', renderedElements);
    return <span>({withCommas})</span>;
}

Tuple.propTypes = {
    elements: PropTypes.array.isRequired,
};

export default Tuple;
