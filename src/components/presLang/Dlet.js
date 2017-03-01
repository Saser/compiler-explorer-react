import React, { PropTypes } from 'react';

import PresLangTree from './PresLangTree.js'
import TraceSpan from './TraceSpan.js'

const Dlet = ({ pat, expr, isHighlighted }) => {
    return (onTraceClick) => {
        const patTree = <PresLangTree tree={pat} onTraceClick={onTraceClick} />;
        const exprTree = <PresLangTree tree={expr} onTraceClick={onTraceClick} />;
        return (
            <TraceSpan onTraceClick={onTraceClick} isHighlighted={isHighlighted}>Dlet ({patTree}) ({exprTree})</TraceSpan>
        );
    }
}

Dlet.propTypes = {
    pat: PropTypes.object.isRequired,
    expr: PropTypes.object.isRequired,
    isHighlighted: PropTypes.bool.isRequired,
};

export default Dlet;
