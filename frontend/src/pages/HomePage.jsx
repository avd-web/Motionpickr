import React, { useEffect, useState } from "react";
import GenreItem from "../components/homepagecomponents/GenreDropDown";
import Hero from "../components/hero/Hero";
import MovieList from "../components/moviecomponents/MovieItem";
import axios from "axios";
import { AuthHeader } from "../auth/authorization";
import AuthHomepage from "./AuthHomepage";

export default function HomePage() {
  // const [movies, setMovies] = useState([]);
  // const fetchMovies = async () => {
  //   const movieFetch = await axios.get(
  //     `http://localhost:8080/api/v1/movie?page=0&size=10`
  //   );
  //   //ADD ERROR HANDLING?
  //   setMovies(movieFetch.data.content);
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, []);

  return (
    <>
      <Hero></Hero>
      <AuthHomepage />

      {/* <GenreItem /> */}

      {/* {movies.map((movie) => (
        <MovieList movie={movie} key={movie.id} />
      ))} */}
    </>
  );
}
