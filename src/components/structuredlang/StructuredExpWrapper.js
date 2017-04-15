import React from 'react';
import PropTypes from 'prop-types';

const StructuredExpWrapper = ({ lang, sExp }) => (
    <pre>
        <span>{lang}</span>< br/>
        <span>Not rendering actual trees yet</span>
    </pre>
)

StructuredExpWrapper.propTypes = {
    lang: PropTypes.string.isRequired,
    sExp: PropTypes.object.isRequired,
};

export default StructuredExpWrapper;
