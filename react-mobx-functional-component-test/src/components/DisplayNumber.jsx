import {observer} from 'mobx-react';
import store from'../store';

/*
    observer 로 감싸주어서 해당 객체가 관찰자가 되게 한다.
    아래의 DisplayNumber 는 store 중 numberStore 의 변화를 관찰하게 된다.
    numberStore 의 size state 의 값을 관찰하여 변한 것이 있으면 바로 렌더링한다.
*/
const DisplayNumber = observer(() => {
    const { numberStore } = store;
    return (
        <div>
            <h1>Display Number</h1>
            <input type="text" value={numberStore.size} readOnly></input>
        </div>
    )
})

export default DisplayNumber;