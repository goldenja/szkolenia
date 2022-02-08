import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/00_Home.js'

import ClockInit from './components/01_ClockInit'
import ClockState from './components/02_ClockState'
import ClockTimer from './components/03_ClockTimer'
import UpdateState from './components/04_UpdateState'
import ClickCounterInit from './components/05_ClickCounterInit';
import ClickCounterCallback from './components/06_ClickCounterCallback';
import ClickCounterCallbackThis from './components/07_ClickCounterCallbackThis';
import ClickCounterCallbackConstructor from './components/08_ClickCounterCallbackConstructor';
import EventParent from './components/09_Event';
import Todo from './components/10_Todo';
import Video from './components/11_Video';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="home" element={<Home />} />
          <Route path="clockinit" element={<ClockInit date={new Date()} />} />
          <Route path="clockstate" element={<ClockState />} />
          <Route path="clocktimer" element={<ClockTimer />} />
          <Route path="updateState" element={<UpdateState />} />
          <Route path="clickinit" element={<ClickCounterInit />} />
          <Route path="clickcallback" element={<ClickCounterCallback />} />
          <Route path="clickcallbackthis" element={<ClickCounterCallbackThis />} />
          <Route path="clickcallbackconstructor" element={<ClickCounterCallbackConstructor />} />
          <Route path="event" element={<EventParent />} />
          <Route path="todo" element={<Todo />} />
          <Route path="video" element={<Video />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
