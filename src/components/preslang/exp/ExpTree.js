import { PropTypes } from 'react';

import App from './App.js';
import Dlet from './Dlet.js';
import Mat from './Mat.js';
import Prog from './Prog.js';
import Prompt from './Prompt.js';

import Nothing from '../Nothing.js';

const expCons = [
    'App',
    'Dlet',
    'Mat',
    'Prog',
    'Prompt',
];

export const isExp = (cons) => expCons.includes(cons);

const ExpTree = ({ expTree }) => {
    let component = undefined;
    switch (expTree.cons) {
        case 'App':
            component = App;
            break;
        case 'Dlet':
            component = Dlet;
            break;
        case 'Mat':
            component = Mat;
            break;
        case 'Prog':
            component = Prog;
            break;
        case 'Prompt':
            component = Prompt;
            break;
        default:
            component = Nothing;
            break;
    }

    return component(expTree);
}

ExpTree.propTypes = {
    expTree: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default ExpTree;
