import { action, makeObservable, observable } from 'mobx';

class CountStore {
  number = 0;

  constructor() {
    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
    });
  }

  increase = () => {
    this.number++;
  };
  decrease = () => {
    this.number--;
  };
}

const countStore = new CountStore();
export default countStore;
