import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ViewReview({movie_id}) {
const [reviews,setReviews]=useState([])

useEffect(()=>{
     const getReviews=  async()=>{
        await axios.get("http://localhost:8080/api/v1/review"+movie_id).then(
            (data)=>{ setReviews(data);}     
        )


    }
   
    console.log(reviews);
},[])

  return (
    <div>{reviews.map((item)=><div>{item.comment}</div>)}</div>
  )
}
