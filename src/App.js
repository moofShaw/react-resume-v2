import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
        <p>
          ShawShank Developers.
        </p>
        <h1>Big Dogs</h1> 
        <Navbar /> 
    </div>

  );
}

export default App;
