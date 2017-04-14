import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ isTuple }) => (
    <span>Nothing yet</span>
)

// Stricter proptype-checking is done in the helper functions above, Tuple and
// Cons.
Item.propTypes = {
    isTuple: PropTypes.bool,
};

export default Item;
