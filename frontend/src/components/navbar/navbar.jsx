import React from "react";
import "./navbar.css";
import NavLink from "../navbar/navlink/navLink.jsx";
import { LinkData } from "./linkData";

export default function Navbar() {
  return (
    <div className="navbar">
      {console.log(LinkData)}
      {LinkData.map(item=><NavLink name={item.name} link={item.link} />)}
    </div>
  );
}
