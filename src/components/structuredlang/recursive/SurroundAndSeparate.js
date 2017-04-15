import React from 'react';
import PropTypes from 'prop-types';

import { intersperse } from '../../utils/ArrayUtils.js';

import StructuredExp from './StructuredExp.js';

const SurroundAndSeparate = ({ left, right, separator, elements }) => {
    const renderedElements = elements.map((element, index) => <StructuredExp sExp={element} key={index} />);
    const withSeparator = intersperse(separator, renderedElements);
    return <span>{left}{withSeparator}{right}</span>;
}

export default SurroundAndSeparate;
