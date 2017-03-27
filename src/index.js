import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {state} from './state.js';

ReactDOM.render(
  <App books={state.books}/>,
  document.getElementById('app')
);
