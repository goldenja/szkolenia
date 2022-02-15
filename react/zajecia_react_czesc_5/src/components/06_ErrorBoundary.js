
import React from "react";
import initialTodos from '../todos.json';
import expandedTodos from '../todos2.json';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Zaktualizuj stan, aby następny render pokazał zastępcze UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Możesz także zalogować błąd do zewnętrznego serwisu raportowania błędów
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Możesz wyrenderować dowolny interfejs zastępczy.
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

class ErrorTest extends React.Component {
  constructor(props) {
    super(props);
    throw new Error("Aaaaaa");
  }

  render() {
    return (<>Hejka</>);
  }
}

const ErrorExample = () => (
  <ErrorBoundary>
      <ErrorTest/>
  </ErrorBoundary>
);

export default ErrorExample;