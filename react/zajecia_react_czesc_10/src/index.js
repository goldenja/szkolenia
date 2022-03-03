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
import UseMemo from './components/01_UseMemo';

//https://ui.dev/react-router-code-splitting
//https://auth0.com/blog/javascript-whats-new-es2020/

// const Home = lazy(() => import('./components/00_Home.js' /* webpackChunkName: "home-page" */));
// const UseMemo = lazy(() => import('./components/01_UseMemo.js'));

//npm run build -- --stats
//npx webpack-bundle-analyzer ./build/bundle-stats-json


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div>Wczytywanie...</div>}>
      <Routes>servicesample
        <Route path="/" element={<App />} >
          <Route path="home" element={<Home />} />
          <Route path="usememo" element={<UseMemo />} />  
          
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

