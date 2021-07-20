import {observer} from 'mobx-react';
import store from'../store';

/*
    observer 로 감싸주어서 해당 객체가 관찰자가 되게 한다.
    아래의 AddNumber 는 store 중 numberStore 의 변화를 관찰하게 된다.
    numberStore 에 접근하여 정의된 action 을 call 하여 state 를 변화시킨다.
*/
const AddNumber = observer(() => {
    const { numberStore } = store;
    return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value="+" onClick={function(e) {
                numberStore.add();
            }}></input>
            <input type="text" value={numberStore.number} onChange={(e) => {
                numberStore.setNumber(Number(e.target.value));
            }}></input>
        </div>
    )
})

export default AddNumber;