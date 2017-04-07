import React, { PropTypes } from 'react';

import FFI from './FFI.js';
import Opb from './Opb.js';
import Opn from './Opn.js';
import Opw from './Opw.js';
import Shift from './Shift.js';
import WordFromInt from './WordFromInt.js';
import WordToInt from './WordToInt.js';

import OpSpan from './OpSpan.js';
import Nothing from '../Nothing.js';

const opCons = [
    'FFI',
    'Opb',
    'Opn',
    'Opw',
    'Shift',
    'WordFromInt',
    'WordToInt',
];

export const isOp = (cons) => opCons.includes(cons);

const OpTree = ({ opTree }) => {
    let component = undefined;

    switch (opTree.cons) {
        case 'FFI':
            component = FFI;
            break;
        case 'Opb':
            component = Opb;
            break;
        case 'Opn':
            component = Opn;
            break;
        case 'Opw':
            component = Opw;
            break;
        case 'Shift':
            component = Shift;
            break;
        case 'WordFromInt':
            component = WordFromInt;
            break;
        case 'WordToInt':
            component = WordToInt;
            break;
        case 'Opapp':
            component = () => <OpSpan>{opTree.cons}</OpSpan>;
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
