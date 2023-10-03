import React from "react";
// import "../../../styles/movieOverview.scss";

export default function MovieOverview({ movie, genres, cast }) {
  return (
    <div className="movie-overview-container">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.posterLink}`}
          alt=""
        />
      </div>
      <div className="genres">
        <h4>Genres</h4>
        <div className="genre-box">
          {genres.map((genre) => (
            <div key={genre.id} className="genre-item">
              <p className="genre">{genre.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="movie-header">{movie.title}</h2>
        <div className="description" key={movie.id}>
          <h2> Synopsis </h2>
          <p className="overview-text"> {movie.overview} </p>
        </div>
        <div className="actors-container">
          <h3> Cast </h3>
          {cast.map((castMember) => (
            <div key={castMember.id} className="cast-container">
              <p>{`${castMember.name} as ${castMember.character}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
