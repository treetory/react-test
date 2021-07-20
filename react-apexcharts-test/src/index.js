import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*
  Mobx
*/
import { Provider } from 'mobx-react';
import store from './store';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);