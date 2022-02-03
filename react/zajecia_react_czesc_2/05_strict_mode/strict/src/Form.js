import React from 'react';
import * as ReactDOM from 'react-dom'


export class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        let input = ReactDOM.findDOMNode(this.refs["name"]);    
        console.log(input.value)
        this.setState({
            name:input.value
        })
    }


    render() {
        return <form className="commentForm" onSubmit={ e => this.handleSubmit(e) }>
                 <input type="text" placeholder="Your name" ref="name" />
                 <button type="submit" >Submit</button>
                 {this.state.name}
               </form>;
    }
}