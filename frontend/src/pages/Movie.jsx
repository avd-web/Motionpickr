import React, { useState, useEffect } from "react";
import MovieList from "../components/moviecomponents/MovieList";
import AlphabetBar from "../components/moviecomponents/AlphabetBar";
import axios from "axios";
import MovieSearch from "../components/moviecomponents/MovieSearch";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);

  const fetchMovie = async (numbPage) => {
    const fetchMovies = await axios.get(
      `http://localhost:8080/api/v1/movie?page=${numbPage}&size=30`
    );
    console.log(fetchMovies.data.content);
    setMovies(fetchMovies.data.content);
  };

  useEffect(() => {
    fetchMovie(page);
  }, []);

  const updateMovie = (list) => {
    setMovies(list);
  };

  const loadMoreMOvies = () => {
    setPage(page + 1);
    fetchMovie(page);
  };

  return (
    <div>
      <AlphabetBar updateMovies={updateMovie} />
      <MovieSearch updateMovies={updateMovie} />
      {movies.map((movie) => (
        <MovieList movie={movie} key={movie.id}/>
      ))}
    </div>
  );
}
