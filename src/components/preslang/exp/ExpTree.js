import React, { PropTypes } from 'react';

import Prog from './Prog.js';
import Nothing from '../Nothing.js';

const ExpTree = ({ exp }) => {
    let component = undefined;
    switch (exp.cons) {
        case 'Prog':
            component = Prog;
            break;
        default:
            component = Nothing;
            break;
    }

    return component(exp);
}

ExpTree.propTypes = {
    exp: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default ExpTree;
