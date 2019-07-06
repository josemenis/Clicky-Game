import React from 'react';
import './style.css';

function FriendCard (props) {
  return (
    <div className='card'>
      <div className='img-container'>
        <img alt={props.name} src={props.image} />
      </div>
      <div className='content'>
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      {/* add a click event to remove friend */}
      <span onClick={() => props.removeFriend(props.id)} className='remove'>
        𝘅
      </span>
    </div>
  )
}

export default FriendCard
