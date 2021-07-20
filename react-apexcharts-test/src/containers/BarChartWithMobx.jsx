import { Grid, Typography, Box, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ChartComponent from "../components/ChartComponent";
import {observer} from "mobx-react";
import store from "../store";

const BarChart = observer((props) => {
  const theme = useTheme();
  const chartOptions = {
      chart: {
        background: 'transparent',
        toolbar: {
          show: false
        }
      },
      colors: ['#4287f5', '#f54284'],
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

  const {barChartStore} = store;

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
                  BarChart (use Mobx)
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
                    barChartStore.getSeries(barChartStore.series);
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
              series={barChartStore.series}
              type={'bar'}
          ></ChartComponent>
        </Box>
      </div>
  )
})

export default BarChart;