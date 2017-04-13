// This is the `Op` constructor from ConLang. Sorry for the very general name.

import React from 'react';
import PropTypes from 'prop-types';

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
