import { action, makeObservable, observable } from 'mobx';
import {getRandomInt} from '../utils/test';

class AreaChartStore {
    series = [];

    constructor(series) {
        makeObservable(this, {
            series: observable,
            getSeries: action,
        });
        this.series = series;
    }
    getSeries = (series) => {
        var _series = Array.from(series);
        _series.map(_s => {
            var start = 1; 
            var end = 30;
            var _data = [];
            var total =_s.data.length;
            while(total > 0) {
                _data.push(getRandomInt(start, end));
                --total;
            }
            _s.data = _data;
    
            return _s;
        });
        this.series = _series;
      }
}

const areaChartStore = new AreaChartStore(
    [{ data: [10, 5, 11, 20, 13, 28, 18, 4, 13, 12, 13, 5] }]
);
export default areaChartStore;