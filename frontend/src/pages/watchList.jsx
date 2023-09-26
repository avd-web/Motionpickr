import { React, useEffect, useState } from "react";
import ViewWatchList from "../components/watchList/viewWatchList";
import { useContext } from "react";
import { DashboardContext } from "./Context";
import Home from "./Home";

export default function WatchList() {
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
