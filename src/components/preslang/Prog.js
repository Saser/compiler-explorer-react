import React, { PropTypes } from 'react';

const Prog = ({ tops, onClick, onClickFactory }) => {
    const topsCount = tops.length;
    return <span>Prog: {topsCount} tops contained within</span>;
}

Prog.propTypes = {
    tops: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default Prog;
