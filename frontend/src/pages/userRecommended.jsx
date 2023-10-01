import { React, useState, useEffect } from "react";
import { useContext } from "react";
import { DashboardContext } from "./Context";
import Home from "./Home";
import Login from "./Login";

export default function Recommended() {
  const access_token = sessionStorage.getItem("access_token");

  if (access_token) {
    return (
      <>
        <p>{access_token}</p>
      </>
    );
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
}
