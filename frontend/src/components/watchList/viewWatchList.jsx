import axios from "axios";
import { React, useEffect, useState } from "react";
import { AuthHeader } from "../../auth/authorization";
import Movie from "../movie/movie";


export default function ViewWatchList() {
    const [watchList, setwatchList] = useState([]);
  
    useEffect(() => {
      const getWatchList = async() => {
        let list = await axios.get(
          "http://localhost:8080/api/v1/watchlist",AuthHeader()
        );

        setwatchList(list.data);
        console.log(watchList);
      
      
      };
      getWatchList();

    }, []);
  
    return <div className="watchlist-container">{watchList.map((item)=>{return <Movie genres={item.genres} title={item.title}/>})}</div>;
  }
  