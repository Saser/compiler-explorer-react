import React, { PropTypes } from 'react';

import ExpSpan from './ExpSpan.js';
import PresLangTree from '../PresLangTree.js';

const Dlet = ({ num, exp, onClick, onClickFactory }) => {
    const expTree = <PresLangTree tree={exp} onClickFactory={onClickFactory} />;
    return (
        <ExpSpan onClick={onClick}>
            Dlet {num} ({expTree})
        </ExpSpan>
    )
}

Dlet.propTypes = {
    num: PropTypes.string.isRequired,
    exp: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default Dlet;
