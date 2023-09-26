import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthHeader } from "../auth/authorization";
import AddReview from "../components/reviews/addReview";
import ViewReviews from "../components/reviews/viewReviews";
import AddToWatchListButton from "../components/watchList/addToWatchListButton";
import Movie from "../components/movie/movie";

export default function ViewMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    let getWatchList = async () => {
      let data = await axios.get(
        "http://localhost:8080/api/v1/movie/"+id,AuthHeader()
      );

      setMovie(data.data);
   

    };
    getWatchList();

  },[]);

  return (
    <div>
      {console.log(movie)}
      <h2>{movie.title}</h2>
      <p>{movie.id}</p>
   
  
   
       <AddReview id={id}/>
      <ViewReviews movie_id={id}/>
      <AddToWatchListButton movie_id={id}/>
     
    </div>
  );
}
