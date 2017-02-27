import React, { PropTypes } from 'react';

import PresLangTree from './PresLangTree.js'
import TraceSpan from './TraceSpan.js'

const Dlet = ({ trace, pat, expr }) => {
    return () => {
        const patTree = <PresLangTree tree={pat} />;
        const exprTree = <PresLangTree tree={expr} />;
        return (
            <TraceSpan trace={trace}>Dlet ({patTree}) ({exprTree})</TraceSpan>
        );
    }
}

Dlet.propTypes = {
    trace: PropTypes.array.isRequired,
    pat: PropTypes.object.isRequired,
    expr: PropTypes.object.isRequired,
};

export default Dlet;
