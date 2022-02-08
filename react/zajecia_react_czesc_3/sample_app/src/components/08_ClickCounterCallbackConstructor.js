import React from "react";


class ClickCounterCallbackConstructor extends React.Component {
    static defaultProps = {
        step: 1
    };

    state = { counter: 0 };

    constructor(props) {
        super(props);

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }


    // handleIncrement = evt => {
    //     console.log("Increment button was clicked!", evt); // работает
    //     console.log("this.props: ", this.props); // работает
    //   };

    //   handleDecrement = evt => {
    //     console.log("Decrement button was clicked!", evt); // работает
    //     console.log("this.props: ", this.props); // работает
    //   };

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
                <button type="button" onClick={this.handleIncrement}>
                    Increment by {step}
                </button>
                <button type="button" onClick={this.handleDecrement}>
                    Decrement by {step}
                </button>
            </div>
        );
    }
}


export default ClickCounterCallbackConstructor