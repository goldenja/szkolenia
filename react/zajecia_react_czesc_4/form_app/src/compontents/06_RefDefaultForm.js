import React from "react";

class RefDafaultForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Imię:
              <input
                        defaultValue="Bob"
                        type="text"
                        ref={this.input} />
                </label>
                <input type="submit" value="Wyślij" />
            </form>
        );
    }
}

export default RefDafaultForm