import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import { intersperse } from '../../utils/ArrayUtils.js';

import StructuredExp from './StructuredExp.js';

const shouldSurround = (item) => item.args && item.args.length > 0;

// This function is intended to be used as the `callback` argument in a call to
// `Array.prototype.map`, hence the index argument.
const renderAndMaybeSurround = (sExp, index) => {
    const rendered = <StructuredExp sExp={sExp} key={index} />;

    let arr = [];
    if (shouldSurround(sExp)) {
        arr = ['(', rendered, ')'];
    } else {
        arr = [rendered];
    }

    return arr;
}

const Item = ({ name, args, trace }) => {
    const nestedRenderedArgs = args.map(renderAndMaybeSurround);
    const nestedNameAndArgs = [name].concat(nestedRenderedArgs);
    const nestedWithSpaces = intersperse(' ', nestedNameAndArgs);
    const withSpaces = _.flatten(nestedWithSpaces);

    return <span>{withSpaces}</span>;
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    args: PropTypes.array.isRequired,
    trace: PropTypes.object,
};

export default Item;
