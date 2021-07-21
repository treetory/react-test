import { Grid, Box } from '@material-ui/core';
import './App.css';
import GridCard from './GridCard';

function App() {
  return (
    <div className="App">
      <Grid>
        <Grid item>
          <Box
              sx={{
                  backgroundColor: 'background.default',
                  p: 3
              }}
          >
            <GridCard title={'SimpleDataGrid'}></GridCard>
          </Box>
          <Box
              sx={{
                  backgroundColor: 'background.default',
                  p: 3
              }}
          >
            <GridCard title={'CommonFeaturesDataGrid'}></GridCard>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
