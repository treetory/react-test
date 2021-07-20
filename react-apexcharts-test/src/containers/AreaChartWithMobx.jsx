import { Button, Typography, Grid, Box, Card, CardContent, CardHeader, Divider, IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Scrollbar from '../components/Scrollbar';
import DotsHorizontalIcon from '../icons/DotsHorizontal';
import ChartComponent from "../components/ChartComponent";
import {observer} from 'mobx-react';
import store from '../store';

const AreaChartWithMobx = observer((props) => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: ['#00ab57'],
    dataLabels: {
      enabled: false
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: 'vertical'
      },
      type: 'gradient'
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2
    },
    markers: {
      size: 6,
      strokeColors: theme.palette.background.default,
      strokeWidth: 3
    },
    stroke: {
      curve: 'smooth'
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}K` : value),
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };

  const {areaChartStore} = store;

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
                    AreaChart (use Mobx)
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
                        areaChartStore.getSeries(areaChartStore.series);
                    }}
                >
                REFRESH
                </Button>
            </Box>
            </Grid>
        </Grid>
        <Box
            sx={{
                backgroundColor: 'background.default',
                p: 3
            }}
            >
            <Card>
                <CardHeader
                    action={(
                        <IconButton>
                            <DotsHorizontalIcon fontSize="small" />
                        </IconButton>
                    )}
                    title="Performance Over Time"
                />
                <Divider />
                <CardContent>
                    <Scrollbar>
                        <Box
                            sx={{
                                height: 375,
                                minWidth: 500,
                                position: 'relative'
                            }}
                        >
                        <ChartComponent
                            height={props.height}
                            options={chartOptions}
                            series={areaChartStore.series}
                            type="area"
                        />
                        </Box>
                    </Scrollbar>
                </CardContent>
            </Card>
        </Box>
    </div>
  );
});

export default AreaChartWithMobx;
