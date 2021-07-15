import AddNumber from "../components/AddNumber";
import {connect} from "react-redux";

/*

    react-redux 를 사용할 때는, react-redux 가 제공하는 connect 함수를 이용하여
    Component 에 mapStateToProps 와 mapDispatchToProps 를 바인딩한다.

    react-redux 의 connect 함수는
    첫번째 인자로 mapStateToProps 함수를 받고, 두번째 인자로 mapDispatchToProps 함수를 받는다
    connect 는 WrappedComponent 를 인자로 받는 익명함수를 return 하며,
    이 익명함수는 connect 의 인자로 받는 mapStateToProps 와 mapDispacthToProps 를
    WrappedComponent 에 props 로 전달하여 생성된 
    최종 Component 를 반환한다

    즉, 아래는 AddNumber 컴포넌트에 mapDispatchToProps 를 내부 props 로 바인딩한
    새로운 AddNumber 컴포넌트를 반환한다 -> 즉, 이게 wrapper 컴포넌트가 된다.

    mapDispatchToProps 함수는 store.dispatch 함수와 해당 컴포넌트의 props 를 인자로 받는다
*/

function mapDispatchToProps(dispatch, props) {
    return {
        onClick: (size) => {
            dispatch({type:'INCREMENT', size:size});
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNumber);