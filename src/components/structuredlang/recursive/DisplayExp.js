import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item.js';
import List from './List.js';
import Tuple from './Tuple.js';

const DisplayExp = ({ exp, createOnClick }) => {
    let rendered;
    if (Array.isArray(exp)) {
        rendered = <List elements={exp} createOnClick={createOnClick} />;
    } else if (exp.isTuple) {
        rendered = <Tuple elements={exp.elements} createOnClick={createOnClick} />;
    } else {
        rendered = <Item {...exp} createOnClick={createOnClick} />;
    }

    return rendered;
}

// Stricter proptype-checking is done in the helper components, Tuple and Cons.
DisplayExp.propTypes = {
    exp: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]).isRequired,
    createOnClick: PropTypes.func.isRequired,
};

export default DisplayExp;
