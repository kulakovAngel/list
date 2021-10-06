import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {App} from './App';

ReactDOM.render(
    <App />,
    document.getElementById('app-root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * How to work with Vim:
 * -> i
 * -> input text (commit, etc)
 * -> `esc`
 * -> :wq
 * -> `enter`
 * 
 * note:
 * -> :qa - for exit without save
 */