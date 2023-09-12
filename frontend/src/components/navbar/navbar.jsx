import React from "react";
import "./navbar.css";
import NavLink from "../navbar/navlink/navLink.jsx";
import { LinkData } from "./linkData";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>navbar</h2>
      <div className="navbar-list-container">
        
        <div className="list-container">
          {LinkData.map((item) => (
            <NavLink name={item.name} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
