// This is the `Op` constructor from ConLang. Sorry for the very general name.

import React, { PropTypes } from 'react';

import OpSpan from './OpSpan.js';
import OpTree from './OpTree.js';

const Op = ({ op }) => (
    <OpSpan>
        Op <OpTree opTree={op} />
    </OpSpan>
)

Op.propTypes = {
    op: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default Op;
