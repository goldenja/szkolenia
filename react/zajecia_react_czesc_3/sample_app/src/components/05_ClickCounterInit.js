import React from "react";


class ClickCounterInit extends React.Component {
    static defaultProps = {
        step: 1,
    };

    render() {
        const { step } = this.props;

        return (
            <div>
                <span>0</span>
                <button type="button">Increment by {step}</button>
                <button type="button">Decrement by {step}</button>
            </div>
        );
    }
}


export default ClickCounterInit;