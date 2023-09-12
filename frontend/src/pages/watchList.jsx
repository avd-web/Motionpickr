import {React,useEffect,useState }from 'react'
import axios from "axios";

export default function WatchList() {
    const [watchList,setwatchList]=useState([]);

    const fetchWatchList=()=>{
      //const data=axios.get("");
    }

    useEffect(()=>fetchWatchList())
  return (
    <div>watchList</div>
  )
}
