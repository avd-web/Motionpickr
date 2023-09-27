import React from "react";
import { useContext } from "react";

export default function Movie({ title, genres }) {
  const access_token = useContext(DashboardContext);
  return (
    <div>
      {access_token}
      <h2>{title}</h2>
      <div className="description-container"><p>description goes here</p></div>
      <div className="genres-container">
        {genres.map((genre) => (
          <div key={genre.name} className="genre-container">
            {genre.name}
          </div>
        ))}
      </div>
      <div className="actors-container"><div>here be actors</div><div>here be actors</div></div>
    </div>
  );
}
