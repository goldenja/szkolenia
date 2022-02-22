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
        <Link to="/usestate">Use state</Link>
        <Link to="/useeffect">Use effect</Link>
        <Link to="/useeffectcleanup">Use effect cleanup</Link>
        <Link to="/useeffectmultiple">Use effect multiple</Link>
        <Link to="/useeffectchange">Use effect change</Link>
        <Link to="/propsdrilling">Props drilling</Link>
        <Link to="/usecontextsimple">Use Context Simple</Link>
        <Link to="/usecontextupdate">Use Context Update</Link>
        <Link to="/portal">Portal</Link>
        <Link to="/portalevent">Portal Event</Link>
        <Link to="/userefsimple">Use ref simple</Link>
        <Link to="/stopwatch">Use ref timer</Link>
        <Link to="/accessingelement">Use ref DOM</Link>
        
      </nav>
      <Outlet />



    </div>
  );
}

export default App;
