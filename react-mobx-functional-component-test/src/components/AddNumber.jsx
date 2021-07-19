import {observer} from 'mobx-react';
import store from'../store';

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