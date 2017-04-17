import React from 'react';
import PropTypes from 'prop-types';

import SurroundAndSeparate from './SurroundAndSeparate.js';

const List = ({ elements, createOnClick }) =>
    <SurroundAndSeparate
        left={'['}
        right={']'}
        separator='; '
        elements={elements}
        createOnClick={createOnClick}
    />;

List.propTypes = {
    elements: PropTypes.array.isRequired,
    createOnClick: PropTypes.func.isRequired,
};

export default List;
