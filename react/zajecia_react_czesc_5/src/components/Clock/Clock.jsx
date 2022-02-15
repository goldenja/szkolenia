import { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {
  intervalId = null;

  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.intervalId = setInterval(
      () => {this.setState({ time: new Date().toLocaleTimeString() }); console.log('test')},
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className="Clock">{this.state.time}</div>;
  }
}
