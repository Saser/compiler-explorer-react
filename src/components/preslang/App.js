import React, { PropTypes } from 'react';

import TreeSpan from './TreeSpan.js';
import { semicolonSeparatedTrees } from './PresLangTree.js';

const App = ({ op, exps, onClick, onClickFactory }) => {
    const expTrees = semicolonSeparatedTrees('App', exps, onClickFactory);

    return (
        <TreeSpan onClick={onClick}>
            App {op} {expTrees}
        </TreeSpan>
    );
}

App.propTypes = {
    op: PropTypes.string.isRequired,
    exps: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default App;
