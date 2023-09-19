import React, { useState } from 'react'


export default function Review({review,firstName,email}) {
const [show,setShow]=useState(false);

  return (
    <div className='review-container'>
        <h3>{firstName} <sub>{email}</sub>
        <p>{review}</p></h3>
    </div>
  )
}
