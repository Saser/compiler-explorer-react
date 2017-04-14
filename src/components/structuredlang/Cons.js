import React from 'react';
import PropTypes from 'prop-types';

const Cons = ({ name, args, trace }) => (
    <span>Cons: not yet implemented</span>
)

Cons.propTypes = {
    name: PropTypes.string.isRequired,
    args: PropTypes.array.isRequired,
    trace: PropTypes.object,
};

export default Cons;
