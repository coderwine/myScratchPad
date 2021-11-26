import './App.css';
import {
  Routes, 
  Route,
  } from 'react-router-dom'; 
// import { useState } from 'react';
import navPath from './data/navPath';

// Components
import Navbar from './components/Navbar';

function App() {
  //NOTE:  React Router Dom v6 installed.  Would like to build out a proper nav to swap between my scratch pad.
  //NOTE: Would like to look into incorporating next.js or Redux in order to handle state management.

  const buildNavbar = () => {
    return(
      navPath.map(i => {
        // let component = i.component;
        // console.log(component);

        return(
          <Route path={`/${i.path.toLocaleLowerCase()}`} element={i.component} />
        )
      })
    )
  }

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Navbar items={navPath}/>} >
            
            {buildNavbar()}
            </Route>
        </Routes>
    </div>
  );
}

export default App;
