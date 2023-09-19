import React from "react";
import Navbar from "../navbar/navbar";
import { HiUserCircle } from "react-icons/hi";

// import { LoginLinkData } from "../navbar/loginLinkData";
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
          {/* <div className="icon-container"> */}
          <a className="icon" href="/account">
            <HiUserCircle className="icon--white" size={42} />
          </a>
          {/* </div> */}
          {/* <Navbar links={LoginLinkData} /> */}
        </ul>
      </nav>
    </header>
  );
}
