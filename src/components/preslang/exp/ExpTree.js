import React, { PropTypes } from 'react';

import Prog from './Prog.js';
import Nothing from '../Nothing.js';

const expCons = [
    'Prog',
];

export const isExp = (cons) => expCons.includes(cons);

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
