import logo from './logo.svg';
import './App.css';
import FriendList from './FriendList';
import friends from './data.json';

function App() {
  return (
    <div className="App">
     <FriendList friends = {friends}/>
    </div>
  );
}

export default App;
