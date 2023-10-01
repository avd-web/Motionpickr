import { React, useEffect, useState } from "react";
import ViewWatchList from "../components/watchList/viewWatchList";
import { useContext } from "react";
import { DashboardContext } from "./Context";
import Home from "./Home";
import Login from "./Login";

export default function WatchList() {
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
