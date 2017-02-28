import React from 'react';

import PresLangTree from './presLang/PresLangTree.js'

import ErrorTree from './ErrorTree.js'

const LangTree = ({ lang, tree }) => {
    let renderedTree = null;
    switch (lang) {
        case 'mod':
            renderedTree = <PresLangTree tree={tree} />;
            break;
        default:
            renderedTree = <ErrorTree lang={lang} />;
            break;
    }

    return (
        <pre>
            {renderedTree}
        </pre>
    );
}

export default LangTree;
