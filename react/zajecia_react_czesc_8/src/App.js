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
        <Link to="/usememo">Use memo</Link>
        <Link to="/usecallback">Use callback</Link>
        <Link to="/useeffectcleanup">Use effect cleanup</Link>
        <Link to="/usereducer">Use reducer</Link>
        <Link to="/usereducerlazy">Use reducer lazy</Link>
        <Link to="/simplehook">Simple hook</Link>
        <Link to="/storagehook">Storage hook</Link>
        <Link to="/motion">Demo</Link>
     
        
      </nav>
      <Outlet />



    </div>
  );
}

export default App;
