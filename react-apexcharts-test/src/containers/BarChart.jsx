import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import ChartComponent from "../components/ChartComponent";

const BarChart = (props) => {
  const theme = useTheme();
  const chartOptions = {
      chart: {
        background: 'transparent',
        toolbar: {
          show: false
        }
      },
      colors: ['#13affe', '#fbab49'],
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: theme.palette.divider,
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      legend: {
        labels: {
          colors: theme.palette.text.secondary
        },
        show: true
      },
      plotOptions: {
        bar: {
          columnWidth: '40%'
        }
      },
      stroke: {
        colors: ['transparent'],
        show: true,
        width: 2
      },
      theme: {
        mode: theme.palette.mode
      },
      xaxis: {
        axisBorder: {
          show: true,
          color: theme.palette.divider
        },
        axisTicks: {
          show: true,
          color: theme.palette.divider
        },
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
      yaxis: {
        axisBorder: {
          color: theme.palette.divider,
          show: true
        },
        axisTicks: {
          color: theme.palette.divider,
          show: true
        },
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      }
  };

  var [series, setSeries] = useState([
      {
          data: [30, 40, 25, 50, 49, 21, 70, 51],
          name: 'This week'
      },
      {
          data: [23, 12, 54, 61, 32, 56, 81, 19],
          name: 'Last week'
      }
  ]);
  
  useEffect(() => {
    
  }, []);
  
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }

  const getSeries = (series) => {
    // var _series = Array.from(series);
    // _series.map(_s => {
    //     if (_s.name === 'This week') {
    //         _s.name = 'Last week';
    //     } else {
    //         var _data = [];
    //         var total =_s.data.length;
    //         while(total > 0) {
    //             _data.push(getRandomInt(1, 99));
    //             --total;
    //         }
    //         _s.name = 'This week';
    //         _s.data = _data;
    //     }
    //     return _s;
    // });
    // return _series;
  }

  return (
      <div>
        <div>
          {/* <button onClick={setSeries(getSeries(series))}>REFRESH</button> */}
        </div>
          <ChartComponent
              height={props.height}
              options={chartOptions}
              series={series}
              type={'bar'}
          ></ChartComponent>
      </div>
  )
}

export default BarChart;