import React, { PropTypes } from 'react';

const TraceSpan = ({ onTraceClick, isHighlighted, children }) => {
    return (
        <span
            onClick={(event) => {
                event.stopPropagation();
                onTraceClick();
            }}
            style={{
                background: isHighlighted ? '#09cdda' : 'none',
            }}

        >
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
