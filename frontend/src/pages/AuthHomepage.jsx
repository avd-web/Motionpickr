import React from "react";
import Login from "./Login";
import UserPage from "./UserPage";
import Register from "./Register";

export default function Auth() {
  function authenticate() {
    let token = null;
    try {
      token = sessionStorage.getItem("access_token");
      console.log(token);
    } catch (error) {
      console.error("Something bad happened retrieving the access token");
      console.error(error);
    }
    if (token) {
      return (
        <>
          <UserPage />
        </>
      );
    } else {
      return (
        <>
          <Login />
          <Register />
        </>
      );
    }
  }

  return <>{authenticate()}</>;
}
