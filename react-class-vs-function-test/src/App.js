import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="toggle func" onClick={
          function() {
            setFuncShow(funcShow ? false : true);
          }
        }></input>
      <input type="button" value="toggle class" onClick={
        function() {
          setClassShow(classShow ? false : true);
        }
      }></input>
      {funcShow ? <FuncComp initNumber={2} initDate={new Date().toString()}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2} initDate={new Date().toString()}></ClassComp> : null}
    </div>
  );
}

var funcId = 0;
// 함수형 스타일일 땐, 인자로 무조건 props 를 받는다.
function FuncComp(props) {
  // Hooks 를 이용하여 state 를 전달한다.
  var numberState = useState(props.initNumber);
  var dateState = useState(props.initDate);
  
  // useState 가 반환하는 첫번째는 state
  var number = numberState[0];
  var _date = dateState[0];
  
  // useState 가 반환하는 두번째는 해당 state 의 setState 함수
  var setNumber = numberState[1];
  var setDate = dateState[1];
  
  useEffect(function() {
    console.log('%cfunction => useEffect number (componentDidMount & componentDidUpdate) ' + (++funcId), classStyle);
    return function() {
      // useEffect 가 함수를 반환하게 하면, 이 함수는 clean up 하는데 쓰일 수 있다. (componentWillUnmount 와 동일)
      console.log('%cfunction => useEffect return (clean up - componentWillUnmount) ' + (++funcId), classStyle);
    }
  }, [number] /* useEffect 의 두번째 인자로 state 를 넘겨주면, 해당 state 의 이전과 이후를 비교할 수 있다*/);

  useEffect(function() {
    console.log('%cfunction => useEffect _date (componentDidMount & componentDidUpdate) ' + (++funcId), classStyle);
  }, [] /*  useEffect 의 두번째 인자로 빈 배열을 넘겨주면, 컴포넌트를 생성하는 최초 한번만 동작하게 된다. */);

  console.log('%cfunction => render ' + (++funcId), classStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number (props) : {props.initNumber}</p>
      <p>Number (state) : {number}</p>
      <p>Date (props) : {props.initDate}</p>
      <p>Date (props = state) : {_date}</p>
      <input type="button" value="random" onClick={
          function() {
            setNumber(Math.random());
          }
        }></input>
      <input type="button" value="date change" onClick={
        function() {
          setDate(new Date().toString());
        }
      }></input>
    </div>
  )
}

// 클래스 스타일일 땐, props 와 state 가 전달 가능하다.
var classStyle = 'color:red';
class ClassComp extends React.Component {
  // props 를 받아서 state 로 변환
  state = {
    number: this.props.initNumber,
    date: this.props.initDate
  }
  
  // lifecycle of component

  // @deprecated
  // componentWillMount() {
  //   console.log('%cclass => componentWillMount', classStyle);
  // }
  // @deprecated
  // componentWillUpdate() {
  //   console.log('%cclass => componentWillUpdate', classStyle);
  // }
  shouldComponentUpdate() {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentDidMount() {
    console.log('%cclass => shouldComponentUpdate', classStyle);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('%cclass => shouldComponentUpdate', classStyle);
  }
  componentWillUnmount() {
    console.log('%cclass => shouldComponentUpdate', classStyle);
  }
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number (props) : {this.props.initNumber}</p>
        <p>Number (props - state) : {this.state.number}</p>
        <p>Date (props) : {this.props.initDate}</p>
        <p>Date (props - state) : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function() {
            this.setState(
              {
                number: Math.random()
              }
            );
          }.bind(this)
        }></input>
        <input type="button" value="update date" onClick={
          function() {
            this.setState(
              {
                date: new Date().toString()
              }
            );
          }.bind(this)
        }></input>
      </div>
    )
  }
}

export default App;
