import React, { PropTypes } from 'react';

import Opn from './Opn.js';
import Nothing from '../Nothing.js';

const opCons = [
    'Opn',
];

export const isOp = (cons) => opCons.includes(cons);

const OpTree = ({ opTree }) => {
    let component = undefined;

    switch (opTree.cons) {
        case 'Opn':
            component = Opn;
            break;
        case 'Opapp':
            component = () => <span>{opTree.cons}</span>;
            break;
        default:
            component = Nothing;
            break;
    }

    return component(opTree);
}

OpTree.propTypes = {
    opTree: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default OpTree;
