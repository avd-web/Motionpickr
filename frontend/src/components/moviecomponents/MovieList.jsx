import React, { useEffect, useState } from "react";
import "../../styles/movieSheet.css";

export default function MovieList({ movie }) {
  return (
    <div className="movie-container">
      <div className="movie-item">
        <div className="movie-text" key={movie.id}>
          <p className="text-items item1"> {movie.title} </p>
          <p className="text-items item2"> description </p>
          <p className="text-items item3"> score </p>
          <p className="text-items button"> add </p>
        </div>
      </div>
    </div>
  );
}
