import { React, useEffect, useState } from "react";

export default function WatchList() {
  const [watchList, setwatchList] = useState([]);

  const fetchWatchList = () => {
    //const data=axios.get("");
  };

  useEffect(() => fetchWatchList());
  return <div>watchList</div>;
}
