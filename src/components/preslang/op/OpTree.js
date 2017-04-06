import React, { PropTypes } from 'react';

import Opn from './Opn.js';
import Opb from './Opb.js';
import Opw from './Opw.js';
import Shift from './Shift.js';
import WordFromInt from './WordFromInt.js';
import WordToInt from './WordToInt.js';
import FFI from './FFI.js';

const simpleOp = (cons) => () => <span>{cons}</span>;

const OpTree = ({ opTree }) => {
    let component = undefined;

    switch (opTree.cons) {
        case 'Opn':
            component = Opn;
            break;
        case 'Opb':
            component = Opb;
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
        case 'FFI':
            component = FFI;
            break;
        default:
            component = simpleOp(opTree.cons);
            break;
    }
}

OpTree.propTypes = {
    opTree: PropTypes.shape({
        cons: PropTypes.string.isRequired,
    }).isRequired,
};

export default OpTree;
