import './NumberApp.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

import {observer} from 'mobx-react';
// import store from'./store';

const NumberApp = observer(() => {
    // const { numberStore } = store; 
    return (
        <div className="App">
            <AddNumberRoot></AddNumberRoot>
            <DisplayNumberRoot></DisplayNumberRoot>
        </div>
    )
  })
  export default NumberApp;