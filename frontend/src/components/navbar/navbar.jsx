import React from 'react';
import "./navbar.css";
import NavLink from '../navbar/navlink/navLink.jsx'


export default function Navbar() {
  return (
    <div className='navbar'>
    <NavLink link={"/movie"} name={"movies"}/>
    
    </div>
  )
}
