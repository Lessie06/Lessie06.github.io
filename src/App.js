import logo from './logo.svg';
import './App.css';
import React from 'react';

import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';



function App() {
  return (
    <div className="App">
    <HomePage />
    <AboutMe />
    </div>
  );
}

export default App;
