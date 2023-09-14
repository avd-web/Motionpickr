import React from "react";
import GenreItem from "../components/homepagecomponents/GenreDropDown";
import Hero from "../components/hero/Hero";
import MovieList from "../components/moviecomponents/MovieList";

export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <GenreItem />
      {/* <MovieList /> */}
    </>
  );
}
