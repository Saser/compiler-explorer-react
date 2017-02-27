import React from 'react';

import ErrorTree from './ErrorTree.js'

const LangTree = ({ lang, tree }) => {
    switch (lang) {
        default:
            return <ErrorTree lang={lang} />;
    }
}

export default LangTree;
