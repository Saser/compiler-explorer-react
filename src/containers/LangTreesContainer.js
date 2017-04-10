import { connect } from 'react-redux';

import PresLangTrees from '../components/preslang/PresLangTrees.js';

const mapStateToProps = (state) => ({
    // TODO: the below is hardcoded, and should be changed in the future.
    trees: state.trees.trees,
})

const mapDispatchToProps = (dispatch) => ({})

const LangTreesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PresLangTrees);

export default LangTreesContainer;
