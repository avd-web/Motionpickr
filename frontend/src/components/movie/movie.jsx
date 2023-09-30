import React from "react";
import { useContext } from "react";
import { DashboardContext } from "../../pages/Context";
import { AuthHeader } from "../../auth/authorization";

export default function Movie({ title, genres }) {
  const access_token = AuthHeader();

  if(!title||!genres){return <div>loading</div>}

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
