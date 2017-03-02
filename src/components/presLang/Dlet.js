import React, { PropTypes } from 'react';

import NodeSpan from './NodeSpan.js';
import PresLangTree from './PresLangTree.js';

const Dlet = ({ pat, expr, isHighlighted, onClick, dispatchFunction }) => {
    const patTree = <PresLangTree tree={pat} onTreeClick={dispatchFunction} />;
    const exprTree = <PresLangTree tree={expr} onTreeClick={dispatchFunction} />;
    return (
        <NodeSpan isHighlighted={isHighlighted} onClick={onClick}>
            Dlet ({patTree}) ({exprTree})
        </NodeSpan>
    );
}

Dlet.propTypes = {
    pat: PropTypes.object.isRequired,
    expr: PropTypes.object.isRequired,
    isHighlighted: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    dispatchFunction: PropTypes.func.isRequired,
};

export default Dlet;
