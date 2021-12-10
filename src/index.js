import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
  <Route path='/' element={<HomePage />} />
    <Route path='/AboutMe' element={<AboutMe />} />
    <Route path='/ContactMe' element={<ContactMe />} />
    </Routes>
    
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
