import { connect } from 'react-redux';

import PresLangTreeWrapper from '../components/preslang/PresLangTreeWrapper.js';

const mapStateToProps = (state) => ({
    // TODO: the below is hardcoded, and should be changed in the future.
    tree: state.trees.trees && state.trees.trees[0],
})

const mapDispatchToProps = (dispatch) => ({
    onClickFactory: (trace) => {
        // TODO: replace this with actual dispatch stuff.
        return () => console.log(trace);
    },
})

const LangTrees = connect(
    mapStateToProps,
    mapDispatchToProps
)(PresLangTreeWrapper);

export default LangTrees;
