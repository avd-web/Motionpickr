import axios from 'axios'
import React from 'react'
import { AuthHeader } from '../../auth/authorization'

export default function addToWatchListButton({movie_id}) {

  const handleClick= async (event)=>{
    let requestBody={movieId:movie_id}
    await axios.post("http://localhost:8080/api/v1/watchlist/",requestBody,AuthHeader)
  }

  return (
    <button onClick={handleClick}>add</button>
  )
}

