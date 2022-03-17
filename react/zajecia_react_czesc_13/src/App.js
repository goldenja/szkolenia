import logo from './logo.svg';
import { Outlet, Link } from "react-router-dom";
import './App.css';

//https://codesandbox.io/s/react-redux-filter-example-u4ftx?from-embed=&file=/src/components/Filter/index.js

function App() {
  return (
    <div className="App">


      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/Sample1">Sample1</Link>
        <Link to="/Sample2">Sample2</Link>
      </nav>
      <Outlet />



    </div>
  );
}

export default App;
