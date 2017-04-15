import React from 'react';
import PropTypes from 'prop-types';

import StructuredExp from './recursive/StructuredExp.js';

const StructuredExpWrapper = ({ lang, sExp }) => (
    <pre>
        <span>{lang}</span><br />
        <StructuredExp sExp={sExp} />
    </pre>
)

StructuredExpWrapper.propTypes = {
    lang: PropTypes.string.isRequired,
    sExp: PropTypes.object.isRequired,
};

export default StructuredExpWrapper;
