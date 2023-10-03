import { React } from "react";
import Login from "./Login";
import { AuthHeader } from "../auth/authorization";
import ViewWatchList from "../components/pageComponents/watchList/viewWatchList";

export default function WatchList() {
  if (AuthHeader()) {
    return (
      <>
        <ViewWatchList />
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
