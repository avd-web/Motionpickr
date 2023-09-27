import React, { useEffect, useState } from "react";
import GenreItem from "../components/homepagecomponents/GenreDropDown";
import Hero from "../components/hero/Hero";
import MovieList from "../components/moviecomponents/MovieItem";
import axios from "axios";
import Home from "./Home";

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );

  // const [movies, setMovies] = useState([]);
  // const fetchMovies = async () => {
  //   const movieFetch = await axios.get(
  //     `http://localhost:8080/api/v1/movie?page=0&size=10`
  //   );
  //   setMovies(movieFetch.data.movies);
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, []);

  // return (
  //   <>
  //     <Hero></Hero>
  //     <GenreItem />
  //     {movies.map((movie) => (
  //       <MovieList movie={movie} key={movie.id} />
  //     ))}
  //   </>
  // );
}
