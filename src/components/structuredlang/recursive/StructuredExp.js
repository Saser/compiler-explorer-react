import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item.js';
import List from './List.js';
import Tuple from './Tuple.js';

const StructuredExp = ({ sExp, createOnClick }) => {
    let rendered;
    if (Array.isArray(sExp)) {
        rendered = <List elements={sExp} createOnClick={createOnClick} />;
    } else if (sExp.isTuple) {
        rendered = <Tuple elements={sExp.elements} createOnClick={createOnClick} />;
    } else {
        rendered = <Item {...sExp} createOnClick={createOnClick} />;
    }

    return rendered;
}

// Stricter proptype-checking is done in the helper components, Tuple and Cons.
StructuredExp.propTypes = {
    sExp: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]).isRequired,
    createOnClick: PropTypes.func.isRequired,
};

export default StructuredExp;
