import React, {lazy, Suspense} from 'react';
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
import UseState from './components/01_UseState';
import GithubRepoList from './components/02_HOC';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div>Wczytywanie...</div>}>
      <Routes>servicesample
        <Route path="/" element={<App />} >
          <Route path="home" element={<Home />} />
          <Route path="usestate" element={<UseState />} />
          <Route path="github" element={<GithubRepoList  username={"goldenja"} />} />
          
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

