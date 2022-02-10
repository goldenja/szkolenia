import React from "react";

class TextAreaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Proszę napisać wypracowanie o swoim ulubionym elemencie DOM'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Wysłano następujące wypracowanie: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Wypracowanie:
            <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Wyślij" />
            </form>
        );
    }
}

export default TextAreaForm