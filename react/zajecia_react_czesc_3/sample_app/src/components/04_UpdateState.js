import React from "react";


class UpdateState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            posts: [],
            comments: []
        };


    }

    componentDidMount() {
        for (let i = 0; i < 3; i += 1) {
            console.log(this.state.value);
            this.setState({ value: this.state.value + 1 });
        }


        // this.setState({
        //     posts: ['a']
        // });

        // this.setState({
        //     comments: ['b']
        // });

        // for (let i = 0; i < 3; i += 1) {
        //     console.log(this.state.value);

        //     this.setState((state, props) => ({
        //         value: state.value + 1
        //     }));
        // }


    }





    render() {
        return (
            <div>
                <h1>Witaj, świecie!</h1>
                <h2>Stan: {this.state.value}.</h2>
                {/* <h2>Posty: {this.state.posts}.</h2>
                <h2>Komentarze: {this.state.comments}.</h2> */}
            </div>
        );
    }
}


export default UpdateState