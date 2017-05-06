import React from 'react';
import PropTypes from 'prop-types';

import DisplayLangExp from './recursive/DisplayLangExp.js';

const DisplayLangExpWrapper = ({ lang, exp, createOnClick }) => (
    <pre>
        <span>{lang}</span><br />
        <DisplayLangExp exp={exp} createOnClick={createOnClick} />
    </pre>
)

DisplayLangExpWrapper.propTypes = {
    lang: PropTypes.string.isRequired,
    exp: PropTypes.object.isRequired,
    createOnClick: PropTypes.func.isRequired,
};

export default DisplayLangExpWrapper;
