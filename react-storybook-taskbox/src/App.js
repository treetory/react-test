import './App.css';
import {Provider} from 'mobx-react';
import store from './store';

import InboxScreen from './components/InboxScreen';

function App() {
  return (
    <Provider store={store}>
      <InboxScreen></InboxScreen>
    </Provider>
  );
}

export default App;
