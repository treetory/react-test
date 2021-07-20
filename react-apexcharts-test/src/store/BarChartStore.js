import { action, makeObservable, observable } from 'mobx';
import {getRandomInt} from '../utils/test';

class BarChartStore {
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
            if (_s.name === 'This week') {
                _s.name = 'Last week';
            } else {
                var _data = [];
                var total =_s.data.length;
                while(total > 0) {
                    _data.push(getRandomInt(1, 99));
                    --total;
                }
                _s.name = 'This week';
                _s.data = _data;
            }
            return _s;
        });
        this.series = _series;
      }
}

const barChartStore = new BarChartStore(
    [
        {
            data: [30, 40, 25, 50, 49, 21, 70, 51],
            name: 'This week'
        },
        {
            data: [23, 12, 54, 61, 32, 56, 81, 19],
            name: 'Last week'
        }
    ]
);
export default barChartStore;