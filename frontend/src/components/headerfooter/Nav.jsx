import React from "react";
import { Link } from "react-router-dom";
import Login from "../../pages/Login";

export default function Nav() {
  var LinkData = [
    { name: "Movies", link: "/movie" },
    { name: "Recommended", link: "/recommended" },
    { name: "Account", link: "/userpage" },
    { name: "Watchlist", link: "/watchlist" },
  ];

  return (
    <>
      <nav>
        <ul>
          {LinkData.map((LinkData) => (
            <li className="nav__item" key={LinkData.name}>
              <Link to={LinkData.link}>{LinkData.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
