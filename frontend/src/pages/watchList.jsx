import { React } from "react";
import Login from "./Login";
import { AuthHeader } from "../auth/authorization";

export default function WatchList() {
  if (AuthHeader()) {
    return <></>;
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
}
