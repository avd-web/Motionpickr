import axios from "axios";
import React, { useState } from "react";

export default function MovieSearch({ updateMovies }) {
  const [search, setSearch] = useState("");

  const fetchSearch = async () => {
    const fetchSearchResults = await axios.get(
      `http://localhost:8080/api/v1/movie/search/${search}`
    );

    updateMovies(fetchSearchResults.data);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearch();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleSearch} />
        <input type="submit" title="search" />
      </form>
    </div>
  );
}
