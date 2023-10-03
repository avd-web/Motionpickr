import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GenreItem() {
  const [genres, setGenres] = useState([]);

  const fetchGenre = async () => {
    const genres = await axios.get("http://localhost:8080/api/v1/genre/all");
    console.log(genres.data);
    setGenres(genres.data);
  };

  useEffect(() => {
    fetchGenre();
    console.log(genres);
  }, []);

  return (
    <div className="dropdown-genre">
      <h2>genre</h2>
      {genres
        ? genres.map((genre) => (
            <Link
              to={`/genre/${genre.id}`}
              key={genre.id}
              className="dropdown-genre-content"
              value={genre.id}
            >
              {genre.name}
            </Link>
          ))
        : "loading"}
    </div>
  );
}
