import { connect } from 'react-redux';

import {
    compileSourceText,
    sourceCodeTextUpdated,
}
from '../actions/creators.js';

import SourceCodeInputForm from '../components/SourceCodeInputForm.js';

const mapStateToProps = (state) => ({
    initialSourceText: state.sourceCode.sourceText,
})

const mapDispatchToProps = (dispatch) => ({
    submitSourceText: (sourceText) => {
        dispatch(sourceCodeTextUpdated(sourceText));
        dispatch(compileSourceText(sourceText));
    },
})

const SourceCodeInput = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SourceCodeInputForm);

export default SourceCodeInput;
