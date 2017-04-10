import React from 'react';

import SourceCodeInput from '../containers/SourceCodeInput.js';
import LangTreesContainer from '../containers/LangTreesContainer.js';

const App = () => (
    <div>
        <h1>Compiler Explorer</h1>
        <SourceCodeInput />
        <LangTreesContainer />
    </div>
)

export default App;
