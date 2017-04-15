import React from 'react';
import PropTypes from 'prop-types';

import { intersperse } from '../../utils/ArrayUtils.js';

import StructuredExp from './StructuredExp.js';

const List = ({ elements }) => {
    const renderedElements = elements.map((element, index) => <StructuredExp sExp={element} key={index} />);
    const withSemicolons = intersperse('; ', renderedElements);
    return <span>[{withSemicolons}]</span>;
}

List.propTypes = {
    elements: PropTypes.array.isRequired,
};

export default List;
