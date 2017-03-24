import { PropTypes } from 'react';

import Prog from './Prog.js';
import Nothing from './Nothing.js';

const PresLangTree = ({ tree, onClickFactory }) => {
    let component = undefined;
    switch (tree.cons) {
        case 'Prog':
            component = Prog;
            break;
        default:
            component = Nothing;
    }

    const onClick = onClickFactory(tree.trace);
    const props = {
        ...tree,
        onClick,
        onClickFactory,
    };

    return component(props);
}

PresLangTree.propTypes = {
    tree: PropTypes.shape({
        cons: PropTypes.string.isRequired,
        trace: PropTypes.object,
    }),
    onClickFactory: PropTypes.func.isRequired,
};

export default PresLangTree;
