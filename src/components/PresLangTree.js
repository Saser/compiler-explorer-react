import React from 'react';

const TraceSpan = ({ trace, children }) => {
    const stopPropagationAndHandle = (event) => {
        event.stopPropagation();
        console.log(trace);
    };
    return (
        <span onClick={stopPropagationAndHandle}>{children}</span>
    );
}

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
        default:
            renderFunc = Nothing();
            break;
    }
    return renderFunc();
}

export default PresLangTree;
