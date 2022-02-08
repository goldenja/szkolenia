import React from "react";


class ClickCounterCallbackThis extends React.Component {
    static defaultProps = {
        step: 1
    };

    state = { counter: 0 };


    handleIncrement(evt) {

        console.log("Increment button was clicked!", evt); // działa
        console.log("this.props: ", this.props); // Error: cannot read props of undefined

        this.setState({
            counter: this.state.counter + 1
        });
    }

    handleDecrement(evt) {
        console.log("Decrement button was clicked!", evt); // działa
        console.log("this.props: ", this.props); // Error: cannot read props of undefined
        this.setState({
            counter: this.state.counter - 1
        });

    }

    render() {
        const { step } = this.props;

        return (
            <div>
                <span>{this.state.counter}</span>
                <button type="button" onClick={this.handleIncrement.bind(this)}>
                    Increment by {step}
                </button>
                <button type="button" onClick={this.handleDecrement.bind(this)}>
                    Decrement by {step}
                </button>
            </div>
        );
    }
}


export default ClickCounterCallbackThis