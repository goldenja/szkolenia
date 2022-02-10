import React from "react";

class RefForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        alert('Podano następujące imię: ' + this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Imię:
            <input type="text" ref={this.input} />
                </label>
                <input type="submit" value="Wyślij" />
            </form>
        );
    }
}

export default RefForm