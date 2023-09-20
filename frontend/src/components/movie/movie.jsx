import React from "react";

export default function movie({ title, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="genres-container">
        {genres.map((genre) => (
          <div key={genre.name} className="genre-container">
            {genre.name}
          </div>
        ))}
      </div>
    </div>
  );
}
