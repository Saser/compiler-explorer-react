import React, { PropTypes } from 'react';

import PresLangTree from './PresLangTree.js'
import TraceSpan from './TraceSpan.js'

const Dlet = ({ trace, pat, expr }) => {
    return (onTraceClick) => {
        const patTree = <PresLangTree tree={pat} onTraceClick={onTraceClick} />;
        const exprTree = <PresLangTree tree={expr} onTraceClick={onTraceClick} />;
        return (
            <TraceSpan onTraceClick={onTraceClick} trace={trace}>Dlet ({patTree}) ({exprTree})</TraceSpan>
        );
    }
}

Dlet.propTypes = {
    trace: PropTypes.array.isRequired,
    pat: PropTypes.object.isRequired,
    expr: PropTypes.object.isRequired,
};

export default Dlet;
