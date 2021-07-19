import { makeObservable, observable, computed, action } from 'mobx';

class DoubleStore {
  value = 0;

  constructor(value) {
    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action,
    });
    this.value = value;
  }

  get double() {
    return this.value * 2;
  }

  increment() {
    this.value++;
  }
}

const doubleStore = new DoubleStore(1);
export default doubleStore;
