import PropTypes from 'prop-types';

import App from './App.js';
import Dlet from './Dlet.js';
import Mat from './Mat.js';
import Prog from './Prog.js';
import Prompt from './Prompt.js';
import Var_local from './Var_local.js';

import Nothing from '../Nothing.js';

const expCons = [
    'App',
    'Dlet',
    'Mat',
    'Prog',
    'Prompt',
    'Var_local',
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
        case 'Var_local':
            component = Var_local;
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
