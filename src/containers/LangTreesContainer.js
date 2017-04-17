import { connect } from 'react-redux';

import { traceActivated, traceDeactivated } from '../actions/creators.js';

import StructuredLangTrees from '../components/structuredlang/StructuredLangTrees.js';

const mapStateToProps = (state) => ({
    trees: state.trees.trees,
})

const mapDispatchToProps = (dispatch) => ({
    createOnClick: (lang) => (trace) => (event) => {
        event.stopPropagation();
        if (trace) {
            dispatch(traceActivated(lang, trace));
        } else {
            dispatch(traceDeactivated());
        }
    },
})

const LangTreesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StructuredLangTrees);

export default LangTreesContainer;
