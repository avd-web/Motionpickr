import axios from "axios";
import { React, useEffect, useState } from "react";
import { AuthHeader } from "../../auth/authorization";
import Movie from "../movie/movie";
import { useContext } from "react";
import { DashboardContext } from "../../pages/Context";

export default function ViewWatchList() {
  const [watchList, setwatchList] = useState([]);
  const access_token = useContext(DashboardContext);

  useEffect(() => {
    const getWatchList = async () => {
      let list = await axios.get(
        "http://localhost:8080/api/v1/watchlist",
        AuthHeader(access_token)
      );

      setwatchList(list.data);
      console.log(watchList);
    };
    getWatchList();
  }, []);

  return (
    <div className="watchlist-container">
      {console.log(AuthHeader(access_token))}
      {watchList.map((item) => {
        return <Movie genres={item.genres} title={item.title} />;
      })}
    </div>
  );
}
