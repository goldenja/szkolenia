import React from "react";


class ClickCounterCallback extends React.Component {
    static defaultProps = {
        step: 1,
    };

    handleIncrement(evt) {
        console.log("Increment button was clicked!", evt); // działa
        console.log("this.props: ", this.props); // Error: cannot read props of undefined
    }

    handleDecrement(evt) {
        console.log("Decrement button was clicked!", evt); // działa
        console.log("this.props: ", this.props); // Error: cannot read props of undefined
    }

    render() {
        const { step } = this.props;

        return (
            <div>
                <span>0</span>
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


export default ClickCounterCallback