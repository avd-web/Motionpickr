import React from 'react'
import { Link } from 'react-router-dom';
import "../navlink/navlink.css"

export default function NavLink({name,link}) {
  return (
    <div key={name} className='link-container'><Link key={link} to={link}>to: {name}</Link></div>
  )
}
