import React, { PropTypes } from 'react';

import ExpSpan from './ExpSpan.js';
import PresLangTree from '../PresLangTree.js';

const Dlet = ({ num, exp }) => {
    const expTree = <PresLangTree tree={exp} />;
    return (
        <ExpSpan>
            Dlet {num} ({expTree})
        </ExpSpan>
    )
}

Dlet.propTypes = {
    num: PropTypes.string.isRequired,
    exp: PropTypes.object.isRequired,
};

export default Dlet;
