import React from "react";

class RefFileForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Wybrany plik - ${this.fileInput.current.files[0].name}`
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Prześlij plik:
            <input type="file" ref={this.fileInput} />
                </label>
                <br />
                <button type="submit">Wyślij</button>
            </form>
        );
    }
}

export default RefFileForm