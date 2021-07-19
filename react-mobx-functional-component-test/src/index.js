import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';
import NumberApp from './NumberApp';
// Mobx
import { Provider } from 'mobx-react';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <h1>Root</h1>
    <CounterApp />
    <NumberApp></NumberApp>
  </Provider>,
  document.getElementById('root')
);
