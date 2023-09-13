import React from "react";
import "../header/header.css";
import Navbar from "../navbar/navbar";

import {LoginLinkData} from "../navbar/loginLinkData";
import { LinkData } from "../navbar/linkData";

export default function Header() {
  return (
    <div className="header">
      <div>
        <h1>motionpickr</h1>
      </div>
      <div className="header-content">
        <Navbar links={LinkData} />
        <div>
          <Navbar links={LoginLinkData} />
        </div>
      </div>
    </div>
  );
}
