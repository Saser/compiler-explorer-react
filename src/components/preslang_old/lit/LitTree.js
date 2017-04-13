import PropTypes from 'prop-types';

import Lit from './Lit.js';

import Nothing from '../Nothing.js';

const litCons = [
    'Lit',
];

export const isLit = (cons) => litCons.includes(cons);

const LitTree = ({ litTree }) => {
    let component = undefined;
    switch (litTree.cons) {
        case 'Lit':
            component = Lit;
            break;
        default:
            component = Nothing;
            break;
    }

    return component(litTree);
}

LitTree.propTypes = {
    lit: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default LitTree;
