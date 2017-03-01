import React, { PropTypes } from 'react';

const TraceSpan = ({ onTraceClick, children }) => {
    return (
        <span onClick={(event) => {
            event.stopPropagation();
            onTraceClick();
        }}>
            {children}
        </span>
    );
}

TraceSpan.propTypes = {
    children: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ])).isRequired,
    onTraceClick: PropTypes.func.isRequired,
};

export default TraceSpan;
