import React from 'react'

function Card (props){
  return (
    <div className='parent'>
      <div className="card">
        <img src={props.img} alt="tithy" />
        <h1>{props.user}</h1>
        <p>Iam recently learning React JS from Sheriyans Coding School. And I am ennjoying it. I want to be a developer which will teach me how to build anything rather than breaking it.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card;