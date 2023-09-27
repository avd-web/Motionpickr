import { React, useState, useEffect } from "react";
import { useContext } from "react";
import { DashboardContext } from "./Context";
import Home from "./Home";
import axios from "axios";
import { AuthHeader } from "../auth/authorization";
import MovieList from "../components/moviecomponents/MovieItem";

export default function Recommended() {
  const access_token = useContext(DashboardContext);
  const [recommended,setRecommended]=useState([])

  useEffect(() => {
    const getRecommended = async () => {
      let list = await axios.get(
        "http://localhost:8080/api/v1/recommended",
        AuthHeader(access_token)
      );

      setRecommended(list.data);
      console.log("recommended: "+recommended);
    };
    getRecommended();
  }, []);


  if (access_token) {
    return (
      <>
      <table><thead></thead><tbody></tbody></table>
        {recommended.map((item)=>{<><div><MovieList movie={item}/></div></>})}
      </>
    );
  } else {
    return (
      <>
        <Home />
      </>
    );
  }
}
