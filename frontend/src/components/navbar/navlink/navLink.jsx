import React from 'react'
import { Link } from 'react-router-dom';
import "../navlink/navlink.css"

export default function NavLink({name,link}) {
  return (
    <div className='link-container'><Link to={link}>to: {name}</Link></div>
  )
}
