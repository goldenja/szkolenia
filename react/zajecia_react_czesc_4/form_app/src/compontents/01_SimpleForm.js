import React from "react";

class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Podano następujące imię: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Imię:
            <input type="text" value={this.state.value} onChange={this.handleChange} />

                    {/* <input type="text" value={null} /> */}
                </label>
                <input type="submit" value="Wyślij" />
            </form>
        );
    }
}

export default SimpleForm