import { PropTypes } from 'react';

import Dlet from './Dlet.js';
import Prog from './Prog.js';
import Prompt from './Prompt.js';

import Nothing from '../Nothing.js';

const expCons = [
    'Dlet',
    'Prog',
    'Prompt',
];

export const isExp = (cons) => expCons.includes(cons);

const ExpTree = (exp) => {
    let component = undefined;
    switch (exp.cons) {
        case 'Prog':
            component = Prog;
            break;
        case 'Dlet':
            component = Dlet;
            break;
        case 'Prompt':
            component = Prompt;
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
