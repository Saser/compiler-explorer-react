import React from 'react';

import PresLangTree from './PresLangTree.js'

import ErrorTree from './ErrorTree.js'

const LangTree = ({ lang, tree }) => {
    switch (lang) {
        case 'mod':
            return <PresLangTree tree={tree} />;
        default:
            return <ErrorTree lang={lang} />;
    }
}

export default LangTree;
