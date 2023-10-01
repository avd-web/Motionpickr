import React from "react";
import Login from "./Login";
import { AuthHeader } from "../auth/authorization";

export default function UserPage() {
  if (AuthHeader()) {
    return (
      <>
        <p>logged in</p>
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
