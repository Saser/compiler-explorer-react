import React from 'react';
import PropTypes from 'prop-types';

import DisplayExp from './recursive/DisplayExp.js';

const DisplayExpWrapper = ({ lang, exp, createOnClick }) => (
    <pre>
        <span>{lang}</span><br />
        <DisplayExp exp={exp} createOnClick={createOnClick} />
    </pre>
)

DisplayExpWrapper.propTypes = {
    lang: PropTypes.string.isRequired,
    exp: PropTypes.object.isRequired,
    createOnClick: PropTypes.func.isRequired,
};

export default DisplayExpWrapper;
