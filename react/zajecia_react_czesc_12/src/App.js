import logo from './logo.svg';
import { Outlet, Link } from "react-router-dom";
import './App.css';

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
        <Link to="/Sample3">Sample3</Link>
        <Link to="/Sample4">Sample4</Link>
      </nav>
      <Outlet />



    </div>
  );
}

export default App;
