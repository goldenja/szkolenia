/** @jsxImportSource @emotion/react */
import { jsx, ThemeProvider } from '@emotion/react'

import logo from './logo.svg';
import './App.css';
import Test from './Test.js'
import TestTheme from './TestTheme.js'
import TestStyled from './TestStyled.js'
import TestGlobal from './TestGlobal.js'
// npm i @emotion/styled @emotion/react

const theme = {
  colors: {
    primary: 'blue'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Test />
        <TestTheme/>
        <TestStyled/>
        <TestGlobal/>

        
      </div>
    </ThemeProvider>
  );
}

export default App;
