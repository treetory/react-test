import React, {useState} from "react";
import './App.css';
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel"; 
import calculate from "./logic/calculate";

function App(props) {
  var [total, setTotal] = useState(null);
  var [next, setNext] = useState(null);
  var [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    var _state = (calculate({total, next, operation}, buttonName));
    if (_state.hasOwnProperty('total')) setTotal(_state.total);
    if (_state.hasOwnProperty('next')) setNext(_state.next);
    if (_state.hasOwnProperty('operation')) setOperation(_state.operation);
  }

  return (
    <div className="component-app">
      <Display value={next || total || "0"}></Display>
      <ButtonPanel clickHandler={handleClick}></ButtonPanel>
    </div>
  );
}

export default App;
