import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";

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
        <Link to="/simpleform">Simple Form</Link>
        <Link to="/textareaform">TextArea Form</Link>
        <Link to="/selectfrom">Select Form</Link>
        <Link to="/multiform">Multi Form</Link>
        <Link to="/refform">Ref Form</Link>
        <Link to="/refdafaultform">Ref Default Form</Link>
        <Link to="/reffileform">Ref File Form</Link>
        <Link to="/formicbasic">Formic Basic</Link>
        <Link to="/reacthookbasic">React Hook Basic</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/todostart">Todo Start</Link>
        
        
      </nav>
      <Outlet />

    </div>
  );
}


export default App;
