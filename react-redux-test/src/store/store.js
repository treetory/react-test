import { createStore } from "redux";

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