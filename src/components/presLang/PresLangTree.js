import React, { PropTypes } from 'react';

import TraceSpan from './TraceSpan.js'

import Tdec from './Tdec.js'
import Dlet from './Dlet.js'
import Pvar from './Pvar.js'
import Lit from './Lit.js'

const Nothing = () => {
    return (onTraceClick) => (
        <TraceSpan onTraceClick={onTraceClick} trace={'what are you doing'}>Nothing here</TraceSpan>
    );
}

const PresLangTree = ({ tree, onTraceClick }) => {
    let renderFunc = null;
    switch (tree.con) {
        case 'Tdec':
            renderFunc = Tdec(tree);
            break;
        case 'Dlet':
            renderFunc = Dlet(tree);
            break;
        case 'Pvar':
            renderFunc = Pvar(tree);
            break;
        case 'Lit':
            renderFunc = Lit(tree);
            break;
        default:
            renderFunc = Nothing();
            break;
    }
    return renderFunc(onTraceClick);
}

PresLangTree.propTypes = {
    tree: PropTypes.object.isRequired,
    onTraceClick: PropTypes.func.isRequired,
};

export default PresLangTree;
