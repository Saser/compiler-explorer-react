import React, { PropTypes } from 'react';

const TraceSpan = ({ trace, children, onTraceClick }) => {
    const stopPropagationAndHandle = (event) => {
        event.stopPropagation();
        onTraceClick(trace);
    };
    return (
        <span onClick={stopPropagationAndHandle}>{children}</span>
    );
}

TraceSpan.propTypes = {
    trace: PropTypes.array.isRequired,
    children: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ])).isRequired,
    onTraceClick: PropTypes.func.isRequired,
};

export default TraceSpan;
