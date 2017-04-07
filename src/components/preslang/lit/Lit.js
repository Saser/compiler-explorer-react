import React, { PropTypes } from 'react';

import LitSpan from './LitSpan.js';

const Lit = ({ lit }) => (
    <LitSpan>
        Lit ({lit.cons} {lit.value})
    </LitSpan>
)

Lit.propTypes = {
    lit: PropTypes.shape({
        cons: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
    }).isRequired,
}

export default Lit;
