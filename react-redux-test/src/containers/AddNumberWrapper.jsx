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