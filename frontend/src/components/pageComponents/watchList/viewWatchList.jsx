import axios from "axios";
import { React, useEffect, useState } from "react";
import { AuthHeader } from "../../../auth/authorization";

export default function ViewWatchList() {
  const [watchList, setwatchList] = useState([]);

  const getWatchList = async () => {
    const list = await axios.get(
      "http://localhost:8080/api/v1/watchlist",
      AuthHeader()
    );

    setwatchList(list.data);
  };

  useEffect(() => {
    getWatchList();
    console.log(watchList);
  }, []);

  return (
    <div className="watchlist-container">
      {watchList.map((item) => (
        <div key={item.id} className="watchlist-container">
          <h2> {item.title} </h2>
          <div className="movie-container">
            <p> {item.tagline} </p>
              {item.genres.map(genre => (
                <div key={genre.id} className="genre-container">
                  <p> {genre.name} </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
