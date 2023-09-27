import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthHeader } from "../auth/authorization";
import AddReview from "../components/reviews/addReview";
import ViewReviews from "../components/reviews/viewReviews";
import AddToWatchListButton from "../components/watchList/addToWatchListButton";
import Movie from "../components/movie/movie";
import { useContext } from "react";
import { DashboardContext } from "./Context";

export default function ViewMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const access_token = useContext(DashboardContext);

  useEffect(() => {

    console.log()
    let getWatchList = async () => {
      let data = await axios.get(
        "http://localhost:8080/api/v1/movie/" + id,
        AuthHeader(access_token)
      );

      setMovie(data.data);
    };
    getWatchList();
  }, []);

  if(!movie){return <>loading...</>}

  return (
    <div>
     {console.log(access_token)}
      <Movie title={movie.title} genres={movie.genres}/>

      <AddReview id={id} />
      <ViewReviews movie_id={id} />
      <AddToWatchListButton movie_id={id} />
    </div>
  );
}
