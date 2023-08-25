import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Murph from "./Murph"
import Stef from "./Stef"
import Home from "./Home"


function App() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path='/stef' element={<Stef/>}/>
          <Route exact path='/murph' element={<Murph/>}/>
        </Routes>
      </Router>
    </>
  );
} 

export default App;
