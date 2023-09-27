import axios, { Axios } from "axios";
import React, { useState } from "react";
import { AuthHeader } from "../../auth/authorization";

export default function AddReview({ id }) {
  const [review, setReview] = useState("");
  const [sscore, setScore] = useState(0);
  const access_token = useContext(DashboardContext);

  const reviewBody = () => {
    return {
      movieId: id,
      userDto: {
        email: sessionStorage.getItem("user_email"),
        firstname: "",
        lastName: "",
      },
      score: sscore,
      review: review,
    };
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(id);
    console.log(reviewBody());
    axios.post(
      "http://localhost:8080/api/v1/review/add",
      reviewBody(),
      AuthHeader()
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="review-comment"></label>
        <label htmlFor="score"></label>
        <input
        required
        placeholder="score 0-5"
          pattern="^[0-5]$"
          type="text"
          name="score"
          id="score"
          onChange={(ev) => {
            setScore(ev.target.value);
          }}
          title="only digits 0 to 5!"
          value={sscore}
        />
        <input
        placeholder="review"
        required
          type="text"
          id="review-commment"
          onChange={(ev) => {
            setReview(ev.target.value);
          }}
          value={review}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}
