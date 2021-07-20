import './App.css';
import BarChart from './containers/BarChart';
import BarChartWithMobx from './containers/BarChartWithMobx';
import LineChart from './containers/LineChart';
import LineChartWithMobx from './containers/LineChartWithMobx';
import RadialBarChartWithMobx from './containers/RadialBarChartWithMobx';

function App() {
  return (
    <div className="App">
      <div>
        <BarChart height={400}></BarChart>
        <BarChartWithMobx height={400}></BarChartWithMobx>
        <LineChart height={400}></LineChart>
        <LineChartWithMobx height={400}></LineChartWithMobx>
        <RadialBarChartWithMobx height={300}></RadialBarChartWithMobx>
      </div>
    </div>
  );
}

export default App;
