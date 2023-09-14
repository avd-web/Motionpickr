import React from "react";
import NavLink from "../navbar/navlink/navLink.jsx";

export default function Navbar({ links }) {
  return (
    <>
      {links.map((item) => (
        <li className="nav__item">
          <NavLink name={item.name} link={item.link} />
        </li>
      ))}
    </>
  );
}
