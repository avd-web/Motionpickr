import React, { useState } from 'react'


export default function Review({review,firstName,email,score}) {
const [show,setShow]=useState(false);

  return (
    <div className='review-container'>
        <h3>{firstName} <sub>{email}</sub>
       </h3>
       <div><div>{score}</div> <p>{review}</p></div>
       
    </div>
  )
}
