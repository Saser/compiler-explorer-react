import React from 'react';

import TraceSpan from './TraceSpan.js'

import Tdec from './Tdec.js'
import Dlet from './Dlet.js'

const Pvar = ({ trace, varn }) => {
    return () => (
        <TraceSpan trace={trace}>Pvar {varn}</TraceSpan>
    )
}

const Lit = ({ trace, val }) => {
    return () => (
        <TraceSpan trace={trace}>Lit {val}</TraceSpan>
    );
}

const Nothing = () => {
    return () => (
        <TraceSpan trace={'what are you doing'}>Nothing here</TraceSpan>
    );
}

const PresLangTree = ({ tree }) => {
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
    return renderFunc();
}

export default PresLangTree;
