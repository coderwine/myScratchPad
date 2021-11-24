// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 

// Components
import Navbar from './components/Navbar';
import MainPage from './components/MainPage'
import Cycle from './components/Cycle'

function App() {
  //NOTE:  React Router Dom v6 installed.  Would like to build out a proper nav to swap between my scratch pad.
  //NOTE: Would like to look into incorporating next.js or Redux in order to handle state management.
  return (
    <div className="App">
      <BrowserRouter>
        {/*<Navbar />*/}
        <Routes>
          <Route path='/' element={<Navbar />} >
            <Route path='/cycle' element={<Cycle />} />
          </Route>
        </Routes>
      </BrowserRouter>
        {/*<MainPage />
        <Cycle />*/}
    </div>
  );
}

export default App;
