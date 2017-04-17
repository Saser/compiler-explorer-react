import React from 'react';
import PropTypes from 'prop-types';

import StructuredExp from './recursive/StructuredExp.js';

const StructuredExpWrapper = ({ lang, sExp, createOnClick }) => (
    <pre>
        <span>{lang}</span><br />
        <StructuredExp sExp={sExp} createOnClick={createOnClick} />
    </pre>
)

StructuredExpWrapper.propTypes = {
    lang: PropTypes.string.isRequired,
    sExp: PropTypes.object.isRequired,
    createOnClick: PropTypes.func.isRequired,
};

export default StructuredExpWrapper;
