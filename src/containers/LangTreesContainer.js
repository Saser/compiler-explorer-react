import { connect } from 'react-redux';

import PresLangTrees from '../components/preslang_old/PresLangTrees.js';

const mapStateToProps = (state) => ({
    trees: state.trees.trees,
})

const mapDispatchToProps = (dispatch) => ({})

const LangTreesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PresLangTrees);

export default LangTreesContainer;
