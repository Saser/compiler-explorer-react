import React, { PropTypes } from 'react';

import TreeSpan from './TreeSpan.js';
import PresLangTree from './PresLangTree.js';

const Dlet = ({ num, exp, onClick, onClickFactory }) => {
    const expTree = <PresLangTree tree={exp} onClickFactory={onClickFactory} />;
    return (
        <TreeSpan onClick={onClick}>
            Dlet {num} ({expTree})
        </TreeSpan>
    )
}

Dlet.propTypes = {
    num: PropTypes.string.isRequired,
    exp: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default Dlet;
