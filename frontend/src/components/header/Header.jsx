import React from "react";
import "../../styles/MAINstyles.css";
import Navbar from "../navbar/navbar";

import { LoginLinkData } from "../navbar/loginLinkData";
import { LinkData } from "../navbar/linkData";

export default function Header() {
  return (
    <header>
      <nav class="nav">
        <a class="nav__brand" href="/">
          <img src="images/logo.svg" alt="" />
        </a>

        <ul className="list nav__list">
          <Navbar links={LinkData} />
          <Navbar links={LoginLinkData} />
        </ul>
      </nav>
    </header>
  );
}
