import React, { PropTypes } from 'react';

const TraceSpan = ({ trace, children }) => {
    const stopPropagationAndHandle = (event) => {
        event.stopPropagation();
        console.log(trace);
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
};

export default TraceSpan;
