import React, { PropTypes } from 'react';

import ExpSpan from './ExpSpan.js';
import { semicolonSeparatedTrees } from '../PresLangTree.js';

const App = ({ op, exps }) => {
    const expTrees = semicolonSeparatedTrees('App', exps);

    return (
        <ExpSpan>
            App {op} {expTrees}
        </ExpSpan>
    );
}

App.propTypes = {
    op: PropTypes.string.isRequired,
    exps: PropTypes.array.isRequired,
};

export default App;
