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
import Sample3 from './components/02_Sample3';
import Sample4 from './components/03_Sample4';
import Sample5 from './components/04_Sample5';
import Sample6 from './components/05_Sample6';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div>Wczytywanie...</div>}>
      <Routes>servicesample
        <Route path="/" element={<App />} >
          <Route path="sample1" element={<Sample1 />} />
          <Route path="sample3" element={<Sample3 />} />
          <Route path="sample4" element={<Sample4 />} />
          <Route path="sample5" element={<Sample5 />} />
          <Route path="sample6" element={<Sample6 />} />
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

