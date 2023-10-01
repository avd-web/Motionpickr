import React, { useEffect, useState } from "react";
import axios from "axios";
import { DashboardContext } from "./Context";
import UserPage from "./UserPage";
import Register from "./Register";
import Login from "./Login";

export default function Home() {
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
