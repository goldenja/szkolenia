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

import UseMemo from './components/01_UseMemo';
import UseCallback from './components/02_UseCallback'
import UseReducer from './components/03_UseReducer';
import UseReducerLazy from './components/04_UseReducerLazy';
import SimpleHook from './components/05_SimpleHook';
import StorageHook from './components/06_UseLocalStorage';
import Demo from './components/07_Demo';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>servicesample
        <Route path="/" element={<App />} >
          <Route path="home" element={<Home />} />
          <Route path="usememo" element={<UseMemo />} />
          <Route path="usecallback" element={<UseCallback />} />
          <Route path="usereducer" element={<UseReducer />} />
          <Route path="usereducerlazy" element={<UseReducerLazy />} />
          <Route path="simplehook" element={<SimpleHook />} />
          <Route path="storagehook" element={<StorageHook />} />
          <Route path="motion" element={<Demo />} />
          
          
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
