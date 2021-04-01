import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppHook from "./AppHook";

ReactDOM.render(
  <React.StrictMode>
    <AppHook />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want tconst [user]o start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
