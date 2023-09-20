import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthHeader } from "../../auth/authorization";
import Review from "./review";
import "./review.css";

export default function ViewReviews({ movie_id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log(movie_id);
    const getReviews = async () => {
      await axios
        .get(
          "http://localhost:8080/api/v1/review/movie/" + movie_id,
          AuthHeader()
        )
        .then((data) => {
          setReviews(data.data);
   
        });
    };
    getReviews();
 
  }, []);

  return <div className="reviews-container">{reviews.map((item) => ( <Review  review={item.review} firstName={item.userDto.firstname} email={item.userDto.email}/> ))}</div>;
}
