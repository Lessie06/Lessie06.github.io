import logo from './logo.svg';
import './App.css';
import React from 'react';

import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';




function App() {
  return (
    <div className="App">
    <HomePage />
    <AboutMe />
    <ContactMe />
    </div>
  );
}

export default App;
