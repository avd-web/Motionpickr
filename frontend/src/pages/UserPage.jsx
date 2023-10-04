import React, { useEffect, useState } from "react";
import Login from "./Login";
import { AuthHeader } from "../auth/authorization";
import WatchList from "./watchList";
import axios from "axios";

export default function UserPage() {
  const getUser = async () => {
    console.log(
      await axios.get("http://localhost:8080/api/v1/watchlist", AuthHeader())
    );
  };

  return <>{getUser}</>;
  // const [user, setUser] = useState();
  // async function userInfo() {
  //   if (sessionStorage.getItem("access_token")) {
  //     const user = await axios.get(
  //       `http://localhost:8080/api/v1/user`,
  //       AuthHeader()
  //     );
  //     // const user = sessionStorage.getItem("access_token")
  //     console.log(user.data);
  //     setUser(user.data.user);
  //   }
  // }
  // useEffect(() => {
  //   userInfo();
  // }, []);
  // if (AuthHeader()) {
  //   return (
  //     <>
  //       <WatchList />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Login />
  //     </>
  //   );
  // }
}
