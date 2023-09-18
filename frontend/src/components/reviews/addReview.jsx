import axios, { Axios } from "axios";
import React, { useState } from "react";
import { AuthHeader } from "../../auth/authorization";

export default function AddReview({movie_id}) {
  const [review, setReview] = useState("");

  const reviewBody=()=>{
    return {
        movie_id:movie_id,
        email:sessionStorage.getItem("user_email"),
        review:review

    }
  }

  const handleSubmit=(ev)=>{ev.preventDefault();
    axios.post("http://localhost:8080/api/v1/review/add/",reviewBody,AuthHeader())
  }

  return (
    <div>
      <form>
        <label htmlFor="review-comment"></label>
        <input
          type="text"
          id="review-commment"
          onChange={(ev) => {
            setReview(ev.target.value);    
          }}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}
