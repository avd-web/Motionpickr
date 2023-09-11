import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MovieItem() {
  const [movies, setMovies] = useState([{}]);

  const fetchMovie = async () => {
    const movies = await axios.get("http://localhost:8080/api/v1/movie/all");
    console.log(movies.data);
    setMovies(movies.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
