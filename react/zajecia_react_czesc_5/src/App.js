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
        <Link to="/home">Home</Link>
        <Link to="/updateComponent">Update Component</Link>
        <Link to="/mountunmount">Mount Unmount</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/statefromprops">State From Props</Link>
        <Link to="/snapshotbeforeupdate">State From Props</Link>
        <Link to="/errorexample">Error example</Link>
      </nav>
      <Outlet />



    </div>
  );
}

export default App;
