import React from 'react'
import './style.css'

function Card (props) {
  return (
    <div className='card'>
      <div className='img-container'>
        {/* Make Image clickable for all pictures in card */}
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  )
}

export default Card
