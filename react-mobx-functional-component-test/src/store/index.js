/*
    store 를 종류에 따라 분리, 전역 store 를 export 한다.
*/
import counterStore from './CountStore';
import doubleStore from './DoubleStore';
import numberStore from './NumberStore';

const store = { counterStore, doubleStore, numberStore };
export default store;