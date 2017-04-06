import React, { PropTypes } from 'react';

import OpTree from '../op/OpTree.js';
import ExpSpan from './ExpSpan.js';
import { semicolonSeparatedTrees } from '../PresLangTree.js';

const App = ({ op, exps }) => {
    const opTree = <OpTree op={op} />;
    const expTrees = semicolonSeparatedTrees('App', exps);

    return (
        <ExpSpan>
            App {opTree} {expTrees}
        </ExpSpan>
    );
}

App.propTypes = {
    op: PropTypes.string.isRequired,
    exps: PropTypes.array.isRequired,
};

export default App;
