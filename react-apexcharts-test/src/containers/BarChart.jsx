import { useState, useEffect } from "react";
import { Grid, Box, Button, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ChartComponent from "../components/ChartComponent";
import {getRandomInt} from "../utils/test";

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
  
  const getSeries = (series) => {
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
    return _series;
  }

  return (
      <div>
        <Grid alignItems="center"
              container
              justifyContent="space-between"
              spacing={3}
              item
              xs={12}>
          <Grid item spacing={12}>
            <Box>
              <Typography
                  color="textPrimary"
                  variant="h3"
                  sx={{
                    fontWeight: 'fontWeightBold',
                    mt: 3
                  }}
                >
                  BarChart (use hook)
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
              {/* <button onClick={function(e) {
                var _series = getSeries(series);
                setSeries(_series);
              }}>REFRESH</button> */}
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
              type={'bar'}
          ></ChartComponent>
        </Box>
      </div>
  )
}

export default BarChart;