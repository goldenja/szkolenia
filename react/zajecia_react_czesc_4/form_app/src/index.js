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
import SimpleForm from './compontents/01_SimpleForm';
import TextAreaForm from './compontents/02_TextAreaForm';
import SelectFrom from './compontents/03_SelectForm';
import MultiForm from './compontents/04_MultiForm';
import RefForm from './compontents/05_RefForm';
import RefDafaultForm from './compontents/06_RefDefaultForm';
import RefFileForm from './compontents/07_RefFileForm';
import FormicBasic from './compontents/08_FormicBasic';
import ReactHookBasic from './compontents/09_ReactHookBasic';
import Todo from './compontents/10_Todo';
import TodoStart from './compontents/11_TodoStart';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >

          <Route path="simpleform" element={<SimpleForm />} />
          <Route path="textareaform" element={<TextAreaForm />} />
          <Route path="selectfrom" element={<SelectFrom />} />
          <Route path="multiform" element={<MultiForm />} />
          <Route path="refform" element={<RefForm />} />
          <Route path="refdafaultform" element={<RefDafaultForm />} />
          <Route path="reffileform" element={<RefFileForm />} />
          <Route path="formicbasic" element={<FormicBasic />} />
          <Route path="reacthookbasic" element={<ReactHookBasic />} />
          <Route path="todo" element={<Todo />} />
          <Route path="todostart" element={<TodoStart />} />
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
