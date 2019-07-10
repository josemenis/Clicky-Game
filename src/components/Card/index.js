import React from 'react'
import './style.css'

function Card (props) {
  // console.log("!!!!!!!!!!!!!!!!!!!!1")
  // console.log(props)
  return (
    <div className='card'>
      <div className='img-container'>
        {/* Make Image clickable for all pictures in card */}
        <img id={props.id} src={props.image} onClick={props.handleClick}
        />
      </div>
    </div>
  )
}

export default Card
