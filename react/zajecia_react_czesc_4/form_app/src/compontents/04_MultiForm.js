import React from "react";

class MultiForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });


    }

    handleSubmit(event) {

        alert(JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Wybiera się:
              <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Liczba gości:
              <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Wyślij" />
            </form>
        );
    }
}


export default MultiForm