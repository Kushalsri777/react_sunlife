// import logo from './logo.svg';
import './App.css';
import AxiosApp from './axiosapp/AxiosApp';
import LandingPage from './components/LandingPage';
import CounterApp from './hooksapp/CounterApp';
import NotesApp from './hooksapp/NotesApp';

function App() {
  return (
    <div className="App">
      <CounterApp/>
      <NotesApp/>
      <LandingPage/>
      <AxiosApp/>
    </div>
  );
}

export default App;
