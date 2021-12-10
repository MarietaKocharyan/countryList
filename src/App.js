import logo from './logo.svg';
import './App.css';
import  Hedaer from './components/header';
import ListOfCountries from './components/list';
import ListenByLaungage from './components/byLagunage';

function App() {
  return (
    <div className="App">
      <Hedaer />
      <ListOfCountries />
    </div>
  );
}

export default App;
