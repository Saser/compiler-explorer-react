import React from 'react';
import PropTypes from 'prop-types';

import SurroundAndSeparate from './SurroundAndSeparate.js';

const List = ({ elements }) =>
    <SurroundAndSeparate
        left={'['}
        right={']'}
        separator='; '
        elements={elements}
    />;

List.propTypes = {
    elements: PropTypes.array.isRequired,
};

export default List;
