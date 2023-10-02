import { React, useState, useEffect } from "react";
import { useContext } from "react";
import { DashboardContext } from "./Context";
import Home from "./Home";


export default function Recommended() {
  const access_token = useContext(DashboardContext);

  if (access_token) {
    return (
      <>
        <p>{access_token}</p>
      
      </>
    );
  } else {
    return (
      <>
        <Home />
      </>
    );
  }
}
