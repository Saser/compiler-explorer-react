import React from 'react';
import PropTypes from 'prop-types';

const Tuple = ({ elements }) => (
    <span>Tuple: NYI</span>
)

Tuple.propTypes = {
    elements: PropTypes.array.isRequired,
};

const Cons = ({ name, args, trace }) => (
    <span>Cons: NYI</span>
)

Cons.propTypes = {
    name: PropTypes.string.isRequired,
    args: PropTypes.array.isRequired,
    trace: PropTypes.object,
};

const Item = (props) => {
    if (props.isTuple) {
        return Tuple(props);
    }

    return Cons(props);
}

// Stricter proptype-checking is done in the helper functions above, Tuple and
// Cons.
Item.propTypes = {
    isTuple: PropTypes.bool,
};

export default Item;
