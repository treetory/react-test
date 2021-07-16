import './App.css';
import ChordExample from './components/ChordExample';

function App() {
  return (
    <div className="App">
      <ChordExample width={800} height={480} events={false}></ChordExample>
    </div>
  );
}

export default App;
