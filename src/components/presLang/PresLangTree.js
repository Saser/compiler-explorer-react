import React from 'react';

import TraceSpan from './TraceSpan.js'

const Tdec = ({ trace, dec }) => {
    return () => {
        const decTree = <PresLangTree tree={dec} />;
        return (
            <TraceSpan trace={trace}>Tdec ({decTree})</TraceSpan>
        );
    }
}

const Dlet = ({ trace, pat, expr }) => {
    return () => {
        const patTree = <PresLangTree tree={pat} />;
        const exprTree = <PresLangTree tree={expr} />;
        return (
            <TraceSpan trace={trace}>Dlet ({patTree}) ({exprTree})</TraceSpan>
        );
    }
}

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
