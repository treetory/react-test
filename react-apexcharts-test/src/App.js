import './App.css';
import BarChart from './containers/BarChart';
import BarChartWithMobx from './containers/BarChartWithMobx';
import LineChart from './containers/LineChart';

function App() {
  return (
    <div className="App">
      <div>
        <BarChart height={400}></BarChart>
        <BarChartWithMobx height={400}></BarChartWithMobx>
        <LineChart height={400}></LineChart>
      </div>
    </div>
  );
}

export default App;
