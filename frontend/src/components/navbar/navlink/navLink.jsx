import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ name, link }) {
  return (
    <>
      <Link to={link}>{name}</Link>
    </>
  );
}
