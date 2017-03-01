import React, { PropTypes } from 'react';

import PresLangTree from './PresLangTree.js'
import TraceSpan from './TraceSpan.js'

const Tdec = ({ dec }) => {
    return (onTraceClick) => {
        const decTree = <PresLangTree tree={dec} onTraceClick={onTraceClick} />;
        return (
            <TraceSpan onTraceClick={onTraceClick}>Tdec ({decTree})</TraceSpan>
        );
    }
}

Tdec.propTypes = {
    dec: PropTypes.object.isRequired,
};

export default Tdec;
