import React from 'react';

const TraceSpan = ({ trace, children }) => (
    <span onClick={() => console.log(trace)}>{children}</span>
)

const Nothing = () => {
    return () => (
        <TraceSpan trace={'what are you doing'}>Nothing here</TraceSpan>
    );
}

const PresLangTree = ({ tree }) => {
    let renderFunc = null;
    switch (tree.con) {
        default:
            renderFunc = Nothing();
            break;
    }
    return renderFunc();
}

export default PresLangTree;
