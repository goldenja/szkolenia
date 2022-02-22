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

import UseState from './components/01_UseState';
import UseEffect from './components/02_UseEffect';
import UseEffectCleanup from './components/03_UseEffectCleanup';
import UseEffectMultiple from './components/05_UseEffectChange';
import UseEffectChange from './components/05_UseEffectChange';
import PropsDrillling from './components/06_PropsDrilling';
import UseContextSimple from './components/07_UseContextSimple';
import UseContextUpdate from './components/08_UseContextUpdate';
import ModalParent from './components/09_Portal';
import ParentEvent from './components/10_PortalEvents';
import UseRefSimple from './components/11_UseRefSimple';
import Stopwatch from './components/12_UseRefTimer';
import AccessingElement from './components/13_UseRefDom';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>servicesample
        <Route path="/" element={<App />} >
          <Route path="home" element={<Home />} />
          <Route path="usestate" element={<UseState />} />
          <Route path="useeffect" element={<UseEffect />} />
          <Route path="useeffectcleanup" element={<UseEffectCleanup />} />
          <Route path="useeffectmultiple" element={<UseEffectMultiple />} />
          <Route path="useeffectchange" element={<UseEffectChange />} />
          <Route path="propsdrilling" element={<PropsDrillling />} />
          <Route path="usecontextsimple" element={<UseContextSimple />} />
          <Route path="usecontextupdate" element={<UseContextUpdate />} />
          <Route path="portal" element={<ModalParent />} />
          <Route path="portalevent" element={<ParentEvent />} />
          <Route path="userefsimple" element={<UseRefSimple />} />
          <Route path="stopwatch" element={<Stopwatch />} />
          <Route path="accessingelement" element={<AccessingElement />} />
          
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
