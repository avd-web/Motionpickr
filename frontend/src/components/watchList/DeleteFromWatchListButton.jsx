import axios from "axios";
import React from "react";

export default function DeleteFromWatchListButton({ movie_id }) {
  const handleClick = async (event) => {
    let requestBody = { movieId: movie_id };

    await axios.delete(
      "http://localhost:8080/api/v1/watchlist",
      requestBody,
      AuthHeader
    );
  };

  return <button onClick={handleClick}>add</button>;
}
