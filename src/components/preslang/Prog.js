import React, { PropTypes } from 'react';

import TreeSpan from './TreeSpan.js';

const Prog = ({ tops, onClick, onClickFactory }) => (
    <TreeSpan onClick={onClick}>
        Prog: {tops.length} tops within
    </TreeSpan>
)

Prog.propTypes = {
    tops: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default Prog;
