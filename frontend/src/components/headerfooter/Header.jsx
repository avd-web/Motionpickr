import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <a className="nav__brand" href="/">
          <img src="../src/assets/images/test.png" alt="logo" />
        </a>
        <Nav />
      </nav>
    </header>
  );
}
