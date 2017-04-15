import { connect } from 'react-redux';

import { traceActivated } from '../actions/creators.js';

import StructuredLangTrees from '../components/structuredlang/StructuredLangTrees.js';

const mapStateToProps = (state) => ({
    trees: state.trees.trees,
})

const mapDispatchToProps = (dispatch) => ({
    createOnClick: (lang) => (trace) => (event) => {
        event.stopPropagation();
        dispatch(traceActivated(lang, trace));
    },
})

const LangTreesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StructuredLangTrees);

export default LangTreesContainer;
