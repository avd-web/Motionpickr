import axios from "axios";
import { React, useEffect, useState } from "react";
import { AuthHeader } from "../auth/authorization";


export default function WatchList() {
    const [watchList, setwatchList] = useState([]);
  
    useEffect(() => {
      const getWatchList = () => {
        list = axios.get(
          "http://localhost:8080/api/v1/watchlist/" ,AuthHeader
        );
      };
      getWatchList();
    }, []);
  
    return <div>watchList</div>;
  }
  