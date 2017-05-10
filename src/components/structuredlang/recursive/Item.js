import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import { intersperse } from '../../../utils/ArrayUtils.js';

import DisplayLangExp from './DisplayLangExp.js';

const shouldSurround = (item) => item.args && item.args.length > 0;

const uglyNewlineHack = (name) => name.replace('\n', '\\n');

// This function is intended to be used as the `callback` argument in a call to
// `Array.prototype.map`, hence the index argument.
const renderAndMaybeSurround = (props) => {
    const rendered = <DisplayLangExp {...props} />;

    let arr = [];
    if (shouldSurround(props.exp)) {
        arr = ['(', rendered, ')'];
    } else {
        arr = [rendered];
    }

    return arr;
}

const Item = ({ name, highlight, args, trace, createOnClick }) => {
    const uglyHackForName = uglyNewlineHack(name);

    const decorated = args.map((arg, index) => ({
        exp: arg,
        key: index,
        createOnClick,
    }));
    const nestedRenderedArgs = decorated.map(renderAndMaybeSurround);
    const nestedNameAndArgs = [uglyHackForName].concat(nestedRenderedArgs);
    const nestedWithSpaces = intersperse(' ', nestedNameAndArgs);
    const withSpaces = _.flatten(nestedWithSpaces);

    let background;
    switch (highlight) {
        case 'descendant':
            background = 'lightgreen';
            break;
        case 'equal':
            background = 'lightblue';
            break;
        case 'ancestor':
            background = 'salmon';
            break;
        default:
            background = 'none';
            break;
    }

    const color = trace ? 'black' : 'lightgrey';

    const style = {
        color,
        background,
    };
    const onClick = createOnClick(trace);

    return (
        <span
            style={style}
            onClick={onClick}
        >
        {withSpaces}
        </span>
    );
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    args: PropTypes.array.isRequired,
    trace: PropTypes.object,
    createOnClick: PropTypes.func.isRequired,
};

export default Item;
