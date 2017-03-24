import React from 'react';

import SourceCodeInput from '../containers/SourceCodeInput.js';
import LangTrees from '../containers/LangTrees.js';

const App = () => (
    <div>
        <h1>Compiler Explorer</h1>
        <SourceCodeInput />
        <LangTrees />
    </div>
)

export default App;
