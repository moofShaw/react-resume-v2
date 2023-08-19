import React, {useState} from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Navbar () {
    
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className='navabr'>

                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>

        // <ul>
        //     <li><Link to="/Murph">Murph Shaw</Link></li>
        //     <li><Link to="/Stef">Stefan Vucic</Link></li>
        //     <li><Link to="/Home">Home</Link></li>
        // </ul>
    );
}
  
export default Navbar;