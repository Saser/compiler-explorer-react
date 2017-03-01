import { connect } from 'react-redux'

import PresLangTree from './presLang/PresLangTree.js'

const mapStateToProps = (state) => ({
    tree: highlightNodes(state.nodes),
})

const mapDispatchToProps = (dispatch) => ({
    onTreeClick: (trace) => dispatch(activateTrace(trace)),
})

const LangTree = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PresLangTree);

export default LangTree;
