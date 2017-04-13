import React from 'react';
import PropTypes from 'prop-types';

import OpTree from '../op/OpTree.js';
import ExpSpan from './ExpSpan.js';
import { semicolonSeparatedTrees } from '../PresLangTree.js';

const App = ({ op, exps }) => {
    const opTree = <OpTree opTree={op} />;
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
