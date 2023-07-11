import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Murph from "./Murph"
import Stef from "./Stef"
import Home from "./Home"


function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path='/Stef' element={<Stef/>}/>
        <Route exact path='/Murph' element={<Murph/>}/>
      </Routes> 
    </Router>


  );
} 

export default App;
