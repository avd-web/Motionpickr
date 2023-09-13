import React from "react";
import "./navbar.css";
import NavLink from "../navbar/navlink/navLink.jsx";

export default function Navbar({links}) {
  return (
    <div className="navbar">
      <h2>navbar</h2>       
        <div className="list-container">
          {links.map((item) => (
            <NavLink name={item.name} link={item.link} />
          ))}
      </div>
    </div>
  );
}
