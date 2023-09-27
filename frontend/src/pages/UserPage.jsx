import React from "react";
import { useContext } from "react";
import { DashboardContext } from "./Context";
import Recommended from "./recommended";

export default function UserPage() {
  const access_token = useContext(DashboardContext);

  if (access_token) {
    return (
      <>
        {/* <p>{access_token}</p> */}
        <Recommended />
      </>
    );
  } else {
    return <>loading....</>;
  }
}
