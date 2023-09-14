import React from "react";
import { LinkData } from "../loginNavBar/linkData";

export default function LoginNavBar() {
  return (
    <div>
      <div className="navbar-list-container">
        <div className="list-container">
          {LinkData.map((item) => (
            <NavLink name={item.name} link={item.link} />
          ))}
          {sessionStorage.getItem("access_token") === null ? null : (
             <button className='link-container'>logout</button>
          )}
        </div>
      </div>
    </div>
  );
}
