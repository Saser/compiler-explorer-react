import React from 'react';
import PropTypes from 'prop-types';

import Tuple from './Tuple.js';
import Cons from './Cons.js';

const Item = (props) => {
    if (props.isTuple) {
        return Tuple(props);
    }

    return Cons(props);
}

// Stricter proptype-checking is done in the helper components, Tuple and Cons.
Item.propTypes = {
    isTuple: PropTypes.bool,
};

export default Item;
