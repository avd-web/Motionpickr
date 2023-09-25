import { React, useEffect, useState } from "react";
import ViewWatchList from "../components/watchList/viewWatchList";

export default function WatchList() {
  const [watchList, setwatchList] = useState([]);

  const fetchWatchList = () => {
    //const data=axios.get("");
  };

  //useEffect(() => fetchWatchList());
  return <div><ViewWatchList/></div>;
}
