import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import { intersperse } from '../../utils/ArrayUtils.js';

import Item from './Item.js';

const shouldSurround = (child) => child.args && child.args.length > 0;

const renderAndMaybeSurround = (arg) => {
    const rendered = Item(arg);

    let arr = [];
    if (shouldSurround(arg)) {
        arr = ['(', rendered, ')'];
    } else {
        arr = [rendered];
    }
    return arr;
}

const Cons = ({ name, args, trace }) => {
    let renderedArgs = [];
    if (args.length > 0) {
        const nestedWithoutSpaces = args.map(renderAndMaybeSurround);
        const nestedWithSpaces = intersperse(' ', nestedWithoutSpaces);
        const withSpaces = _.flatten(nestedWithSpaces);
        renderedArgs = [' '].concat(withSpaces);
    }

    return (
        <span>
            {name}{renderedArgs}
        </span>
    );
}

Cons.propTypes = {
    name: PropTypes.string.isRequired,
    args: PropTypes.array.isRequired,
    trace: PropTypes.object,
};

export default Cons;
