import React from 'react';
import PropTypes from 'prop-types';

class SourceCodeInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sourceText: props.initialSourceText,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.submitSourceText(this.state.sourceText);
    }

    handleChange(event) {
        this.setState({sourceText: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <textarea value={this.state.sourceText} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="submit" value="Compile" />
                </div>
            </form>
        );
    }
}

SourceCodeInput.propTypes = {
    initialSourceText: PropTypes.string.isRequired,
    submitSourceText: PropTypes.func.isRequired,
};

export default SourceCodeInput;
