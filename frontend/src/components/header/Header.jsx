import React from "react";
import Navbar from "../navbar/navbar";

import { LoginLinkData } from "../navbar/loginLinkData";
import { LinkData } from "../navbar/linkData";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <a className="nav__brand" href="/">
          <img src="" alt="" />
        </a>

        <ul className="list nav__list">
          <Navbar links={LinkData} />
          <Navbar links={LoginLinkData} />
        </ul>
      </nav>
    </header>
  );
}
