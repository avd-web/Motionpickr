import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";


export default function ViewMovie() {
    const {id}=useParams();
    const [movie,setMovie]=useState({});

    const fetchMovie= async()=>{
      const movi = await axios.get("http://localhost:8080/api/v1/movie/"+id);
      setMovie(movi);
    }

    useEffect(fetchMovie());
  return (
    <div>
      {movie===null?null:movie.id}
    </div>
  )
}
