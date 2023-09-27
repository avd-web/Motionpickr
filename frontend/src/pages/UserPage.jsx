import React from "react";
import { useContext } from "react";
import { DashboardContext } from "./Context";
import Recommended from "./userRecommended";
import ViewWatchList from "../components/watchList/viewWatchList";
import ViewMovie from "./viewMovie";

export default function UserPage() {
  const access_token = useContext(DashboardContext);

  if (access_token) {
    return (
      <>
        {/* <p>{access_token}</p> */}
        <Recommended />
        <ViewWatchList/>
      </>
    );
  } else {
    return <>loading....</>;
  }
}
