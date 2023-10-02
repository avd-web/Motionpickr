import "../../styles/movieSheet.css";
import { Link } from "react-router-dom";

export default function MovieItem({ movie, overviewPage }) {

  console.log(movie)

  if (overviewPage) {
    return (
      <div className="movie-container">
        <div className="movie-item">
          <div className="movie-text" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <p className="text-items item1"> {movie.title} </p>
            </Link>
            <p className="text-items item2"> description </p>
            <p className="text-items item3"> score </p>
            <p className="text-items button"> add </p>
          </div>
        </div>
      </div>
    );
  } else return (
      <div>
        <div>
          <h1> {movie.title} </h1>
            <div>
              <p> {movie.overview} </p>
              <img src={`https://image.tmdb.org/t/p/w500${movie.posterLink}`} alt={"not found"} />
            </div>
        </div>
      </div>
  )
}
