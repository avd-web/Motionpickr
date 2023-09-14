import React from "react";
import NavLink from "../navbar/navLink.jsx";

export default function Navbar({ links }) {
  return (
    <>
      {links.map((item) => (
        <li className="nav__item" key={item.name}>
          <NavLink name={item.name} link={item.link} />
        </li>
      ))}
    </>
  );
}
