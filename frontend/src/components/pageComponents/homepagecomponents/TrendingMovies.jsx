import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function TrendingMovies() {
    const[top, setTop] = useState();

    const fetchTopMovies = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/movie/popularity?page=0&size=10")
        const movies = response.data.movies;

        movies.forEach(movie => console.log(`Title: ${movie.title}, Popularity: ${movie.popularity}`));
    }

    useEffect(() => {
        fetchTopMovies();
    },[])

  return (
    <div>TrendingMovies</div>
  )
}
