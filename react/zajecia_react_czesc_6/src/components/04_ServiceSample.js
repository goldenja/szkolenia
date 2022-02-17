import React from 'react';
import {fetchTodosQuery} from '../services/http.js';

class ServiceSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    debugger
    fetchTodosQuery()
      .then(result => this.setState({
        isLoaded: true,
        items: [...result.data],
      }));
  }

  render() {
    const { isLoaded, items } = this.state;
    
    if (!isLoaded) {
      return <div>Ładowanie...</div>;
    } else {
      return (
        <ul>servicesample
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



export default ServiceSample;