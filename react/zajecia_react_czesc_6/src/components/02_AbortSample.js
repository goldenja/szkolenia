import React from 'react';

class AbortSample extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  abortController = new AbortController();

  
    componentDidMount() {

      fetch("https://jsonplaceholder.typicode.com/todos" , {signal: this.abortController.signal})
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Uwaga: to ważne, żeby obsłużyć błędy tutaj, a
          // nie w bloku catch(), aby nie przetwarzać błędów
          // mających swoje źródło w komponencie.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    componentWillUnmount(){
      this.abortController.abort();
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Błąd: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Ładowanie...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  export default AbortSample;