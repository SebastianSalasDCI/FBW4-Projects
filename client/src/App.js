import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Views/Main'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
      </Router>
    </>
  );
}

export default App;
