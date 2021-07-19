import './CounterApp.css';
import { autorun } from 'mobx';
import {observer} from 'mobx-react';
import store from'./store';

const CounterApp = observer(() => {
  const { counterStore, doubleStore } = store; 
  return (
    <div>
      <div>
        <h1>Count</h1>
        <div>number: {counterStore.number}</div>
        <button onClick={() => counterStore.increase()}>plus</button>
        <button onClick={() => counterStore.decrease()}>minus</button>
      </div>
      <div>
        <h1>Computed</h1>
        <div>double number: {doubleStore.value}</div>
        <button onClick={() => doubleStore.increment()}>
          double increment
        </button>
      </div>
    </div>
  )
})
export default CounterApp;
