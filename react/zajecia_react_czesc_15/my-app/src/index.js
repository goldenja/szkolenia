import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import Sample1 from './components/01_Sample';
import Sample2 from './components/02_Sample';
import Sample3 from './components/03_Sample';
import Sample4 from './components/04_Sample';

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="sample1" element={<Sample1 />} />
          <Route path="sample2" element={<Sample2 />} />
          <Route path="sample3" element={<Sample3 />} />
          <Route path="sample4" element={<Sample4 />} />
        </Routes>
      </Provider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
