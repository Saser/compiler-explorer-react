import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ name, args, trace }) => (
    <span>{name}</span>
)

Item.propTypes = {
    name: PropTypes.string.isRequired,
    args: PropTypes.array.isRequired,
    trace: PropTypes.object,
};

export default Item;