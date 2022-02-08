import React from "react";


class ClockTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {

        clearInterval(this.timerID);
    }

    tick() {

        //his.state.date = new Date();

        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Witaj, świecie!</h1>
                <h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


export default ClockTimer