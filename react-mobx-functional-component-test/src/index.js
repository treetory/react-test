import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';
import NumberApp from './NumberApp';
/*
  Mobx 를 사용하여 store 관리를 하려면, 
  Mobx 를 이용하여 구성한 store 와 
  이 store 를 react app 의 전역에서 사용할 수 있도록 도와주는 Provider 를 구성해야 한다.
  
  핵심은 react app 에서 store 에 어떻게 전역적으로 접근할 수 있게 하느냐 인데,
  구성 방법은 여러가지가 있다.

  1. Context API 를 이용하기 -> pub / sub
    React context 를 생성하고, 
    store 를 제공하는 상위의 Component 는 Provider 를 붙여서 store 의 변화를 알리고,
    store 를 사용하는 하위의 Component 는 Consumer 를 붙여서 store 의 변화를 구독한다..
    Provider 와 Consumer 는 모두 Context 생성 시에 반환되는 것으로
    Context 생성으로 반환된 것을 Component 에 붙임으로서 pub / sub 이 가능하도록 만드는 것이 핵심

  2. Mobx -> observable
    mobx-react / mobx-react-lite 가 제공하는 Context Provider 를 이용한다.
    Provider 로 observable 한 컴포넌트가 위치할 범주를 감싸고,
    Provider 에는 Mobx 를 이용하여 구성한 store 를 전달한다.
    store 의 변화를 감지하여 사용할 컴포넌트는
    observer 로 감싸서 (HoC) store 를 이용해 접근한 state 의 변화를 탐지할 수 있게 한다.

  참고
  https://mobx.js.org/README.html
  https://velog.io/@zoeyul/MobX
  https://www.howdy-mj.me/mobx/mobx6-intro/

*/
import { Provider } from 'mobx-react';
import store from './store';

ReactDOM.render(
  // Provider 로 감싼 후, store 를 전달
  <Provider store={store}>
    <h1>Root</h1>
    <CounterApp />
    <NumberApp></NumberApp>
  </Provider>,
  document.getElementById('root')
);
