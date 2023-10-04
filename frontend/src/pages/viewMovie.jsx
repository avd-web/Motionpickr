import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthHeader } from "../auth/authorization";
import AddReview from "../components/pageComponents/reviews/addReview";
import ViewReviews from "../components/pageComponents/reviews/viewReviews";
import Home from "../pages/HomePage";
import AddToWatchListButton from "../components/pageComponents/watchList/addToWatchListButton";
import MovieOverview from "../components/pageComponents/viewMovieComponent/MovieOverview";

export default function ViewMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(undefined);
  const [cast, setCast] = useState([{}]);

  const fetchCastByMovie = async () => {
    const response = await axios.get(
      `http://localhost:8080/api/v1/movie/cast/${id}`
    );

    const responseCast = response.data.map((castMember) => ({
      name: castMember.actor.name,
      character: castMember.character,
      id: castMember.id * 1000,
    }));

    setCast(responseCast);
  };

  const getMovie = async () => {
    const data = await axios.get("http://localhost:8080/api/v1/movie/" + id);
    setMovie(data.data);
  };

  useEffect(() => {
    getMovie();
    fetchCastByMovie();
  }, []);

  if (movie) {
    return (
      <>
        <MovieOverview
          movie={movie}
          title={movie.title}
          genres={movie.genres}
          render={"viewMovie"}
          cast={cast}
        />

        <AddReview id={id} />
        <ViewReviews movie_id={id} key={movie.id} />
        <AddToWatchListButton movie_id={id} />
      </>
    );
  } else {
    return <Home />;
  }
}
