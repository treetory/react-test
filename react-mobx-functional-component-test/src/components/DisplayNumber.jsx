import {observer} from 'mobx-react';
import store from'../store';

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