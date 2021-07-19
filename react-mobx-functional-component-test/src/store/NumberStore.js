import { makeObservable, observable, action } from 'mobx';

class NumberStore {
  _number = 0;
  _size = 0;

  constructor() {
    makeObservable(this, {
      _number: observable,
      _size: observable,
      add: action,
      setNumber: action,
    });
  }

  get number() {
    return this._number;
  }

  get size() {
    return this._size;
  };

  add = () => {
    this._size += this._number;
  }

  setNumber(number) {
    this._number = number;
  }

}

const numberStore = new NumberStore();
export default numberStore;
