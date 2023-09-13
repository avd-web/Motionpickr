import React from "react";
import { Link } from "react-router-dom";
import "../navlink/navlink.css";

export default function NavLink({ name, link }) {
  return (
    <>
      <Link to={link}>{name}</Link>
    </>
  );
}
