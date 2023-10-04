import React, { useState, useEffect } from "react";
import MovieListItem from "../components/pageComponents/movieListComponent/MovieListItem";
import AlphabetBar from "../components/pageComponents/movieListComponent/AlphabetBar";
import MovieSearch from "../components/pageComponents/movieListComponent/MovieSearch";
import Pagination from "../components/generalcomponent/Pagination";
import axios from "axios";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [size] = useState(5);
  const [url, setUrl] = useState();
  const [currentLetter, setCurrentLetter] = useState();
  const [search, setSearch] = useState();

  const fetchFilter = (fetchFilter) => {
    return fetchFilter;
  };

  const movieStandard = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/v1/movie?page=${page}&size=${size}`
    );
    setMovies(res.data.movies);
    setTotalPages(res.data.totalPages);
  };

  const movieSearch = async () => {
    setUrl("search");
    const res = await axios.get(
      `http://localhost:8080/api/v1/movie/search/${search}?page=${page}&size=${size}`
    );
    setMovies(res.data.movies);
    setTotalPages(res.data.totalPages);
  };

  const moviePerLetter = async () => {
    setUrl("letter");
    const res = await axios.get(
      `http://localhost:8080/api/v1/movie/letter/${currentLetter}?page=${page}&size=${size}`
    );
    setMovies(res.data.movies);
    setTotalPages(res.data.totalPages);
  };

  useEffect(() => {
    switch (url) {
      case "letter":
        fetchFilter(moviePerLetter());
        break;
      case "search":
        fetchFilter(movieSearch());
        break;
      default:
        fetchFilter(movieStandard());
    }
  }, [page, currentLetter]);

  return (
    <div>
      <AlphabetBar
        moviePerletter={moviePerLetter}
        setCurrentLetter={setCurrentLetter}
        setPage={setPage}
        currentletter={currentLetter}
      />
      <MovieSearch
        search={search}
        setSearch={setSearch}
        movieSearch={movieSearch}
        setPage={setPage}
      />
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>
            <th>score</th>
            <th>nav</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      {movies.map((movie) => (
        <MovieListItem movie={movie} key={movie.id} />
      ))}
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
}
