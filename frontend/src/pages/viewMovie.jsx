import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthHeader } from "../auth/authorization";
import AddReview from "../components/reviews/addReview";
import ViewReviews from "../components/reviews/viewReviews";
import AddToWatchListButton from "../components/watchList/addToWatchListButton";

export default function ViewMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await axios.get(
        "http://localhost:8080/api/v1/movie/" + id,
        AuthHeader()
      );
      setMovie(data.data);
    };
    fetchMovie();
    console.log("movie: "+movie);
  }, []);
  return (
    <div>
      <h2>
        {movie===null?null: movie.title}
      </h2>
      <span></span>
       <AddReview id={id}/>
      <ViewReviews movie_id={id}/>
      <AddToWatchListButton movie_id={id}/>

     
    </div>
  );
}
