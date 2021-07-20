import { action, makeObservable, observable } from 'mobx';

class CountStore {
  number = 0;

  // observable 한 객체로 만들기 위해, makeObservable 로 클래스 객체를 생성하게 한다.
  constructor() {
    makeObservable(this, {
      number: observable, // 각 state 의 observable state 를 정의한다.
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
