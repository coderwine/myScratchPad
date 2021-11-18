// import logo from './logo.svg';
import './App.css';

// Components
import Navbar from './components/Navbar';
import MainPage from './components/MainPage'
import Cycle from './components/Cycle'

function App() {
  //NOTE:  React Router Dom v6 installed.  Would like to build out a proper nav to swap between my scratch pad.
  //NOTE: Would like to look into incorporating next.js or Redux in order to handle state management.
  return (
    <div className="App">
        <Navbar />
        <MainPage />
        <Cycle />
    </div>
  );
}

export default App;
