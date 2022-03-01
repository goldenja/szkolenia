import React from 'react';
import aktualizacja from '../img/aktualizacja.png';
import montowanie from '../img/montowanie.png';

class Home extends React.Component {
    // https://reactrouter.com/docs/pl/v6/getting-started/tutorial
    render() {
        return (
            <React.Fragment>
            <a href = "https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"> Diagram </a>
            <br/>
            <img src={montowanie}/>
            <img src={aktualizacja}/>
            
            </React.Fragment>
        );
    }
}
export default  Home;