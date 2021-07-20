import {Container, Card, CardContent, Box, Grid, Button, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ChartComponent from "../components/ChartComponent";
import {observer} from 'mobx-react';
import store from '../store';

const RadialBarChartWithMobx = observer((props) => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: ['#27c6db'],
    labels: ['System Health'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily
          },
          value: {
            color: theme.palette.text.secondary
          }
        },
        hollow: {
          size: '60%'
        },
        track: {
          background: theme.palette.background.default
        }
      }
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  const {radialBarChartStore} = store;

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
                    RadialBarChart (use Mobx)
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
                        radialBarChartStore.getValue();
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
            <Container maxWidth="sm">
                <Card>
                    <CardContent>
                        <ChartComponent
                            height={props.height}
                            options={chartOptions}
                            series={radialBarChartStore.value}
                            type="radialBar"
                        />
                        <Typography
                            align="center"
                            color="textSecondary"
                            component="p"
                            variant="caption"
                        >
                        This shouldn&apos;t be bellow 80%
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    </div>
    
  );
});

export default RadialBarChartWithMobx;
