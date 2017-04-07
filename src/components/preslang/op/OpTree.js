import React, { PropTypes } from 'react';

import Chopb from './Chopb.js';
import FFI from './FFI.js';
import Init_global_var from './Init_global_var.js';
import Op from './Op.js';
import Opb from './Opb.js';
import Opn from './Opn.js';
import Opw from './Opw.js';
import Shift from './Shift.js';
import WordFromInt from './WordFromInt.js';
import WordToInt from './WordToInt.js';

import OpSpan from './OpSpan.js';
import Nothing from '../Nothing.js';

const opCons = [
    'Chopb',
    'FFI',
    'Init_global_var',
    'Op',
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
        case 'Chopb':
            component = Chopb;
            break;
        case 'FFI':
            component = FFI;
            break;
        case 'Init_global_var':
            component = Init_global_var;
            break;
        case 'Op':
            component = Op;
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
