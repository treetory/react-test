import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// react-redux 사용시 추가되는 의존성
// https://react-redux.js.org/ 참고 할 것
import {Provider} from 'react-redux';
import store from './store/store';
// Provider 로 App 을 감싸서, App 전체에 영향을 미치게 하고, Provider 에 store 를 던져준다.

ReactDOM.render(
  // 1. Redux 만 쓸 때는 StrictMode 로 App 을 구동해도 됨
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // 2. React Redux 를 사용할 때는 Provider 로 감싼다. Provider 의 props 로 store 를 전달한다.
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
