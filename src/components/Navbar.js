import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <ul>
            <li><Link to="/Murph">Murph Shaw</Link></li>
            <li><Link to="/Stef">Stefan Vucic</Link></li>
            <li><Link to="/Home">Home</Link></li>
        </ul>
    );
}
  
export default Navbar;