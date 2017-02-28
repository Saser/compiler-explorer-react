import React from 'react';

import LangTree from './LangTree.js'

const sampleTree = {
    "con": "Tdec",
    "trace": [1, 1, 1, 16],
    "dec": {
        "con": "Dlet",
        "trace": [1, 1, 1, 15],
        "pat": {
            "con": "Pvar",
            "trace": [1, 5, 1, 5],
            "varn": "\"y\"",
        },
        "expr": {
            "con": "Lit",
            "trace": [1, 9, 1, 5],
            "val": "\"hello\"",
        },
    },
}
const sampleLang = 'mod';

const App = () => (
    <LangTree onTraceClick={console.log} tree={sampleTree} lang={sampleLang} />
)

export default App;
