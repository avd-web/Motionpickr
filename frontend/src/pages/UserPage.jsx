import React from "react";
import { useContext } from "react";
import { DashboardContext } from "./Context";
import Recommended from "./userRecommended";
import Login from "./Login";

export default function UserPage() {
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
