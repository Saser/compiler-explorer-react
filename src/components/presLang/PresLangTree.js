import { PropTypes } from 'react';

import Tdec from './Tdec.js'
import Dlet from './Dlet.js'
import Pvar from './Pvar.js'
import Lit from './Lit.js'
import Nothing from './Nothing.js'

const PresLangTree = ({ tree, onTraceClick }) => {
    let renderFunc = null;
    switch (tree.con) {
        case 'Tdec':
            renderFunc = Tdec(tree);
            break;
        case 'Dlet':
            renderFunc = Dlet(tree);
            break;
        case 'Pvar':
            renderFunc = Pvar(tree);
            break;
        case 'Lit':
            renderFunc = Lit(tree);
            break;
        default:
            renderFunc = Nothing();
            break;
    }
    return renderFunc(() => onTraceClick(tree.trace));
}

PresLangTree.propTypes = {
    tree: PropTypes.object.isRequired,
    onTraceClick: PropTypes.func.isRequired,
};

export default PresLangTree;
