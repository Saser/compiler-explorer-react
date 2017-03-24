import { connect } from 'react-redux';

import PresLangTreeWrapper from '../components/preslang/PresLangTreeWrapper.js';

const mapStateToProps = (state) => ({
    tree: state.trees.trees && state.trees.trees[0],
})

const mapDispatchToProps = (dispatch) => ({
    onClickFactory: (trace) => {
        return () => console.log(trace);
    },
})

const LangTrees = connect(
    mapStateToProps,
    mapDispatchToProps
)(PresLangTreeWrapper);

export default LangTrees;
