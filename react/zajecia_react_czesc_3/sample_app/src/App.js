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
        <Link to="/clockinit">Clock Init</Link>
        <Link to="/clockstate">Clock State</Link>
        <Link to="/clocktimer">Clock Timer</Link>
        <Link to="/updateState">Update State</Link>
        <Link to="/clickinit">Click Init</Link>
        <Link to="/clickcallback">Click Callback</Link>
        <Link to="/clickcallbackthis">Click Callback This</Link>
        <Link to="/clickcallbackconstructor">Click Callback Constructor</Link>
        <Link to="/event">Event</Link>
        <Link to="/todo">ToDo</Link>
        <Link to="/video">Video</Link>
      </nav>
      <Outlet />



    </div>
  );
}

export default App;
