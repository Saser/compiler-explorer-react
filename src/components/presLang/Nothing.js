import React from 'react';

import TraceSpan from './TraceSpan.js'

const Nothing = () => {
    return (onTraceClick) => (
        <TraceSpan onTraceClick={onTraceClick}>Nothing here</TraceSpan>
    );
}

export default Nothing;
