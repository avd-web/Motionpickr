import { Link } from "react-router-dom";

export default function MovieListItem({ movie, render, genres, cast }) {
  if (render === "movielist") {
    return (
      <tr key={movie.id} className="movie-container">
        <td className="text-items item1"> {movie.title} </td>
        <td className="text-items item2"> {movie.tagline} </td>
        <td className="text-items item3">
          {" "}
          {Math.ceil(movie.popularity * 10) / 10}{" "}
        </td>
        <td>
          <Link to={"/movie/" + movie.id}>
            <button className="text-items button"> view </button>
          </Link>
        </td>
      </tr>
    );
  } 
}
