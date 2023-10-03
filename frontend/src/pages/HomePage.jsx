import React from "react";
import Login from "./Login";
import { AuthHeader } from "../auth/authorization";
import Hero from "../components/hero/Hero";

export default function HomePage() {
  if (AuthHeader()) {
    return (
      <>
        <Hero />
        <p>logged in</p>
      </>
    );
  } else {
    return (
      <>
        <Hero />
        <Login />
      </>
    );
  }
}
