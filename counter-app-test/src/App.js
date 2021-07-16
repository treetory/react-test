import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Counters from './components/Counters';

function App(props) {

  var [counters, setCounter] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]);

  const handleIncrement = (counter) => {
    var _counters = [...counters];
    setCounter(_counters.map(_counter => {
      if (_counter === counter) _counter.value++;
      return _counter;
    }));
  }

  const handleDecrement = (counter) => {
    var _counters = [...counters];
    setCounter(_counters.map(_counter => {
      if (_counter === counter) _counter.value--;
      return _counter;
    }));
  }

  const handleReset = () => {
    var _counters = [...counters];
    setCounter(_counters.map(_counter => {
      _counter.value = 0;
      return _counter;
    }));
  }

  const handleDelete = (counterId) => {
    var _counters = [...counters];
    setCounter(_counters.filter(_counter => _counter.id !== counterId));
  }

  const handleRestart = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <NavBar totalCounters={counters.filter(counter => counter.value > 0).length}></NavBar>
      <main>
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onRestart={handleRestart}
        ></Counters>
      </main>
    </div>
  );
}

export default App;
