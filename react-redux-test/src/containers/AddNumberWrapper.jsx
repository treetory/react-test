/*
    UI 컴포넌트인 AddNumber 를 wrapping 하는 Wrapper 를 생성
    해당 Wrapper 내에 store 를 통해 state 를 제어하는 코드를 작성하여
    UI 컴포넌트가 로직 의존성에서 벗어나도록 구성한다

    props 로 onClick callback 함수를 UI 컴포넌트에 전달
    -> AddNumber 는 전달받은 callback 함수를 execute 하는 이벤트만 가지고 있는다.
       AddNumber 는 callback 을 execute 하기 때문에 props에 전달된 함수를 () 붙여서 실행을 해야한다.

    즉, props 만 잘 전달하면 되는 것이다
    
    아래는 전달하는 callback 내부에 store 를 dispatch 하는 함수를 주고,
    dispatch 시에 전달해야 할, state 는 UI 컴포넌트 내에서 전달할 수 있도록
    인자로 주고받을 수 있게 한다.
*/
import AddNumber from "../components/AddNumber";
import store from "../store/store";

function AddNumberWrapper(props) {
    return (
        <AddNumber onClick={function(size) {
            store.dispatch({type:'INCREMENT', size:size});
        }}></AddNumber>
    )
}

export default AddNumberWrapper;