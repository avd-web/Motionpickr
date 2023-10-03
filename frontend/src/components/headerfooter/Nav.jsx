import React from "react";
import { Link } from "react-router-dom";
import Login from "../../pages/Login";

export default function Nav() {
  var LinkData = [
    { name: "Movies", link: "/movie" },
    { name: "Recommended", link: "/recommended" },
    { name: "Account", link: "/userpage" },
  ];

  return (
    <>
      {/* <svg class="icon icon--white nav__toggler">
          <use xlink:href="images/sprite.svg#menu"></use>
        </svg> */}
      <ul className="list nav__list">
        {LinkData.map((LinkData) => (
          <li className="nav__item" key={LinkData.name}>
            <Link to={LinkData.link}>{LinkData.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
