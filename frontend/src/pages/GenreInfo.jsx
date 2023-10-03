import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviePerGenre from "../components/pageComponents/genrecomponents//MoviePerGenre";

export default function GenreInfo() {
  const { id } = useParams();
  const [movieGenre, setMovieGenre] = useState([{}]);
  const [genreName, setGenreName] = useState("");

  const filterGenreName = (movie) => {
    //needs loosy comparison, because for some reason the strict equality wont work between genre.id and id
    //Probably because of some behind-the-scenes string vs number data-type
    movie.genres.some((genre) => {
      if (genre.id == id) {
        setGenreName(genre.name);
      }
    });
  };

  const fetchMoviesPerGenre = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/v1/movie/genre/${id}`
    );
    const moviesPerGenre = response.data;
    filterGenreName(moviesPerGenre[0]);
    setMovieGenre(moviesPerGenre);
    console.log(movieGenre);
  };

  useEffect(() => {
    fetchMoviesPerGenre();
  }, []);

  return (
    <div>
      <h1 className="genre-header"> {genreName} </h1>
      <div className="movieGenre-container">
        {movieGenre.map(movie => (
          <MoviePerGenre title={movie.title} key={movie.id}/>
        ))}
      </div>
    </div>
  );
}
