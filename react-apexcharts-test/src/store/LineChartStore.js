import { action, makeObservable, observable } from 'mobx';
import {getRandomInt} from '../utils/test';

class LineChartStore {
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
            var start, end;
            if (_s.name === 'Page Views') {
                start = 1001;
                end = 9999;
            } else {
                start = 11; 
                end = 99;
            }
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

const lineChartStore = new LineChartStore(
    [
        {
            data: [
              3350,
              1840,
              2254,
              5780,
              9349,
              5241,
              2770,
              2051,
              3764,
              2385,
              5912,
              8323
            ],
            name: 'Page Views'
          },
          {
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
            name: 'Session Duration'
          }
      ]
);
export default lineChartStore;