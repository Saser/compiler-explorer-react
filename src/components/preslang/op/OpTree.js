import React, { PropTypes } from 'react';

import Opn from './Opn.js';
import Nothing from '../Nothing.js';

const opCons = [
    'Opn',
];

export const isOp = (cons) => opCons.includes(cons);

const OpTree = ({ op }) => {
    let component = undefined;

    switch (op.cons) {
        case 'Opn':
            component = Opn;
            break;
        case 'Opapp':
            component = () => <span>{op.cons}</span>;
            break;
        default:
            component = Nothing;
            break;
    }

    return component(op);
}

OpTree.propTypes = {
    op: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default OpTree;
