
import React, { Component } from "react";

const withApiState = TargetComponent =>
  class extends React.Component {
    state = {
      current: "idle"
    };

    apiState = {
      pending: () => this.setState({ current: "pending" }),
      success: () => this.setState({ current: "success" }),
      error: () => this.setState({ current: "error" }),
      idle: () => this.setState({ current: "idle" }),
      isPending: () => this.state.current === "pending",
      isSuccess: () => this.state.current === "success",
      isError: () => this.state.current === "error",
      isIdle: () => this.state.current === "idle"
    };

    render() {
      return <TargetComponent {...this.props} apiState={this.apiState} />;
    }
  };


  class SomePage extends React.Component {
    async componentDidMount() {
      const { apiState } = this.props;
      apiState.pending();
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        apiState.success();
      } catch (e) {
        apiState.error();
      }
    }
    render() {
      const { apiState } = this.props;
      return (
      <div>
          <h1>State machine example</h1>
      <p>
        {apiState.isIdle() && (
          <span>
            Currently <strong>idle</strong> and waiting
          </span>
        )}
        {apiState.isPending() && (
          <span>
            Please wait, <strong>pending</strong>!
          </span>
        )}
        {apiState.isSuccess() && (
          <span>
            What a <strong>success!</strong>
          </span>
        )}
        {apiState.isError() && (
          <span>
            Argh, encountered an <strong>error</strong>
          </span>
        )}
      </p> 
      </div>);
    }
  }
  
const BetterPage = withApiState(SomePage)


export default BetterPage;

