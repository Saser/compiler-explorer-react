import React, { PropTypes } from 'react';

const NodeSpan = ({ isHighlighted, onClick, children }) => {
    const onClickWithoutPropagation = (event) => {
        event.stopPropagation();
        onClick();
    }
    return (
        <span
            onClick={onClickWithoutPropagation}
            style={{
                cursor: 'pointer',
                background: isHighlighted ? '#09cdda' : 'none',
            }}
        >
            {children}
        </span>
    );
}

NodeSpan.propTypes = {
    isHighlighted: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired,
};

export default NodeSpan;
