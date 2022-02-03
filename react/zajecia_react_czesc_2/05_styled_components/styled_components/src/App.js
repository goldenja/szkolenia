import logo from './logo.svg';
import './App.css';
import Test from './Test.js'
import { createGlobalStyle } from 'styled-components'

//https://github.com/jsjoeio/styled-components-vs-emotion
//npm install --save styled-components


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.whiteColor ? 'white' : 'black')};
  }`

function App() {
  return (
    <div className="App">
       <GlobalStyle  whiteColor/>
      <Test/>
    </div>
  );
}

export default App;
