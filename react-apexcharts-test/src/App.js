import './App.css';
import BarChart from './containers/BarChart';
import LineChart from './containers/LineChart';

function App() {
  return (
    <div className="App">
      <div>
        <BarChart height={400}></BarChart>
        <LineChart height={400}></LineChart>
      </div>
    </div>
  );
}

export default App;
