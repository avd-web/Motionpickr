import React from "react";
import GenreItem from "../components/homepagecomponents/GenreDropDown";
import Hero from "../components/hero/Hero";
import MovieItem from "../components/moviecomponents/MovieItem";

export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <GenreItem />
      <MovieItem />
    </>
  );
}
