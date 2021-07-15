import { createStore } from "redux";

/*
    store 는 redux 를 통해 생성하며, redux 가 제공하는 createStore 함수를 이용한다.
    createStore 함수에 state 와 action 을 인자로 받아, state 객체를 반환하는 익명함수를 전달하면
    action 유형에 맞추어 state 를 복제 후, 복제된 state 에 action 의 결과를 반영하여
    새로운 state 객체를 만들어 반환한다.
*/
export default createStore(function(state, action) {

    if (state === undefined) {
        return {
            number : 0
        }
    }

    var _state = null;        
    switch(action.type) {
        case "INCREMENT" :
            _state = {...state, number:state.number + action.size};
            break;
        default:
            _state = {...state};
            break;
    }
    return _state;

}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())