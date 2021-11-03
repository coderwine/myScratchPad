// import logo from './logo.svg';
import './App.css';

// Components
import Navbar from './components/Navbar';
import MainPage from './components/MainPage'
import Cycle from './components/Cycle'

function App() {
  return (
    <div className="App">
        <Navbar />
        <MainPage />
        <Cycle />
    </div>
  );
}

export default App;
