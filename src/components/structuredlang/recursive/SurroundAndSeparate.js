import React from 'react';
import PropTypes from 'prop-types';

import { intersperse } from '../../../utils/ArrayUtils.js';

import DisplayExp from './DisplayExp.js';

const SurroundAndSeparate = ({ left, right, separator, elements, createOnClick }) => {
    const renderedElements = elements.map((element, index) => (
        <DisplayExp
            exp={element}
            key={index}
            createOnClick={createOnClick}
        />
    ));
    const withSeparator = intersperse(separator, renderedElements);
    return <span>{left}{withSeparator}{right}</span>;
}

SurroundAndSeparate.propTypes = {
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
    separator: PropTypes.string.isRequired,
    elements: PropTypes.array.isRequired,
    createOnClick: PropTypes.func.isRequired,
};

export default SurroundAndSeparate;
