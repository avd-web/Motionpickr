import React from "react";
import Login from "./Login";
import { AuthHeader } from "../auth/authorization";
import Hero from "../components/hero/Hero";
import WatchList from "./watchList";
import Recommended from "./userRecommended";

export default function HomePage() {
  if (AuthHeader()) {
    return (
      <>
        <Hero />
        <WatchList />
      </>
    );
  } else {
    return (
      <>
        <Hero />

        <Recommended />
      </>
    );
  }
}
