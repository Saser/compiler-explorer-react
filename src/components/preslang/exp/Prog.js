import React from 'react';
import PropTypes from 'prop-types';

import ExpSpan from './ExpSpan.js';
import { semicolonSeparatedTrees } from '../PresLangTree.js';

const Prog = ({ tops }) => {
    const topTrees = semicolonSeparatedTrees('Prog', tops);
    return (
        <ExpSpan>
            Prog {topTrees}
        </ExpSpan>
    );
}

Prog.propTypes = {
    tops: PropTypes.array.isRequired,
};

export default Prog;
