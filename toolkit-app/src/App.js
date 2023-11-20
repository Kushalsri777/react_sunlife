import logo from './logo.svg';
import './App.css';
import CounterApp from './redux/components/CounterApp';
import AuthApp from './redux/components/AuthApp';

function App() {
  return (
    <div className="App">
      <AuthApp/>
      <CounterApp/>
    </div>
  );
}

export default App;
