import { Grid, Box, Button, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ChartComponent from "../components/ChartComponent";
import {observer} from 'mobx-react';
import store from '../store';

const LineChartWithMobx = observer((props) => {
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
  const {lineChartStore} = store;
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
                  LineChart (use Mobx)
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
                    lineChartStore.getSeries(lineChartStore.series);
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
              series={lineChartStore.series}
              type={'line'}
          ></ChartComponent>
        </Box>
      </div>
  )
})

export default LineChartWithMobx;