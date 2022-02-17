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
import FetchSample from './components/01_FetchSample';
import AxiosSample from './components/03_AxiosSample';
import ServiceSample from './components/04_ServiceSample';
import AbortSample from './components/02_AbortSample';
import EnhancedLikes from './components/05_HOC';
import BetterPage from './components/06_MachineState';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>servicesample
        <Route path="/" element={<App />} >
          <Route path="home" element={<Home />} />
          <Route path="fetchsample" element={<FetchSample />} />
          <Route path="abortsample" element={<AbortSample />} />
          <Route path="axiossample" element={<AxiosSample />} />
          <Route path="servicesample" element={<ServiceSample />} />
          <Route path="hoc" element={<EnhancedLikes />} />
          <Route path="betterpage" element={<BetterPage />} />
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
