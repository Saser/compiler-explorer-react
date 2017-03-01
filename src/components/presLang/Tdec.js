import React, { PropTypes } from 'react';

import PresLangTree from './PresLangTree.js'
import TraceSpan from './TraceSpan.js'

const Tdec = ({ dec, isHighlighted }) => {
    return (onTraceClick) => {
        const decTree = <PresLangTree tree={dec} onTraceClick={onTraceClick} />;
        return (
            <TraceSpan onTraceClick={onTraceClick} isHighlighted={isHighlighted}>Tdec ({decTree})</TraceSpan>
        );
    }
}

Tdec.propTypes = {
    dec: PropTypes.object.isRequired,
    isHighlighted: PropTypes.bool.isRequired,
};

export default Tdec;
