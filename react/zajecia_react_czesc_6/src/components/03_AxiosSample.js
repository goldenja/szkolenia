import React from 'react';
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

class AxiosSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    axios.get("/todos")
      .then(result => this.setState({
        isLoaded: true,
        items: [...result.data],
      }));

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

export default AxiosSample;