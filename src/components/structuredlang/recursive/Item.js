import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import { intersperse } from '../../../utils/ArrayUtils.js';

import StructuredExp from './StructuredExp.js';

const shouldSurround = (item) => item.args && item.args.length > 0;

// This function is intended to be used as the `callback` argument in a call to
// `Array.prototype.map`, hence the index argument.
const renderAndMaybeSurround = (props) => {
    const rendered = <StructuredExp {...props} />;

    let arr = [];
    if (shouldSurround(props.sExp)) {
        arr = ['(', rendered, ')'];
    } else {
        arr = [rendered];
    }

    return arr;
}

const Item = ({ name, args, trace, createOnClick }) => {
    const decorated = args.map((arg, index) => ({
        sExp: arg,
        key: index,
        createOnClick,
    }));
    const nestedRenderedArgs = decorated.map(renderAndMaybeSurround);
    const nestedNameAndArgs = [name].concat(nestedRenderedArgs);
    const nestedWithSpaces = intersperse(' ', nestedNameAndArgs);
    const withSpaces = _.flatten(nestedWithSpaces);

    const onClick = createOnClick(trace);

    return <span onClick={onClick}>{withSpaces}</span>;
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    args: PropTypes.array.isRequired,
    trace: PropTypes.object,
    createOnClick: PropTypes.func.isRequired,
};

export default Item;
