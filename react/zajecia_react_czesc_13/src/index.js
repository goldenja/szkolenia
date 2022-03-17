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

import Sample1 from './components/00_Sample1.js'
import Sample2 from './components/01_Sample2';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div>Wczytywanie...</div>}>
      <Routes>servicesample
        <Route path="/" element={<App />} >
          <Route path="sample1" element={<Sample1 />} />
          <Route path="sample2" element={<Sample2 />} />
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

