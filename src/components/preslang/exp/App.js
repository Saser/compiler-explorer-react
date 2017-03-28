import React, { PropTypes } from 'react';

import ExpSpan from './ExpSpan.js';
import { semicolonSeparatedTrees } from '../PresLangTree.js';

const App = ({ op, exps, onClick, onClickFactory }) => {
    const expTrees = semicolonSeparatedTrees('App', exps, onClickFactory);

    return (
        <ExpSpan onClick={onClick}>
            App {op} {expTrees}
        </ExpSpan>
    );
}

App.propTypes = {
    op: PropTypes.string.isRequired,
    exps: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickFactory: PropTypes.func.isRequired,
};

export default App;