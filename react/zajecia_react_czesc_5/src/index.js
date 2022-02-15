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

import StateFromProps from './components/04_StateFromProps'
import SnapshotBeforeUpdate from './components/05_SnapshotBeforeUpdate';
import Update from './components/05_SnapshotBeforeUpdate';
import UpdateComponent from './components/01_UpdateComponent';
import MountUnmount from './components/02_MountUnmount';
import TodoMain from './components/03_Todo';
import ErrorExample from './components/06_ErrorBoundary';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="home" element={<Home />} />
          <Route path="update" element={<Update />} />
          <Route path="updateComponent" element={<UpdateComponent  />} />
          <Route path="mountunmount" element={<MountUnmount />} />
          <Route path="todo" element={<TodoMain  />} />     
          <Route path="statefromprops" element={<StateFromProps  />} />
          <Route path="snapshotbeforeupdate" element={<SnapshotBeforeUpdate />} />
          <Route path="errorexample" element={<ErrorExample />} />
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
