import { connect } from 'react-redux';

import StructuredLangTrees from '../components/structuredlang/StructuredLangTrees.js';

const mapStateToProps = (state) => ({
    trees: state.trees.trees,
})

const mapDispatchToProps = (dispatch) => ({})

const LangTreesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StructuredLangTrees);

export default LangTreesContainer;
