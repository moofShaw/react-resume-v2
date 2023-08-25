import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [

    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'Stefan Vucic',
        path: '/stef',
        icon: <BsIcons.BsFillPersonFill/>,
        cName:'nav-text'
    },
    {
        title: 'Murph Shaw',
        path: '/murph',
        icon: <BsIcons.BsFillPersonFill/>,
        cName:'nav-text'
    }
    
]