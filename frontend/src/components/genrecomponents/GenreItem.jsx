import React from "react";
import '../../styles/genreItemSheet.scss'
import { Link } from "react-router-dom";

export default function GenreItem({genre}) {
  return (
     <div key={genre.id} className="genre-box">
        <Link to={`/genre/${genre.id}`}> {genre.name} </Link>
    </div>
  )
}
 