import React from "react";


class ClockInit extends React.Component {
    render() {
        return (
            <div>
                <h1>Witaj, świecie!</h1>
                <h2>Aktualny czas: {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default ClockInit