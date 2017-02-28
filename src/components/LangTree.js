import React, { PropTypes } from 'react';

import PresLangTree from './presLang/PresLangTree.js'

import ErrorTree from './ErrorTree.js'

const LangTree = ({ lang, tree, onTraceClick }) => {
    let renderedTree = null;
    switch (lang) {
        case 'mod':
            renderedTree = <PresLangTree tree={tree} onTraceClick={onTraceClick} />;
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

LangTree.propTypes = {
    lang: PropTypes.string.isRequired,
    tree: PropTypes.object.isRequired,
    onTraceClick: PropTypes.func.isRequired,
};

export default LangTree;
