import { Link } from "react-router-dom";
import MovieOverview from "./MovieOverview";

export default function MovieItem({ movie, render, genres, cast }) {
  if (render === "movielist") {
    return (
      <tr key={movie.id}>
        <td> {movie.title} </td>
        <td> {movie.tagline} </td>
        <td> {Math.ceil(movie.popularity * 10) / 10} </td>
        <td>
          <Link to={"/movie/" + movie.id}>
            <button> view </button>
          </Link>
        </td>
      </tr>
    );
  } else if (render === "viewMovie") {
    return <MovieOverview movie={movie} genres={genres} cast={cast} />;
  }
}
