import { action, makeObservable, observable } from 'mobx';
import {getRandomInt} from '../utils/test';

class RadialBarChartStore {
    value = [];
    constructor(value) {
        makeObservable(this, {
            value: observable,
            getValue: action,
        });
        this.value = value;
    }
    getValue = () => {
        this.value = [getRandomInt(1, 100)];
    }
}

const radialBarChartStore = new RadialBarChartStore([83]);
export default radialBarChartStore;