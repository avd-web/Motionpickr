import React, { useEffect, useState } from "react";
import "../../styles/movieSheet.css";
import { Link } from "react-router-dom";

export default function MovieList({ movie }) {
  return (
    <div className="movie-container">
      <div className="movie-item">
        <div className="movie-text" key={movie.id}>
          <p className="text-items item1"> {movie.title} </p>
          <p className="text-items item2"> description </p>
          <p className="text-items item3"> score </p>
         <Link to={"/movie/"+movie.id}> <button className="text-items button"> view </button></Link>
        </div>
      </div>
    </div>
  );
}
