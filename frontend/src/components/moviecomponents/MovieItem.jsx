import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/movieSheet.css";

export default function MovieItem() {
  const [movies, setMovies] = useState([{}]);
  const [display, setDisplay] = useState(30);
  const [loading, setLoading] = useState(true);

  const fetchMovie = async () => {
    const movies = await axios.get("http://localhost:8080/api/v1/movie/list");
    console.log(movies.data);
    setLoading(false);
    setMovies(movies.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const loadMoreMOvies = () => {
    setDisplay((amount) => amount + 10);
  };

  return (
    <div className="movie-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        movies.slice(0, display).map((movie) => (
          <div key={movie.id} className="movie-item">
            <div className="movie-text">
              <p className="text-items item1"> {movie.title} </p>
              <p className="text-items item2"> description </p>
              <p className="text-items item3"> score </p>
              <p className="text-items button" > add </p>
            </div>
          </div>
        ))
      )}
      {!loading && display < movies.length && (
        <button onClick={loadMoreMOvies} className="load-button">
          Load More
        </button>
      )}
    </div>
  );
}
