import React from "react";
import "../header/header.css";
import Navbar from "../navbar/navbar";

export default function Header() {
  return (
    <div className="header">
      <div>
        <h1>motionpickr</h1>
      </div>
      <div className="header-content">
        <Navbar />
        <div>
          <p>log me in/out/register</p>
        </div>
      </div>
    </div>
  );
}
