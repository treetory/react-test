import { useState, useEffect } from "react";
import { Grid, Box, Button, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ChartComponent from "../components/ChartComponent";
import {getRandomInt} from "../utils/test";

const LineChart = (props) => {
  const theme = useTheme();
  const chartOptions = {
    chart: {
        background: 'transparent',
        stacked: false,
        toolbar: {
          show: false
        }
      },
      colors: ['#1f87e6', '#ff5c7c'],
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
        horizontalAlign: 'right',
        labels: {
          colors: theme.palette.text.secondary
        },
        position: 'top',
        show: true
      },
      markers: {
        hover: {
          size: undefined,
          sizeOffset: 2
        },
        radius: 2,
        shape: 'circle',
        size: 4,
        strokeColors: ['#1f87e6', '#27c6db'],
        strokeWidth: 0
      },
      stroke: {
        curve: 'smooth',
        dashArray: [0, 3],
        lineCap: 'butt',
        width: 3
      },
      theme: {
        mode: theme.palette.mode
      },
      xaxis: {
        axisBorder: {
          color: theme.palette.divider
        },
        axisTicks: {
          color: theme.palette.divider,
          show: true
        },
        categories: [
          '01 Jan',
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan',
          '08 Jan',
          '09 Jan',
          '10 Jan',
          '11 Jan',
          '12 Jan'
        ],
        labels: {
          style: {
            colors: theme.palette.text.secondary
          }
        }
      },
      yaxis: [
        {
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
        },
        {
          axisTicks: {
            color: theme.palette.divider,
            show: true
          },
          axisBorder: {
            color: theme.palette.divider,
            show: true
          },
          labels: {
            style: {
              colors: theme.palette.text.secondary
            }
          },
          opposite: true
        }
      ]
  };

  const getSeries = (series) => {
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
    return _series;
  }

  var [series, setSeries] = useState([
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
  ]);
  
  useEffect(() => {
    
  }, []);

  return (
      <div>
        <Grid alignItems="center"
              container
              justifyContent="space-between"
              item
              xs={12}>
          <Grid item>
            <Box>
              <Typography
                  color="textPrimary"
                  variant="h3"
                  sx={{
                    fontWeight: 'fontWeightBold',
                    mt: 3
                  }}
                >
                  LineChart (use hook)
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
            sx={{
              backgroundColor: 'background.paper',
              p: 3
            }}
            >
              <Button
                color="primary"
                size="large"
                sx={{ mr: 3 }}
                variant="outlined"
                onClick={function(e) {
                    var _series = getSeries(series);
                    setSeries(_series);
                }}
              >
                REFRESH
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            p: 3
          }}
        >
          <ChartComponent
              height={props.height}
              options={chartOptions}
              series={series}
              type={'line'}
          ></ChartComponent>
        </Box>
      </div>
  )
}

export default LineChart;