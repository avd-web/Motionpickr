import React, { useEffect, useState } from "react";
import GenreItem from "../components/homepagecomponents/GenreDropDown";
import Hero from "../components/hero/Hero";
import MovieList from "../components/moviecomponents/MovieList";
import axios from "axios";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const movieFetch = await axios.get(
      `http://localhost:8080/api/v1/movie?page=0&size=10`
    );
    setMovies(movieFetch.data.content);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Hero></Hero>
      <GenreItem />
      {movies.map((movie) => (
        <MovieList movie={movie} key={movie.id} />
      ))}
    </>
  );
}
