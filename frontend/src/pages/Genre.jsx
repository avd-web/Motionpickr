import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import GenreItem from "../components/pageComponents/genrecomponents/GenreItem";
import '../styles/genreSheet.scss';

export default function Genre() {
  const [genres, setGenres] = useState([{}]);

  const fetchGenres = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/genre/all");
    const allGenres = response.data;
    setGenres(allGenres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
      <div>
        <h1 id="genrepage-header"> Genre Overview  </h1>
           <div className="genre-menu">
      {genres.map(genre => (
        <GenreItem genre={genre} />
      ))}
    </div>
      </div>
  );
}
