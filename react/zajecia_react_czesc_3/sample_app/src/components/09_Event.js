import React from "react";


const Button = ({ changeMessage, label }) => (
    <button type="button" onClick={changeMessage}>
        {label}
    </button>
);

class EventParent extends React.Component {
    state = {
        message: new Date().toLocaleTimeString(),
    };

    // Metoda, którą będziemy przekazywać do Button przy kliknięciu
    updateMessage = evt => {
        console.log(evt); // Dostępny obiekt zdarzenia
        this.setState({
            message: new Date().toLocaleTimeString(),
        });
    };

    render() {
        return (
            <>
                <span>{this.state.message}</span>
                <Button label="Change message" changeMessage={this.updateMessage} />
            </>
        );
    }
}


export default EventParent;
